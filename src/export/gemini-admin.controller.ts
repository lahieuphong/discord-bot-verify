import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import type { GeminiLimits } from '../gemini/gemini-usage.js';
import {
  GeminiUsageService,
  type KeyUsage,
} from '../gemini/gemini-usage.service.js';
import {
  GeminiService,
  type GeminiKeyCheck,
  type GeminiKeyInfo,
} from '../gemini/gemini.service.js';
import { getClientIp } from './export-auth.service.js';
import { AdminAuditService } from './admin-audit.service.js';
import { ExportSessionGuard } from './export-session.guard.js';

export interface GeminiOverview {
  generatedAt: Date;
  key: GeminiKeyInfo;
  /** Limits entered on the page / in .env (null = unknown). */
  limits: GeminiLimits;
  /** False when DATABASE_ENABLED=false: nothing can be counted. */
  trackingEnabled: boolean;
  /** Usage of the current key; null without a key or without the database. */
  usage: KeyUsage | null;
}

const MAX_LIMIT = 1_000_000_000;

function readLimit(body: Record<string, unknown>, key: keyof GeminiLimits) {
  const value = body[key];

  if (value === null || value === undefined || value === '' || value === 0) {
    return null;
  }

  if (
    typeof value !== 'number' ||
    !Number.isInteger(value) ||
    value < 0 ||
    value > MAX_LIMIT
  ) {
    throw new BadRequestException(
      'Hạn mức phải là số nguyên dương (để trống nếu chưa biết).',
    );
  }

  return value;
}

/** The Gemini tab of the admin page (same login as the member page). */
@Controller('export-excel/api/gemini')
@UseGuards(ExportSessionGuard)
export class GeminiAdminController {
  private readonly logger = new Logger(GeminiAdminController.name);

  constructor(
    private readonly geminiService: GeminiService,
    private readonly usageService: GeminiUsageService,
    private readonly adminAudit: AdminAuditService,
  ) {}

  @Get()
  @Header('Cache-Control', 'no-store')
  async overview(): Promise<GeminiOverview> {
    const now = new Date();
    const key = this.geminiService.keyInfo();
    const trackingEnabled = this.usageService.isEnabled();

    return {
      generatedAt: now,
      key,
      limits: this.geminiService.getLimits(),
      trackingEnabled,
      usage:
        trackingEnabled && key.fingerprint
          ? await this.usageService.getKeyUsage(key.fingerprint, now)
          : null,
    };
  }

  @Post('check')
  @HttpCode(HttpStatus.OK)
  @Header('Cache-Control', 'no-store')
  async check(@Req() request: Request): Promise<GeminiKeyCheck> {
    const result = await this.geminiService.checkKey();
    this.adminAudit.record(
      request,
      'gemini_key_check',
      result.ok ? 'Key hoạt động' : `Lỗi: ${result.error.message}`,
    );
    return result;
  }

  @Put('key')
  @Header('Cache-Control', 'no-store')
  async replaceKey(
    @Body() body: unknown,
    @Req() request: Request,
  ): Promise<GeminiKeyInfo> {
    const apiKey =
      typeof body === 'object' && body !== null
        ? (body as Record<string, unknown>).apiKey
        : undefined;

    if (typeof apiKey !== 'string' || apiKey.trim().length === 0) {
      throw new BadRequestException('Vui lòng nhập key mới.');
    }

    let key: GeminiKeyInfo;
    try {
      key = await this.geminiService.replaceKey(apiKey);
    } catch (error) {
      // Never the key itself: only why it was refused.
      this.adminAudit.record(
        request,
        'gemini_key_rejected',
        error instanceof Error ? error.message : String(error),
      );
      throw error;
    }
    this.adminAudit.record(
      request,
      'gemini_key_replace',
      `Key mới ${key.masked ?? ''}`.trim(),
    );
    this.logger.log(
      `Gemini key replaced from ${getClientIp(request)} (now ${key.masked})`,
    );
    return key;
  }

  @Put('limits')
  @Header('Cache-Control', 'no-store')
  async updateLimits(
    @Body() body: unknown,
    @Req() request: Request,
  ): Promise<GeminiLimits> {
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
      throw new BadRequestException('Dữ liệu hạn mức không hợp lệ.');
    }

    const record = body as Record<string, unknown>;
    const limits = await this.geminiService.updateLimits({
      rpd: readLimit(record, 'rpd'),
      rpm: readLimit(record, 'rpm'),
      tpm: readLimit(record, 'tpm'),
    });
    this.logger.log(`Gemini limits changed from ${getClientIp(request)}`);
    const text = (value: number | null) =>
      value === null ? 'chưa biết' : String(value);
    this.adminAudit.record(
      request,
      'gemini_limits_update',
      `RPD ${text(limits.rpd)} · RPM ${text(limits.rpm)} · TPM ${text(limits.tpm)}`,
    );
    return limits;
  }
}
