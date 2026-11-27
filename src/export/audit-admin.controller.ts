import {
  BadRequestException,
  Controller,
  Get,
  Header,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuditService } from '../audit/audit.service.js';
import {
  AUDIT_ACTIONS,
  AUDIT_SCOPES,
  AUDIT_SOURCES,
  isAuditAction,
  type AuditAction,
  type AuditEntry,
  type AuditScope,
  type AuditSource,
} from '../audit/audit.types.js';
import { ExportSessionGuard } from './export-session.guard.js';

/** Page sizes of the audit log ("Số dòng" on the admin page). */
export const AUDIT_PAGE_SIZES = [10, 20, 50, 100];
const DEFAULT_AUDIT_PAGE_SIZE = 20;
/** Most entries a live update returns; the page mostly needs the count. */
const AUDIT_LIVE_LIMIT = 100;
const MAX_AUDIT_SEARCH_LENGTH = 100;
/** Largest id PostgreSQL's integer column holds. */
const MAX_ID = 2_147_483_647;

function serializeAudit(entry: AuditEntry) {
  return { ...entry, at: entry.at.toISOString() };
}

/** The "Nhật ký" tab of the admin page (same login as the member page). */
@Controller('export-excel/api/audit')
@UseGuards(ExportSessionGuard)
export class AuditAdminController {
  constructor(private readonly auditService: AuditService) {}

  /**
   * Who did what, newest first, one page at a time: `page` from 1,
   * `pageSize` one of AUDIT_PAGE_SIZES. With `after` (the newest id the admin
   * page has) it returns only what is newer, for live updates. Filters:
   * action, source, search text, and scope=external to leave out the office
   * network. `total` counts every matching entry.
   */
  @Get()
  @Header('Cache-Control', 'no-store')
  async list(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
    @Query('after') after?: string,
    @Query('action') action?: string,
    @Query('source') source?: string,
    @Query('search') search?: string,
    @Query('scope') scope?: string,
  ) {
    // A repeated parameter (?search=a&search=b) arrives as an array.
    const params = [page, pageSize, after, action, source, search, scope];
    if (
      params.some((value) => value !== undefined && typeof value !== 'string')
    ) {
      throw new BadRequestException('Bộ lọc nhật ký không hợp lệ.');
    }

    const pageNumber = page === undefined ? 1 : Number(page);
    const size =
      pageSize === undefined ? DEFAULT_AUDIT_PAGE_SIZE : Number(pageSize);
    const afterId = after === undefined ? undefined : Number(after);

    if (
      !Number.isInteger(pageNumber) ||
      pageNumber < 1 ||
      !AUDIT_PAGE_SIZES.includes(size) ||
      (afterId !== undefined &&
        (page !== undefined ||
          !Number.isInteger(afterId) ||
          afterId < 0 ||
          afterId > MAX_ID)) ||
      (action && !isAuditAction(action)) ||
      (source && !AUDIT_SOURCES.includes(source as AuditSource)) ||
      (scope && !AUDIT_SCOPES.includes(scope as AuditScope))
    ) {
      throw new BadRequestException('Bộ lọc nhật ký không hợp lệ.');
    }

    const result = await this.auditService.list({
      ...(afterId === undefined
        ? { offset: (pageNumber - 1) * size, limit: size }
        : { after: afterId, limit: AUDIT_LIVE_LIMIT }),
      action: action ? (action as AuditAction) : undefined,
      source: source ? (source as AuditSource) : undefined,
      search: search?.trim().slice(0, MAX_AUDIT_SEARCH_LENGTH) || undefined,
      excludeInternal: scope === 'external',
    });

    return {
      entries: result.entries.map(serializeAudit),
      total: result.total,
      page: pageNumber,
      pageSize: size,
      actions: Object.entries(AUDIT_ACTIONS).map(([value, label]) => ({
        value,
        label,
      })),
    };
  }
}
