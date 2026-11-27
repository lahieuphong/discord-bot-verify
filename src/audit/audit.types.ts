/**
 * Everything the audit log records, with its label on the admin page. Web
 * actions come from /export-excel; Discord ones from the verification flow.
 * Phone numbers, CCCDs and Gemini keys are never written to the log.
 */
export const AUDIT_ACTIONS = {
  login: 'Đăng nhập',
  login_failed: 'Đăng nhập sai',
  login_blocked: 'Bị khoá đăng nhập',
  logout: 'Đăng xuất',
  excel_download: 'Tải file Excel',
  gemini_key_check: 'Kiểm tra key Gemini',
  gemini_key_replace: 'Đổi key Gemini',
  gemini_key_rejected: 'Đổi key Gemini thất bại',
  gemini_limits_update: 'Sửa hạn mức Gemini',
  assistant_ask: 'Hỏi thử trợ lý',
  verification_submitted: 'Gửi form xác thực',
  role_restored: 'Cấp lại vai trò',
} as const;

export type AuditAction = keyof typeof AUDIT_ACTIONS;

export function isAuditAction(value: string): value is AuditAction {
  return Object.hasOwn(AUDIT_ACTIONS, value);
}

/**
 * Start of the addresses counted as the office network: the server itself,
 * and private LAN ranges (192.168.x — incl. the router that office machines
 * show up as — 10.x, 172.16–31.x, IPv6 fc00::/7).
 */
export const INTERNAL_IP_PREFIXES = [
  '127.',
  '10.',
  '192.168.',
  ...Array.from({ length: 16 }, (_, i) => `172.${16 + i}.`),
  'fc',
  'fd',
] as const;
export const INTERNAL_IPS = ['::1'] as const;

export function isInternalIp(ip: string): boolean {
  return (
    (INTERNAL_IPS as readonly string[]).includes(ip) ||
    INTERNAL_IP_PREFIXES.some((prefix) => ip.startsWith(prefix))
  );
}

/** "all", or "external" = everything not from the office network. */
export const AUDIT_SCOPES = ['all', 'external'] as const;
export type AuditScope = (typeof AUDIT_SCOPES)[number];

export const AUDIT_SOURCES = ['web', 'discord'] as const;
export type AuditSource = (typeof AUDIT_SOURCES)[number];

/** Column sizes of admin_audit_log; longer values are cut. */
export const AUDIT_LIMITS = { actor: 120, ip: 64, detail: 300 } as const;

export interface AuditInput {
  source: AuditSource;
  action: AuditAction;
  /** Admin username, the username tried at login, or "name (discord id)". */
  actor?: string | null;
  ip?: string | null;
  detail?: string | null;
}

export interface AuditEntry {
  id: number;
  at: Date;
  source: AuditSource;
  action: AuditAction;
  actor: string | null;
  ip: string | null;
  detail: string | null;
}

export interface AuditQuery {
  /** Entries to skip, newest first (a page number × the page size). */
  offset?: number;
  /** Only entries newer than this id (live updates). */
  after?: number;
  limit: number;
  action?: AuditAction;
  source?: AuditSource;
  /** Text looked up (case-insensitive) in actor, IP and detail. */
  search?: string;
  /**
   * Leave out entries from the office network (internal IPs). Entries
   * without an IP (Discord) are kept.
   */
  excludeInternal?: boolean;
}

export interface AuditPage {
  /** Newest first. */
  entries: AuditEntry[];
  /** How many entries match the query, on all pages together. */
  total: number;
}
