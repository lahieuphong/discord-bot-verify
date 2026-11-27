import type { PrismaService } from '../database/prisma.service.js';
import type { AdminAuditLog } from '../generated/prisma/client.js';
import {
  INTERNAL_IP_PREFIXES,
  INTERNAL_IPS,
  isInternalIp,
  type AuditAction,
  type AuditEntry,
  type AuditInput,
  type AuditPage,
  type AuditQuery,
  type AuditSource,
} from './audit.types.js';

export const AUDIT_STORE = Symbol('AUDIT_STORE');

export type NewAuditEntry = Required<AuditInput> & { at: Date };

export interface AuditStore {
  add(entry: NewAuditEntry): Promise<void>;
  list(query: AuditQuery): Promise<AuditPage>;
  /** Deletes entries older than `before`; returns how many. */
  prune(before: Date): Promise<number>;
}

function toEntry(row: AdminAuditLog): AuditEntry {
  return {
    id: row.id,
    at: row.at,
    source: row.source as AuditSource,
    action: row.action as AuditAction,
    actor: row.actor,
    ip: row.ip,
    detail: row.detail,
  };
}

export class PrismaAuditStore implements AuditStore {
  constructor(private readonly prisma: PrismaService) {}

  async add(entry: NewAuditEntry): Promise<void> {
    await this.prisma.adminAuditLog.create({ data: entry });
  }

  async list(query: AuditQuery): Promise<AuditPage> {
    const search = query.search
      ? { contains: query.search, mode: 'insensitive' as const }
      : undefined;
    const where = {
      id: { gt: query.after },
      action: query.action,
      source: query.source,
      AND: [
        search
          ? { OR: [{ actor: search }, { ip: search }, { detail: search }] }
          : {},
        // Keep rows without an IP: NOT(ip LIKE …) is NULL for them.
        query.excludeInternal
          ? {
              OR: [
                { ip: null },
                {
                  NOT: {
                    OR: [
                      ...INTERNAL_IP_PREFIXES.map((prefix) => ({
                        ip: { startsWith: prefix },
                      })),
                      { ip: { in: [...INTERNAL_IPS] } },
                    ],
                  },
                },
              ],
            }
          : {},
      ],
    };
    const [rows, total] = await this.prisma.$transaction([
      this.prisma.adminAuditLog.findMany({
        where,
        orderBy: { id: 'desc' },
        skip: query.offset,
        take: query.limit,
      }),
      this.prisma.adminAuditLog.count({ where }),
    ]);

    return { entries: rows.map(toEntry), total };
  }

  async prune(before: Date): Promise<number> {
    const { count } = await this.prisma.adminAuditLog.deleteMany({
      where: { at: { lt: before } },
    });
    return count;
  }
}

/** Used when DATABASE_ENABLED=false (and in tests). */
export class InMemoryAuditStore implements AuditStore {
  readonly entries: AuditEntry[] = [];
  private nextId = 1;

  add(entry: NewAuditEntry): Promise<void> {
    this.entries.push({ id: this.nextId++, ...entry });
    return Promise.resolve();
  }

  list(query: AuditQuery): Promise<AuditPage> {
    const search = query.search?.toLowerCase();
    const matches = this.entries
      .filter(
        (entry) =>
          (!query.after || entry.id > query.after) &&
          (!query.action || entry.action === query.action) &&
          (!query.source || entry.source === query.source) &&
          (!query.excludeInternal || !entry.ip || !isInternalIp(entry.ip)) &&
          (!search ||
            [entry.actor, entry.ip, entry.detail].some((value) =>
              value?.toLowerCase().includes(search),
            )),
      )
      .reverse();

    const offset = query.offset ?? 0;
    return Promise.resolve({
      entries: matches.slice(offset, offset + query.limit),
      total: matches.length,
    });
  }

  prune(before: Date): Promise<number> {
    const kept = this.entries.filter((entry) => entry.at >= before);
    const removed = this.entries.length - kept.length;
    this.entries.splice(0, this.entries.length, ...kept);
    return Promise.resolve(removed);
  }
}
