import type {
  AnswerContext,
  AuditFilter,
  AuditPage,
  AssistantOverview,
  AssistantTestAnswer,
  AssistantTokenCounts,
  GeminiKeyCheck,
  GeminiKeyInfo,
  GeminiLimits,
  GeminiOverview,
  GeminiRecentRequest,
  MemberOverview,
} from './types';

const BASE = '/export-excel';

export const DOWNLOAD_URL = `${BASE}/download`;
export const EVENTS_URL = `${BASE}/api/events`;

export class ApiError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE}${path}`, {
    credentials: 'same-origin',
    ...init,
    headers: {
      Accept: 'application/json',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });

  if (!response.ok) {
    let message = 'Có lỗi xảy ra, vui lòng thử lại.';

    try {
      const body = (await response.json()) as { message?: unknown };

      if (typeof body.message === 'string') {
        message = body.message;
      }
    } catch {
      // Not JSON (e.g. a proxy error page); keep the generic message.
    }

    throw new ApiError(response.status, message);
  }

  return response.status === 204
    ? (undefined as T)
    : ((await response.json()) as T);
}

export const api = {
  session: () => request<{ username: string }>('/api/session'),
  login: (username: string, password: string) =>
    request<{ username: string }>('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),
  logout: () => request<void>('/api/logout', { method: 'POST' }),
  overview: () => request<MemberOverview>('/api/overview'),
  gemini: () => request<GeminiOverview>('/api/gemini'),
  checkGeminiKey: () =>
    request<GeminiKeyCheck>('/api/gemini/check', { method: 'POST' }),
  replaceGeminiKey: (apiKey: string) =>
    request<GeminiKeyInfo>('/api/gemini/key', {
      method: 'PUT',
      body: JSON.stringify({ apiKey }),
    }),
  /**
   * One page of the audit log, or with `after` (the newest id the page
   * knows) only what is newer, for live updates.
   */
  audit: (
    filter: AuditFilter,
    at: { page: number; pageSize: number } | { after: number },
  ) => {
    const params = new URLSearchParams();
    if ('after' in at) {
      params.set('after', String(at.after));
    } else {
      params.set('page', String(at.page));
      params.set('pageSize', String(at.pageSize));
    }
    if (filter.scope === 'external') params.set('scope', 'external');
    if (filter.action) params.set('action', filter.action);
    if (filter.source) params.set('source', filter.source);
    if (filter.search) params.set('search', filter.search);
    const query = params.toString();
    return request<AuditPage>(`/api/audit${query ? `?${query}` : ''}`);
  },
  geminiRequests: (page: number, pageSize: number) =>
    request<{
      entries: GeminiRecentRequest[];
      total: number;
      page: number;
      pageSize: number;
    }>(`/api/gemini/requests?page=${page}&pageSize=${pageSize}`),
  assistant: () => request<AssistantOverview>('/api/assistant'),
  assistantSource: (id: string) =>
    request<{ id: string; content: string }>(
      `/api/assistant/sources/${encodeURIComponent(id)}`,
    ),
  assistantTokens: () =>
    request<AssistantTokenCounts>('/api/assistant/tokens', { method: 'POST' }),
  previewAssistant: (question: string) =>
    request<AnswerContext>('/api/assistant/preview', {
      method: 'POST',
      body: JSON.stringify({ question }),
    }),
  askAssistant: (question: string) =>
    request<AssistantTestAnswer>('/api/assistant/ask', {
      method: 'POST',
      body: JSON.stringify({ question }),
    }),
  updateGeminiLimits: (limits: GeminiLimits) =>
    request<GeminiLimits>('/api/gemini/limits', {
      method: 'PUT',
      body: JSON.stringify(limits),
    }),
};

/** Bot status (public endpoint outside /export-excel). */
export async function fetchBotStatus(): Promise<{
  status: 'online' | 'offline' | 'disabled';
  gatewayPingMs: number | null;
} | null> {
  try {
    const response = await fetch('/ping', {
      headers: { Accept: 'application/json' },
    });
    return response.ok ? ((await response.json()) as never) : null;
  } catch {
    return null;
  }
}
