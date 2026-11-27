import { quotaKind } from './gemini-errors.js';
import {
  nextQuotaReset,
  QUOTA_TIME_ZONE,
  quotaDayKey,
  quotaDayStart,
} from './quota-day.js';

/** Days shown in the usage chart (today included). */
export const USAGE_HISTORY_DAYS = 14;

const MINUTE_MS = 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

/** Limits of the key's project; null when unknown. */
export interface GeminiLimits {
  /** Requests per day. */
  rpd: number | null;
  /** Requests per minute. */
  rpm: number | null;
  /** Input tokens per minute. */
  tpm: number | null;
}

export interface UsageRow {
  createdAt: Date;
  ok: boolean;
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  errorKind: string | null;
}

export interface QuotaErrorRow {
  createdAt: Date;
  quotaId: string | null;
  quotaValue: number | null;
}

export interface RecentRow extends UsageRow {
  source: string;
  requester: string | null;
  durationMs: number;
  errorMessage: string | null;
  retryAfterSec: number | null;
  quotaId: string | null;
}

export interface UsageDay {
  /** "YYYY-MM-DD" in Pacific time (the quota day). */
  day: string;
  requests: number;
  errors: number;
  totalTokens: number;
}

export interface UsageSummary {
  quotaDay: {
    day: string;
    start: Date;
    resetAt: Date;
    timeZone: string;
  };
  today: {
    requests: number;
    ok: number;
    errors: number;
    quotaErrors: number;
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  };
  lastMinute: {
    requests: number;
    inputTokens: number;
  };
  days: UsageDay[];
}

/** First instant whose rows the summary needs (start of the oldest chart day). */
export function usageWindowStart(now: Date): Date {
  const today = quotaDayStart(now).getTime();
  // Noon of the oldest day, then back to its midnight: safe across DST.
  return quotaDayStart(
    new Date(today - (USAGE_HISTORY_DAYS - 1) * DAY_MS + DAY_MS / 2),
  );
}

export function summarizeUsage(rows: UsageRow[], now: Date): UsageSummary {
  const start = quotaDayStart(now);
  const todayKey = quotaDayKey(now);
  const minuteAgo = now.getTime() - MINUTE_MS;

  const days = new Map<string, UsageDay>();

  for (let i = USAGE_HISTORY_DAYS - 1; i >= 0; i--) {
    const day = quotaDayKey(
      new Date(start.getTime() - i * DAY_MS + DAY_MS / 2),
    );
    days.set(day, { day, requests: 0, errors: 0, totalTokens: 0 });
  }

  const today = {
    requests: 0,
    ok: 0,
    errors: 0,
    quotaErrors: 0,
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0,
  };
  const lastMinute = { requests: 0, inputTokens: 0 };

  for (const row of rows) {
    const day = days.get(quotaDayKey(row.createdAt));

    if (day) {
      day.requests += 1;
      day.errors += row.ok ? 0 : 1;
      day.totalTokens += row.totalTokens ?? 0;
    }

    if (row.createdAt.getTime() >= start.getTime()) {
      today.requests += 1;
      today.ok += row.ok ? 1 : 0;
      today.errors += row.ok ? 0 : 1;
      today.quotaErrors += row.errorKind === 'quota' ? 1 : 0;
      today.inputTokens += row.inputTokens ?? 0;
      today.outputTokens += row.outputTokens ?? 0;
      today.totalTokens += row.totalTokens ?? 0;
    }

    if (row.createdAt.getTime() > minuteAgo) {
      lastMinute.requests += 1;
      lastMinute.inputTokens += row.inputTokens ?? 0;
    }
  }

  return {
    quotaDay: {
      day: todayKey,
      start,
      resetAt: nextQuotaReset(now),
      timeZone: QUOTA_TIME_ZONE,
    },
    today,
    lastMinute,
    days: [...days.values()],
  };
}

/**
 * Limits Google reported in 429 errors (QuotaFailure.quotaValue), newest
 * report first. Rows must be ordered newest first.
 */
export function learnedLimits(rows: QuotaErrorRow[]): GeminiLimits & {
  at: Date | null;
} {
  const learned: GeminiLimits & { at: Date | null } = {
    rpd: null,
    rpm: null,
    tpm: null,
    at: null,
  };

  for (const row of rows) {
    const kind = quotaKind(row.quotaId);

    if (!kind || row.quotaValue === null) {
      continue;
    }

    const slot: keyof GeminiLimits | null =
      kind.unit === 'requests'
        ? kind.window === 'day'
          ? 'rpd'
          : 'rpm'
        : kind.window === 'minute'
          ? 'tpm'
          : null;

    if (slot && learned[slot] === null) {
      learned[slot] = row.quotaValue;
      learned.at ??= row.createdAt;
    }
  }

  return learned;
}
