import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { Request } from 'express';
import { describe, expect, it, vi } from 'vitest';
import {
  KNOWLEDGE_SECTIONS,
  MAX_QUESTION_LENGTH,
  SYSTEM_INSTRUCTION,
} from '../gemini/knowledge/knowledge.js';
import type { GeminiService } from '../gemini/gemini.service.js';
import { AssistantAdminController } from './assistant-admin.controller.js';
import type { ExportAuthService } from './export-auth.service.js';

const request = {
  headers: { cookie: 'export_session=token' },
  socket: {},
} as unknown as Request;

function createController() {
  const geminiService = {
    keyInfo: vi.fn(() => ({ configured: true, model: 'gemini-x' })),
    knowledgeModeInUse: vi.fn(() => 'retrieval'),
    countTokens: vi.fn((texts: Record<string, string>) =>
      Promise.resolve(
        Object.fromEntries(
          Object.entries(texts).map(([id, text]) => [id, text.length]),
        ),
      ),
    ),
    ask: vi.fn(() =>
      Promise.resolve({
        answer: 'x'.repeat(4000),
        model: 'gemini-x',
        usage: { inputTokens: 1, outputTokens: 2, totalTokens: 3 },
        context: { mode: 'retrieval', characters: 10, passages: [] },
      }),
    ),
  };
  const auth = { verifySessionToken: vi.fn(() => 'admin') };
  const controller = new AssistantAdminController(
    geminiService as unknown as GeminiService,
    auth as unknown as ExportAuthService,
  );

  return { controller, geminiService };
}

describe('AssistantAdminController', () => {
  it('describes the assistant without sending the knowledge itself', () => {
    const { controller } = createController();

    const overview = controller.overview();

    expect(overview).toMatchObject({
      model: 'gemini-x',
      keyConfigured: true,
      maxQuestionLength: MAX_QUESTION_LENGTH,
      systemCharacters: SYSTEM_INSTRUCTION.length,
    });
    expect(overview.sources.map((s) => s.id)).toEqual(
      KNOWLEDGE_SECTIONS.map((s) => s.id),
    );
    expect(JSON.stringify(overview).length).toBeLessThan(10_000);
  });

  it('previews the passages a question would send, without Gemini', () => {
    const { controller, geminiService } = createController();

    const preview = controller.preview({ question: 'Động phủ mở khi nào?' });

    expect(preview.mode).toBe('retrieval');
    expect(preview.passages.some((p) => p.core)).toBe(true);
    expect(preview.passages.some((p) => p.title.endsWith('Động phủ'))).toBe(
      true,
    );
    expect(geminiService.ask).not.toHaveBeenCalled();
    expect(() => controller.preview({ question: ' ' })).toThrow(
      BadRequestException,
    );
  });

  it('returns one source on demand', () => {
    const { controller } = createController();

    expect(controller.source('game-quests').content).toContain('Nhiệm vụ');
    expect(() => controller.source('nope')).toThrow(NotFoundException);
  });

  it('counts the whole instruction and each source', async () => {
    const { controller } = createController();

    const counts = await controller.tokens();

    expect(counts.total).toBe(SYSTEM_INSTRUCTION.length);
    expect(Object.keys(counts.sections)).toEqual(
      KNOWLEDGE_SECTIONS.map((s) => s.id),
    );
  });

  it('asks like /question, as the logged-in admin', async () => {
    const { controller, geminiService } = createController();

    const result = await controller.ask({ question: '  Động phủ?  ' }, request);

    expect(geminiService.ask).toHaveBeenCalledWith('Động phủ?', {
      source: 'admin',
      requester: 'admin',
    });
    expect(result.discordMessages).toBeGreaterThan(1);
    expect(result.durationMs).toBeGreaterThanOrEqual(0);
  });

  it.each([{}, { question: '   ' }, { question: 'x'.repeat(4001) }])(
    'rejects %#',
    async (body) => {
      const { controller, geminiService } = createController();

      await expect(controller.ask(body, request)).rejects.toBeInstanceOf(
        BadRequestException,
      );
      expect(geminiService.ask).not.toHaveBeenCalled();
    },
  );
});
