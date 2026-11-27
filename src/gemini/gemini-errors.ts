/**
 * Classifies a failed Gemini call. @google/genai throws an ApiError whose
 * `status` is the HTTP status and whose `message` is the JSON error body,
 * e.g. for an exhausted quota:
 *
 *   {"error":{"code":429,"status":"RESOURCE_EXHAUSTED","message":"...",
 *     "details":[{"@type":"type.googleapis.com/google.rpc.QuotaFailure",
 *       "violations":[{"quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier",
 *         "quotaValue":"250"}]},
 *      {"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"25s"}]}}
 */
export type GeminiErrorKind =
  'quota' | 'key' | 'unavailable' | 'empty' | 'other';

export interface GeminiErrorInfo {
  kind: GeminiErrorKind;
  status: number | null;
  /** Short, human-readable reason (Google's message, trimmed). */
  message: string;
  quotaId: string | null;
  quotaValue: number | null;
  retryAfterSec: number | null;
}

/** Thrown by GeminiService when the model returns no text. */
export class EmptyGeminiAnswerError extends Error {
  constructor() {
    super('Gemini returned an empty response');
  }
}

const MAX_MESSAGE_LENGTH = 300;

interface GoogleErrorBody {
  error?: {
    code?: unknown;
    status?: unknown;
    message?: unknown;
    details?: unknown;
  };
}

function parseBody(message: string): GoogleErrorBody | null {
  const start = message.indexOf('{');

  if (start < 0) {
    return null;
  }

  try {
    const body: unknown = JSON.parse(message.slice(start));
    return typeof body === 'object' && body !== null
      ? (body as GoogleErrorBody)
      : null;
  } catch {
    return null;
  }
}

function asRecords(value: unknown): Record<string, unknown>[] {
  return Array.isArray(value)
    ? value.filter(
        (item): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null,
      )
    : [];
}

function toInt(value: unknown): number | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  const number = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(number) && number >= 0 && number <= 2_147_483_647
    ? Math.round(number)
    : null;
}

/** "25s" / "1.5s" -> seconds (rounded up). */
function parseDuration(value: unknown): number | null {
  if (typeof value !== 'string') {
    return null;
  }

  const match = /^(\d+(?:\.\d+)?)s$/.exec(value.trim());
  return match ? Math.ceil(Number(match[1])) : null;
}

function shorten(text: string): string {
  const oneLine = text.replace(/\s+/g, ' ').trim();
  return oneLine.length > MAX_MESSAGE_LENGTH
    ? `${oneLine.slice(0, MAX_MESSAGE_LENGTH - 1)}…`
    : oneLine;
}

export function describeGeminiError(error: unknown): GeminiErrorInfo {
  if (error instanceof EmptyGeminiAnswerError) {
    return {
      kind: 'empty',
      status: null,
      message: 'Gemini không trả lời (câu trả lời rỗng).',
      quotaId: null,
      quotaValue: null,
      retryAfterSec: null,
    };
  }

  const rawMessage = error instanceof Error ? error.message : String(error);
  const statusValue =
    typeof error === 'object' && error !== null && 'status' in error
      ? (error as { status: unknown }).status
      : null;
  const body = parseBody(rawMessage);
  const status = toInt(statusValue) ?? toInt(body?.error?.code) ?? null;
  const googleStatus =
    typeof body?.error?.status === 'string' ? body.error.status : '';
  const details = asRecords(body?.error?.details);

  let quotaId: string | null = null;
  let quotaValue: number | null = null;
  let retryAfterSec: number | null = null;
  let reason = '';

  for (const detail of details) {
    const type = typeof detail['@type'] === 'string' ? detail['@type'] : '';

    if (type.endsWith('google.rpc.QuotaFailure')) {
      const violation = asRecords(detail['violations'])[0];

      if (violation) {
        quotaId =
          typeof violation['quotaId'] === 'string'
            ? violation['quotaId'].slice(0, 200)
            : null;
        quotaValue = toInt(violation['quotaValue']);
      }
    } else if (type.endsWith('google.rpc.RetryInfo')) {
      retryAfterSec = parseDuration(detail['retryDelay']);
    } else if (type.endsWith('google.rpc.ErrorInfo')) {
      reason = typeof detail['reason'] === 'string' ? detail['reason'] : '';
    }
  }

  const message = shorten(
    typeof body?.error?.message === 'string' && body.error.message
      ? body.error.message
      : rawMessage || 'Lỗi không xác định',
  );

  let kind: GeminiErrorKind = 'other';

  if (status === 429 || googleStatus === 'RESOURCE_EXHAUSTED') {
    kind = 'quota';
  } else if (
    status === 401 ||
    status === 403 ||
    reason === 'API_KEY_INVALID' ||
    /API key (not valid|expired)/i.test(message)
  ) {
    kind = 'key';
  } else if (status !== null && status >= 500) {
    kind = 'unavailable';
  }

  return { kind, status, message, quotaId, quotaValue, retryAfterSec };
}

export type QuotaWindow = 'day' | 'minute';
export type QuotaUnit = 'requests' | 'tokens';

/**
 * Which limit a QuotaFailure quotaId refers to, e.g.
 * "GenerateRequestsPerDayPerProjectPerModel-FreeTier" -> requests per day,
 * "GenerateContentInputTokensPerModelPerMinute-FreeTier" -> tokens per minute.
 */
export function quotaKind(
  quotaId: string | null,
): { window: QuotaWindow; unit: QuotaUnit } | null {
  if (!quotaId) {
    return null;
  }

  const window: QuotaWindow | null = /PerDay/i.test(quotaId)
    ? 'day'
    : /PerMinute/i.test(quotaId)
      ? 'minute'
      : null;

  if (!window) {
    return null;
  }

  return { window, unit: /Token/i.test(quotaId) ? 'tokens' : 'requests' };
}
