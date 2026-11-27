import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { EnvironmentVariables } from '../config/environment.js';
import { PrismaService } from '../database/prisma.service.js';
import { LiveUpdatesService } from '../live/live-updates.service.js';
import type { GeminiErrorInfo } from './gemini-errors.js';
import {
  learnedLimits,
  summarizeUsage,
  usageWindowStart,
  type GeminiLimits,
  type RecentRow,
  type UsageSummary,
} from './gemini-usage.js';

/** Usage rows older than this are deleted (at most once a day). */
const RETENTION_DAYS = 180;
const DAY_MS = 24 * 60 * 60 * 1000;
const RECENT_LIMIT = 20;

export type GeminiSource = 'discord' | 'http';

export interface GeminiUsageEntry {
  keyFingerprint: string;
  model: string;
  source: GeminiSource;
  requester: string | null;
  durationMs: number;
  usage?: {
    inputTokens: number | null;
    outputTokens: number | null;
    totalTokens: number | null;
  };
  error?: GeminiErrorInfo;
}

export interface KeyUsage extends UsageSummary {
  learnedLimits: GeminiLimits & { at: Date | null };
  allTime: { requests: number; firstAt: Date | null };
  recent: RecentRow[];
  lastError: {
    at: Date;
    kind: string;
    message: string | null;
    retryAfterSec: number | null;
  } | null;
}

/**
 * Counts every Gemini call in the gemini_requests table. Google offers no API
 * for a key's remaining quota, so this count is what the admin page shows.
 * Recording never fails the user's request.
 */
@Injectable()
export class GeminiUsageService {
  private readonly logger = new Logger(GeminiUsageService.name);
  private readonly databaseEnabled: boolean;
  private lastPurgeAt = 0;

  constructor(
    configService: ConfigService<EnvironmentVariables, true>,
    private readonly prisma: PrismaService,
    private readonly liveUpdatesService: LiveUpdatesService,
  ) {
    this.databaseEnabled = configService.get('DATABASE_ENABLED', {
      infer: true,
    });
  }

  isEnabled(): boolean {
    return this.databaseEnabled;
  }

  async record(entry: GeminiUsageEntry): Promise<void> {
    if (!this.databaseEnabled) {
      return;
    }

    try {
      await this.prisma.geminiRequest.create({
        data: {
          keyFingerprint: entry.keyFingerprint,
          model: entry.model.slice(0, 100),
          source: entry.source,
          requester: entry.requester?.slice(0, 100) ?? null,
          ok: entry.error === undefined,
          inputTokens: entry.usage?.inputTokens ?? null,
          outputTokens: entry.usage?.outputTokens ?? null,
          totalTokens: entry.usage?.totalTokens ?? null,
          durationMs: Math.max(0, Math.round(entry.durationMs)),
          errorStatus: entry.error?.status ?? null,
          errorKind: entry.error?.kind ?? null,
          errorMessage: entry.error?.message.slice(0, 500) ?? null,
          quotaId: entry.error?.quotaId ?? null,
          quotaValue: entry.error?.quotaValue ?? null,
          retryAfterSec: entry.error?.retryAfterSec ?? null,
        },
      });
      this.liveUpdatesService.notify('gemini-used');
      await this.purgeOldRows();
    } catch (error) {
      this.logger.warn(`Could not record Gemini usage: ${String(error)}`);
    }
  }

  async getKeyUsage(keyFingerprint: string, now: Date): Promise<KeyUsage> {
    const where = { keyFingerprint };
    const [rows, quotaErrors, aggregate, recent, lastError] = await Promise.all(
      [
        this.prisma.geminiRequest.findMany({
          where: { ...where, createdAt: { gte: usageWindowStart(now) } },
          select: {
            createdAt: true,
            ok: true,
            inputTokens: true,
            outputTokens: true,
            totalTokens: true,
            errorKind: true,
          },
        }),
        this.prisma.geminiRequest.findMany({
          where: { ...where, errorKind: 'quota', quotaId: { not: null } },
          orderBy: { createdAt: 'desc' },
          take: 50,
          select: { createdAt: true, quotaId: true, quotaValue: true },
        }),
        this.prisma.geminiRequest.aggregate({
          where,
          _count: { _all: true },
          _min: { createdAt: true },
        }),
        this.prisma.geminiRequest.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          take: RECENT_LIMIT,
          select: {
            createdAt: true,
            ok: true,
            inputTokens: true,
            outputTokens: true,
            totalTokens: true,
            errorKind: true,
            source: true,
            requester: true,
            durationMs: true,
            errorMessage: true,
            retryAfterSec: true,
            quotaId: true,
          },
        }),
        this.prisma.geminiRequest.findFirst({
          where: { ...where, ok: false },
          orderBy: { createdAt: 'desc' },
          select: {
            createdAt: true,
            errorKind: true,
            errorMessage: true,
            retryAfterSec: true,
          },
        }),
      ],
    );

    return {
      ...summarizeUsage(rows, now),
      learnedLimits: learnedLimits(quotaErrors),
      allTime: {
        requests: aggregate._count._all,
        firstAt: aggregate._min.createdAt,
      },
      recent,
      lastError: lastError
        ? {
            at: lastError.createdAt,
            kind: lastError.errorKind ?? 'other',
            message: lastError.errorMessage,
            retryAfterSec: lastError.retryAfterSec,
          }
        : null,
    };
  }

  private async purgeOldRows(): Promise<void> {
    const now = Date.now();

    if (now - this.lastPurgeAt < DAY_MS) {
      return;
    }

    this.lastPurgeAt = now;
    const { count } = await this.prisma.geminiRequest.deleteMany({
      where: { createdAt: { lt: new Date(now - RETENTION_DAYS * DAY_MS) } },
    });

    if (count > 0) {
      this.logger.log(
        `Deleted ${count} Gemini usage rows older than ${RETENTION_DAYS} days`,
      );
    }
  }
}
