import {
  Inject,
  Injectable,
  Logger,
  type OnModuleDestroy,
  type OnModuleInit,
} from '@nestjs/common';
import { AUDIT_STORE, type AuditStore } from './audit-store.js';
import {
  AUDIT_LIMITS,
  type AuditInput,
  type AuditPage,
  type AuditQuery,
} from './audit.types.js';

const DAY_MS = 24 * 60 * 60 * 1000;
/** Entries older than this are deleted (checked at startup and daily). */
export const AUDIT_RETENTION_DAYS = 180;

/**
 * The log must never hold phone numbers, CCCDs or API keys, whatever text
 * reaches it (an admin's test question, a pasted key, an error message):
 * runs of 9+ digits, even with spaces, dots or dashes between them, and
 * key-like tokens are masked before writing.
 */
export function redact(value: string): string {
  return value
    .replace(/\+?\d(?:[ .-]?\d){8,}/g, '[số đã ẩn]')
    .replace(/(?:AIza|AQ\.)[\w.-]{10,}/g, '[đã ẩn]')
    .replace(/[\w.-]{32,}/g, '[đã ẩn]');
}

function cut(
  value: string | null | undefined,
  max: number,
  mask = true,
): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return (mask ? redact(trimmed) : trimmed).slice(0, max);
}

/** Records who did what on the admin page and in the verification flow. */
@Injectable()
export class AuditService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger('Audit');
  private pruneTimer?: NodeJS.Timeout;

  constructor(@Inject(AUDIT_STORE) private readonly store: AuditStore) {}

  /**
   * Writes an entry in the background. Never throws: a failed write is only
   * reported in the service log, so it cannot break what is being audited.
   */
  record(input: AuditInput): void {
    void this.store
      .add({
        source: input.source,
        action: input.action,
        // Discord actors are "name (discord id)", built by the bot: keep the
        // id. Web actors are typed text (a username) and get masked.
        actor: cut(input.actor, AUDIT_LIMITS.actor, input.source !== 'discord'),
        ip: cut(input.ip, AUDIT_LIMITS.ip, false),
        detail: cut(input.detail, AUDIT_LIMITS.detail),
        at: new Date(),
      })
      .catch((error: unknown) =>
        this.logger.error(
          `Could not write the audit entry ${input.action}: ${String(error)}`,
        ),
      );
  }

  list(query: AuditQuery): Promise<AuditPage> {
    return this.store.list(query);
  }

  onModuleInit(): void {
    void this.prune();
    this.pruneTimer = setInterval(() => void this.prune(), DAY_MS);
    this.pruneTimer.unref();
  }

  onModuleDestroy(): void {
    clearInterval(this.pruneTimer);
  }

  private async prune(): Promise<void> {
    try {
      const removed = await this.store.prune(
        new Date(Date.now() - AUDIT_RETENTION_DAYS * DAY_MS),
      );
      if (removed > 0) {
        this.logger.log(`Removed ${removed} audit entries older than 180 days`);
      }
    } catch (error) {
      this.logger.error(`Could not prune the audit log: ${String(error)}`);
    }
  }
}
