import { describe, expect, it } from 'vitest';
import {
  learnedLimits,
  summarizeUsage,
  USAGE_HISTORY_DAYS,
  usageWindowStart,
  type UsageRow,
} from './gemini-usage.js';
import { nextQuotaReset, quotaDayKey, quotaDayStart } from './quota-day.js';

function row(iso: string, overrides: Partial<UsageRow> = {}): UsageRow {
  return {
    createdAt: new Date(iso),
    ok: true,
    inputTokens: 100,
    outputTokens: 50,
    totalTokens: 150,
    errorKind: null,
    ...overrides,
  };
}

describe('quota day (Pacific time)', () => {
  it('starts at midnight in Los Angeles, standard time', () => {
    // 27 Nov 2026, 10:00 in Vietnam = 26 Nov 19:00 PST.
    const now = new Date('2026-11-27T03:00:00Z');

    expect(quotaDayKey(now)).toBe('2026-11-26');
    expect(quotaDayStart(now).toISOString()).toBe('2026-11-26T08:00:00.000Z');
    expect(nextQuotaReset(now).toISOString()).toBe('2026-11-27T08:00:00.000Z');
  });

  it('follows daylight saving time', () => {
    const summer = new Date('2026-07-01T12:00:00Z');

    expect(quotaDayStart(summer).toISOString()).toBe(
      '2026-07-01T07:00:00.000Z',
    );
    // DST ends on 1 Nov 2026: that day is 25 hours long.
    expect(nextQuotaReset(new Date('2026-11-01T12:00:00Z')).toISOString()).toBe(
      '2026-11-02T08:00:00.000Z',
    );
  });
});

describe('summarizeUsage', () => {
  const now = new Date('2026-11-27T03:00:00Z'); // quota day 2026-11-26

  it('counts today, the last minute and errors', () => {
    const summary = summarizeUsage(
      [
        row('2026-11-27T02:59:30Z'),
        row('2026-11-27T01:00:00Z', {
          ok: false,
          errorKind: 'quota',
          inputTokens: null,
          outputTokens: null,
          totalTokens: null,
        }),
        row('2026-11-26T09:00:00Z'),
        // Yesterday (before 08:00 UTC): not today.
        row('2026-11-26T07:59:59Z'),
      ],
      now,
    );

    expect(summary.today).toEqual({
      requests: 3,
      ok: 2,
      errors: 1,
      quotaErrors: 1,
      inputTokens: 200,
      outputTokens: 100,
      totalTokens: 300,
    });
    expect(summary.lastMinute).toEqual({ requests: 1, inputTokens: 100 });
    expect(summary.quotaDay.day).toBe('2026-11-26');
  });

  it('returns one entry per day for the chart, oldest first', () => {
    const summary = summarizeUsage(
      [row('2026-11-26T07:59:59Z'), row('2026-11-26T09:00:00Z')],
      now,
    );

    expect(summary.days).toHaveLength(USAGE_HISTORY_DAYS);
    expect(summary.days[0]?.day).toBe('2026-11-13');
    expect(summary.days.at(-1)).toEqual({
      day: '2026-11-26',
      requests: 1,
      errors: 0,
      totalTokens: 150,
    });
    expect(summary.days.at(-2)?.requests).toBe(1);
  });

  it('loads rows from the start of the oldest chart day', () => {
    expect(usageWindowStart(now).toISOString()).toBe(
      '2026-11-13T08:00:00.000Z',
    );
  });
});

describe('learnedLimits', () => {
  it('keeps the newest value Google reported for each limit', () => {
    const limits = learnedLimits([
      {
        createdAt: new Date('2026-11-26T10:00:00Z'),
        quotaId: 'GenerateRequestsPerDayPerProjectPerModel-FreeTier',
        quotaValue: 250,
      },
      {
        createdAt: new Date('2026-11-25T10:00:00Z'),
        quotaId: 'GenerateRequestsPerDayPerProjectPerModel-FreeTier',
        quotaValue: 500,
      },
      {
        createdAt: new Date('2026-11-24T10:00:00Z'),
        quotaId: 'GenerateContentInputTokensPerModelPerMinute-FreeTier',
        quotaValue: 250_000,
      },
    ]);

    expect(limits).toEqual({
      rpd: 250,
      rpm: null,
      tpm: 250_000,
      at: new Date('2026-11-26T10:00:00Z'),
    });
  });
});
