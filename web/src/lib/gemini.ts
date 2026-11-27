import type { GeminiLimits, GeminiOverview } from './types';

/** At or above this share of a limit the page warns "sắp hết". */
export const WARNING_RATIO = 0.8;

export type UsageLevel = 'unknown' | 'ok' | 'warning' | 'exhausted';

export function usageLevel(used: number, limit: number | null): UsageLevel {
  if (limit === null || limit <= 0) return 'unknown';
  if (used >= limit) return 'exhausted';
  return used / limit >= WARNING_RATIO ? 'warning' : 'ok';
}

/** Share of the limit used, 0–100 (capped), or null without a limit. */
export function usagePercent(
  used: number,
  limit: number | null,
): number | null {
  if (limit === null || limit <= 0) return null;
  return Math.min(100, Math.round((used / limit) * 100));
}

export interface EffectiveLimit {
  value: number | null;
  /** `configured`: entered on the page; `google`: reported in a 429 error. */
  source: 'configured' | 'google' | null;
}

/** The limit to compare with: the one entered on the page, else Google's. */
export function effectiveLimit(
  overview: GeminiOverview,
  key: keyof GeminiLimits,
): EffectiveLimit {
  const configured = overview.limits[key];

  if (configured !== null) {
    return { value: configured, source: 'configured' };
  }

  const learned = overview.usage?.learnedLimits[key] ?? null;
  return learned !== null
    ? { value: learned, source: 'google' }
    : { value: null, source: null };
}

const numberFormat = new Intl.NumberFormat('vi-VN');
const compactFormat = new Intl.NumberFormat('vi-VN', {
  notation: 'compact',
  maximumFractionDigits: 1,
});

/** "12.345" */
export function formatNumber(value: number): string {
  return numberFormat.format(value);
}

/** "12,3 N" style for large token counts; plain below 10 000. */
export function formatTokens(value: number): string {
  return value < 10_000
    ? numberFormat.format(value)
    : compactFormat.format(value);
}

/** "4 giờ 05 phút" / "12 phút" / "45 giây" until `target`. */
export function formatCountdown(target: string, now: Date): string {
  const seconds = Math.max(
    0,
    Math.round((new Date(target).getTime() - now.getTime()) / 1000),
  );

  if (seconds < 60) return `${seconds} giây`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} phút`;

  const hours = Math.floor(minutes / 60);
  return `${hours} giờ ${String(minutes % 60).padStart(2, '0')} phút`;
}

const timeOfDay = new Intl.DateTimeFormat('vi-VN', {
  timeZone: 'Asia/Ho_Chi_Minh',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

/** "15:00" in Vietnam time. */
export function formatTimeOfDay(value: string): string {
  return timeOfDay.format(new Date(value));
}

/** "2026-11-26" -> "26/11". */
export function formatQuotaDay(day: string): string {
  const [, month, date] = day.split('-');
  return `${date}/${month}`;
}

/** A 429 for a per-minute limit clears by itself within a minute. */
export function isMinuteQuota(quotaId: string | null): boolean {
  return quotaId !== null && /PerMinute/i.test(quotaId);
}

export const ERROR_LABELS: Record<string, string> = {
  quota: 'Hết hạn mức',
  key: 'Key lỗi',
  unavailable: 'Google quá tải',
  empty: 'Trả lời rỗng',
  other: 'Lỗi khác',
};

export function errorLabel(kind: string | null): string {
  return ERROR_LABELS[kind ?? 'other'] ?? ERROR_LABELS.other;
}

/** Parses a limit input: empty -> null, otherwise a positive whole number. */
export function parseLimitInput(value: string): number | null | 'invalid' {
  // "250.000" / "250,000" / "250 000" are all 250000.
  const trimmed = value.replace(/[.,\s]/g, '');

  if (trimmed === '' || trimmed === '0') return null;
  if (!/^\d+$/.test(trimmed)) return 'invalid';

  const number = Number(trimmed);
  return number > 1_000_000_000 ? 'invalid' : number;
}
