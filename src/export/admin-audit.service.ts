import { Injectable } from '@nestjs/common';
import type { Request } from 'express';
import { AuditService } from '../audit/audit.service.js';
import type { AuditAction } from '../audit/audit.types.js';
import {
  ExportAuthService,
  getClientIp,
  readCookie,
  SESSION_COOKIE,
} from './export-auth.service.js';

/** Writes an admin-page action to the audit log with who and from where. */
@Injectable()
export class AdminAuditService {
  constructor(
    private readonly auditService: AuditService,
    private readonly exportAuthService: ExportAuthService,
  ) {}

  record(request: Request, action: AuditAction, detail?: string): void {
    this.auditService.record({
      source: 'web',
      action,
      actor: this.exportAuthService.verifySessionToken(
        readCookie(request, SESSION_COOKIE),
      ),
      ip: getClientIp(request),
      detail,
    });
  }
}
