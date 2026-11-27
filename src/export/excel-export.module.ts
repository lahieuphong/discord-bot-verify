import { Module } from '@nestjs/common';
import { PrismaModule } from '../database/prisma.module.js';
import { DiscordModule } from '../discord/discord.module.js';
import { GeminiModule } from '../gemini/gemini.module.js';
import { LiveUpdatesModule } from '../live/live-updates.module.js';
import { VerificationModule } from '../verification/verification.module.js';
import { AssistantAdminController } from './assistant-admin.controller.js';
import { ExcelExportController } from './excel-export.controller.js';
import { ExcelExportService } from './excel-export.service.js';
import { ExportAuthService } from './export-auth.service.js';
import { ExportSessionGuard } from './export-session.guard.js';
import { GeminiAdminController } from './gemini-admin.controller.js';
import { MemberOverviewService } from './member-overview.service.js';

@Module({
  imports: [
    PrismaModule,
    DiscordModule,
    GeminiModule,
    VerificationModule,
    LiveUpdatesModule,
  ],
  controllers: [
    ExcelExportController,
    GeminiAdminController,
    AssistantAdminController,
  ],
  providers: [
    ExcelExportService,
    ExportAuthService,
    ExportSessionGuard,
    MemberOverviewService,
  ],
})
export class ExcelExportModule {}
