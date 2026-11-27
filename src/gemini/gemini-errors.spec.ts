import { describe, expect, it } from 'vitest';
import {
  describeGeminiError,
  EmptyGeminiAnswerError,
  quotaKind,
} from './gemini-errors.js';

/** Same shape as @google/genai's ApiError. */
function apiError(status: number, body: object) {
  return Object.assign(new Error(JSON.stringify(body)), {
    name: 'ApiError',
    status,
  });
}

describe('describeGeminiError', () => {
  it('reads the quota that ran out from a 429', () => {
    const info = describeGeminiError(
      apiError(429, {
        error: {
          code: 429,
          status: 'RESOURCE_EXHAUSTED',
          message: 'You exceeded your current quota.',
          details: [
            {
              '@type': 'type.googleapis.com/google.rpc.QuotaFailure',
              violations: [
                {
                  quotaMetric:
                    'generativelanguage.googleapis.com/generate_content_free_tier_requests',
                  quotaId: 'GenerateRequestsPerDayPerProjectPerModel-FreeTier',
                  quotaValue: '250',
                },
              ],
            },
            {
              '@type': 'type.googleapis.com/google.rpc.RetryInfo',
              retryDelay: '24.5s',
            },
          ],
        },
      }),
    );

    expect(info).toEqual({
      kind: 'quota',
      status: 429,
      message: 'You exceeded your current quota.',
      quotaId: 'GenerateRequestsPerDayPerProjectPerModel-FreeTier',
      quotaValue: 250,
      retryAfterSec: 25,
    });
  });

  it('recognises an invalid key', () => {
    const info = describeGeminiError(
      apiError(400, {
        error: {
          code: 400,
          status: 'INVALID_ARGUMENT',
          message: 'API key not valid. Please pass a valid API key.',
          details: [
            {
              '@type': 'type.googleapis.com/google.rpc.ErrorInfo',
              reason: 'API_KEY_INVALID',
            },
          ],
        },
      }),
    );

    expect(info.kind).toBe('key');
    expect(info.status).toBe(400);
  });

  it.each([
    [503, 'unavailable'],
    [500, 'unavailable'],
    [400, 'other'],
  ])('maps HTTP %i to %s', (status, kind) => {
    expect(
      describeGeminiError(apiError(status, { error: { message: 'x' } })).kind,
    ).toBe(kind);
  });

  it('handles empty answers and plain errors', () => {
    expect(describeGeminiError(new EmptyGeminiAnswerError()).kind).toBe(
      'empty',
    );
    expect(describeGeminiError(new Error('socket hang up'))).toMatchObject({
      kind: 'other',
      status: null,
      message: 'socket hang up',
    });
  });

  it('shortens long messages to one line', () => {
    const info = describeGeminiError(new Error(`a\n${'b'.repeat(400)}`));

    expect(info.message.length).toBeLessThanOrEqual(300);
    expect(info.message).not.toContain('\n');
  });
});

describe('quotaKind', () => {
  it.each([
    ['GenerateRequestsPerDayPerProjectPerModel-FreeTier', 'day', 'requests'],
    [
      'GenerateRequestsPerMinutePerProjectPerModel-FreeTier',
      'minute',
      'requests',
    ],
    [
      'GenerateContentInputTokensPerModelPerMinute-FreeTier',
      'minute',
      'tokens',
    ],
  ])('%s -> %s %s', (quotaId, window, unit) => {
    expect(quotaKind(quotaId)).toEqual({ window, unit });
  });

  it('returns null for unknown quotas', () => {
    expect(quotaKind(null)).toBeNull();
    expect(quotaKind('SomethingElse')).toBeNull();
  });
});
