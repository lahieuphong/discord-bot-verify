import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { splitDiscordMarkdown } from '../discord/discord-markdown.js';
import {
  ASSISTANT_GUIDANCE,
  ASSISTANT_PERSONA,
  GAME_KNOWLEDGE_GENERATED_AT,
  KNOWLEDGE_SECTIONS,
  MAX_OUTPUT_TOKENS,
  MAX_QUESTION_LENGTH,
  SYSTEM_INSTRUCTION,
  type KnowledgeSection,
} from '../gemini/knowledge/knowledge.js';
import { GeminiService, type GeminiAnswer } from '../gemini/gemini.service.js';
import {
  ExportAuthService,
  readCookie,
  SESSION_COOKIE,
} from './export-auth.service.js';
import { ExportSessionGuard } from './export-session.guard.js';

export interface AssistantSourceInfo {
  id: string;
  title: string;
  summary: string;
  origin: KnowledgeSection['origin'];
  characters: number;
  lines: number;
}

export interface AssistantOverview {
  model: string;
  keyConfigured: boolean;
  maxOutputTokens: number;
  maxQuestionLength: number;
  persona: string;
  guidance: string;
  /** Length of the whole system instruction sent with every question. */
  systemCharacters: number;
  gameKnowledgeGeneratedAt: string;
  sources: AssistantSourceInfo[];
}

export interface AssistantTokenCounts {
  /** Tokens of the whole system instruction (what every question costs). */
  total: number;
  sections: Record<string, number>;
}

export interface AssistantTestAnswer extends GeminiAnswer {
  durationMs: number;
  /** How many Discord messages the answer would be split into. */
  discordMessages: number;
}

/**
 * The "Trợ lý AI" tab: shows how /question works and what the assistant
 * knows, and lets an admin try a question. Same login as the member page.
 */
@Controller('export-excel/api/assistant')
@UseGuards(ExportSessionGuard)
export class AssistantAdminController {
  constructor(
    private readonly geminiService: GeminiService,
    private readonly exportAuthService: ExportAuthService,
  ) {}

  @Get()
  @Header('Cache-Control', 'no-store')
  overview(): AssistantOverview {
    const key = this.geminiService.keyInfo();

    return {
      model: key.model,
      keyConfigured: key.configured,
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      maxQuestionLength: MAX_QUESTION_LENGTH,
      persona: ASSISTANT_PERSONA,
      guidance: ASSISTANT_GUIDANCE,
      systemCharacters: SYSTEM_INSTRUCTION.length,
      gameKnowledgeGeneratedAt: GAME_KNOWLEDGE_GENERATED_AT,
      sources: KNOWLEDGE_SECTIONS.map((section) => ({
        id: section.id,
        title: section.title,
        summary: section.summary,
        origin: section.origin,
        characters: section.content.length,
        lines: section.content.split('\n').length,
      })),
    };
  }

  @Get('sources/:id')
  @Header('Cache-Control', 'no-store')
  source(@Param('id') id: string): { id: string; content: string } {
    const section = KNOWLEDGE_SECTIONS.find((item) => item.id === id);

    if (!section) {
      throw new NotFoundException('Không có nguồn kiến thức này.');
    }

    return { id: section.id, content: section.content };
  }

  @Post('tokens')
  @HttpCode(HttpStatus.OK)
  @Header('Cache-Control', 'no-store')
  async tokens(): Promise<AssistantTokenCounts> {
    const counts = await this.geminiService.countTokens({
      total: SYSTEM_INSTRUCTION,
      ...Object.fromEntries(
        KNOWLEDGE_SECTIONS.map((section) => [section.id, section.content]),
      ),
    });
    const { total = 0, ...sections } = counts;

    return { total, sections };
  }

  /** Asks Gemini exactly like /question does; counted on the Gemini tab. */
  @Post('ask')
  @HttpCode(HttpStatus.OK)
  @Header('Cache-Control', 'no-store')
  async ask(
    @Body() body: unknown,
    @Req() request: Request,
  ): Promise<AssistantTestAnswer> {
    const value =
      typeof body === 'object' && body !== null
        ? (body as Record<string, unknown>).question
        : undefined;
    const question = typeof value === 'string' ? value.trim() : '';

    if (question.length === 0) {
      throw new BadRequestException('Vui lòng nhập câu hỏi.');
    }

    if (question.length > MAX_QUESTION_LENGTH) {
      throw new BadRequestException(
        `Câu hỏi tối đa ${MAX_QUESTION_LENGTH} ký tự.`,
      );
    }

    const username = this.exportAuthService.verifySessionToken(
      readCookie(request, SESSION_COOKIE),
    );
    const startedAt = Date.now();
    const answer = await this.geminiService.ask(question, {
      source: 'admin',
      requester: username,
    });

    return {
      ...answer,
      durationMs: Date.now() - startedAt,
      discordMessages: splitDiscordMarkdown(answer.answer).length,
    };
  }
}
