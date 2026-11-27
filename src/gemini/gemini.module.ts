import { Module } from '@nestjs/common';
import { PrismaModule } from '../database/prisma.module.js';
import { LiveUpdatesModule } from '../live/live-updates.module.js';
import { GeminiUsageService } from './gemini-usage.service.js';
import { GeminiService } from './gemini.service.js';

@Module({
  imports: [PrismaModule, LiveUpdatesModule],
  providers: [GeminiService, GeminiUsageService],
  exports: [GeminiService, GeminiUsageService],
})
export class GeminiModule {}
