import {
  effectiveLimit,
  errorLabel,
  formatCountdown,
  formatQuotaDay,
  parseLimitInput,
  usageLevel,
  usagePercent,
} from './gemini';
import type { GeminiOverview } from './types';

describe('usageLevel', () => {
  it.each([
    [10, null, 'unknown'],
    [0, 250, 'ok'],
    [199, 250, 'ok'],
    [200, 250, 'warning'],
    [250, 250, 'exhausted'],
    [300, 250, 'exhausted'],
  ] as const)('%i of %s -> %s', (used, limit, level) => {
    expect(usageLevel(used, limit)).toBe(level);
  });

  it('caps the percentage at 100', () => {
    expect(usagePercent(300, 250)).toBe(100);
    expect(usagePercent(5, null)).toBeNull();
    expect(usagePercent(1, 3)).toBe(33);
  });
});

describe('effectiveLimit', () => {
  function overview(
    configured: number | null,
    learned: number | null,
  ): GeminiOverview {
    return {
      limits: { rpd: configured, rpm: null, tpm: null },
      usage: {
        learnedLimits: { rpd: learned, rpm: null, tpm: null, at: null },
      },
    } as unknown as GeminiOverview;
  }

  it('prefers the limit entered on the page, then what Google reported', () => {
    expect(effectiveLimit(overview(500, 250), 'rpd')).toEqual({
      value: 500,
      source: 'configured',
    });
    expect(effectiveLimit(overview(null, 250), 'rpd')).toEqual({
      value: 250,
      source: 'google',
    });
    expect(effectiveLimit(overview(null, null), 'rpd')).toEqual({
      value: null,
      source: null,
    });
  });
});

describe('parseLimitInput', () => {
  it.each([
    ['', null],
    ['0', null],
    ['250', 250],
    ['250.000', 250_000],
    ['250,000', 250_000],
    [' 1 500 ', 1500],
    ['abc', 'invalid'],
    ['-5', 'invalid'],
    ['9999999999', 'invalid'],
  ] as const)('%j -> %s', (input, expected) => {
    expect(parseLimitInput(input)).toBe(expected);
  });
});

describe('formatting', () => {
  const now = new Date('2026-11-27T03:00:00Z');

  it('counts down to the reset', () => {
    expect(formatCountdown('2026-11-27T08:00:00Z', now)).toBe('5 giờ 00 phút');
    expect(formatCountdown('2026-11-27T03:12:00Z', now)).toBe('12 phút');
    expect(formatCountdown('2026-11-27T03:00:45Z', now)).toBe('45 giây');
    expect(formatCountdown('2026-11-27T02:00:00Z', now)).toBe('0 giây');
  });

  it('labels days and errors', () => {
    expect(formatQuotaDay('2026-11-26')).toBe('26/11');
    expect(errorLabel('quota')).toBe('Hết hạn mức');
    expect(errorLabel(null)).toBe('Lỗi khác');
    expect(errorLabel('weird')).toBe('Lỗi khác');
  });
});
