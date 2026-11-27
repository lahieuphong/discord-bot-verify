/** JSON shape of GET /export-excel/api/overview (src/export/member-overview.ts). */
export type MemberStatus = 'verified' | 'needs-role' | 'unverified';

export interface OverviewRole {
  name: string;
  color: string | null;
}

export interface OverviewMember {
  discordUserId: string;
  username: string;
  displayName: string;
  avatarUrl: string | null;
  joinedAt: string | null;
  isNew: boolean;
  status: MemberStatus;
  roles: OverviewRole[];
  /** Verification form answers; null when the member never submitted it. */
  accountName: string | null;
  phone: string | null;
  cccd: string | null;
  verifiedAt: string | null;
}

export interface OverviewLogEntry {
  at: string;
  kind: 'joined' | 'verified';
  name: string;
  detail: string | null;
  status: MemberStatus | 'left';
}

export interface MemberOverview {
  generatedAt: string;
  newMemberHours: number;
  discordConnected: boolean;
  guildName: string | null;
  members: OverviewMember[];
  counts: {
    total: number;
    verified: number;
    needsRole: number;
    unverified: number;
    newMembers: number;
    registeredNotInServer: number;
  };
  log: OverviewLogEntry[];
}

export type MemberFilter = 'all' | 'pending' | 'verified' | 'new';

/** JSON shape of GET /export-excel/api/gemini (src/export/gemini-admin.controller.ts). */
export interface GeminiLimits {
  /** Requests per day. */
  rpd: number | null;
  /** Requests per minute. */
  rpm: number | null;
  /** Input tokens per minute. */
  tpm: number | null;
}

export interface GeminiKeyInfo {
  configured: boolean;
  masked: string | null;
  fingerprint: string | null;
  model: string;
  changedAt: string | null;
}

export type GeminiErrorKind =
  'quota' | 'key' | 'unavailable' | 'empty' | 'other';

export interface GeminiRecentRequest {
  createdAt: string;
  ok: boolean;
  source: string;
  requester: string | null;
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  durationMs: number;
  errorKind: string | null;
  errorMessage: string | null;
  retryAfterSec: number | null;
  /** Which quota a 429 hit, e.g. "GenerateRequestsPerMinute…". */
  quotaId: string | null;
}

export interface GeminiUsageDay {
  /** "YYYY-MM-DD" of the quota day (Pacific time). */
  day: string;
  requests: number;
  errors: number;
  totalTokens: number;
}

export interface GeminiUsage {
  quotaDay: { day: string; start: string; resetAt: string; timeZone: string };
  today: {
    requests: number;
    ok: number;
    errors: number;
    quotaErrors: number;
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  };
  lastMinute: { requests: number; inputTokens: number };
  days: GeminiUsageDay[];
  learnedLimits: GeminiLimits & { at: string | null };
  allTime: { requests: number; firstAt: string | null };
  recent: GeminiRecentRequest[];
  lastError: {
    at: string;
    kind: string;
    message: string | null;
    retryAfterSec: number | null;
  } | null;
}

export interface GeminiOverview {
  generatedAt: string;
  key: GeminiKeyInfo;
  limits: GeminiLimits;
  trackingEnabled: boolean;
  usage: GeminiUsage | null;
}

export type GeminiKeyCheck =
  | {
      ok: true;
      model: string;
      displayName: string | null;
      inputTokenLimit: number | null;
      outputTokenLimit: number | null;
    }
  | {
      ok: false;
      error: { kind: GeminiErrorKind; status: number | null; message: string };
    };
