import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { EnvironmentVariables } from '../config/environment.js';
import { PrismaModule } from '../database/prisma.module.js';
import { PrismaService } from '../database/prisma.service.js';
import {
  AUDIT_STORE,
  InMemoryAuditStore,
  PrismaAuditStore,
  type AuditStore,
} from './audit-store.js';
import { AuditService } from './audit.service.js';

/** The audit log, available everywhere (admin page and Discord commands). */
@Global()
@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: AUDIT_STORE,
      inject: [ConfigService, PrismaService],
      useFactory: (
        config: ConfigService<EnvironmentVariables, true>,
        prisma: PrismaService,
      ): AuditStore =>
        config.get('DATABASE_ENABLED', { infer: true })
          ? new PrismaAuditStore(prisma)
          : new InMemoryAuditStore(),
    },
    AuditService,
  ],
  exports: [AuditService],
})
export class AuditModule {}
