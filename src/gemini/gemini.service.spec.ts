import {
  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
import type { ConfigService } from '@nestjs/config';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { EnvironmentVariables } from '../config/environment.js';
import type { LiveUpdatesService } from '../live/live-updates.service.js';
import type { GeminiUsageService } from './gemini-usage.service.js';
import { GeminiService, keyFingerprint, maskKey } from './gemini.service.js';
import {
  MAX_OUTPUT_TOKENS,
  SYSTEM_INSTRUCTION,
  TRUNCATED_NOTE,
} from './knowledge/knowledge.js';

const genai = vi.hoisted(() => ({
  generateContent: vi.fn(),
  get: vi.fn(),
  countTokens: vi.fn(),
  keys: [] as string[],
}));

vi.mock('@google/genai', () => ({
  GoogleGenAI: class {
    readonly models = {
      generateContent: genai.generateContent,
      get: genai.get,
      countTokens: genai.countTokens,
    };
    constructor({ apiKey }: { apiKey: string }) {
      genai.keys.push(apiKey);
    }
  },
}));

const envFile = vi.hoisted(() => ({ updateEnvFile: vi.fn() }));
vi.mock('../config/env-file.js', () => envFile);

const OLD_KEY = 'AIzaOldKey0000000000000000000000000000';
const NEW_KEY = 'AIzaNewKey1111111111111111111111111111';

function createService(
  apiKey: string | null = OLD_KEY,
  knowledgeMode: 'retrieval' | 'full' = 'retrieval',
) {
  const values: Partial<EnvironmentVariables> = {
    GEMINI_API_KEY: apiKey ?? undefined,
    GEMINI_MODEL: 'gemini-flash-latest',
    GEMINI_LIMIT_RPD: 250,
    GEMINI_LIMIT_RPM: null,
    GEMINI_LIMIT_TPM: null,
    GEMINI_KNOWLEDGE_MODE: knowledgeMode,
  };
  const configService = {
    get: (key: keyof EnvironmentVariables) => values[key],
  } as unknown as ConfigService<EnvironmentVariables, true>;
  const record = vi.fn().mockResolvedValue(undefined);
  const notify = vi.fn();
  const service = new GeminiService(
    configService,
    { record } as unknown as GeminiUsageService,
    { notify } as unknown as LiveUpdatesService,
  );

  return { service, record, notify };
}

function quotaError() {
  return Object.assign(
    new Error(
      JSON.stringify({
        error: {
          code: 429,
          status: 'RESOURCE_EXHAUSTED',
          message: 'Quota exceeded',
          details: [
            {
              '@type': 'type.googleapis.com/google.rpc.QuotaFailure',
              violations: [
                {
                  quotaId: 'GenerateRequestsPerDayPerProjectPerModel-FreeTier',
                  quotaValue: '250',
                },
              ],
            },
          ],
        },
      }),
    ),
    { status: 429 },
  );
}

describe('GeminiService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    genai.keys = [];
  });

  it('masks and fingerprints keys without exposing them', () => {
    const { service } = createService();

    expect(service.keyInfo()).toEqual({
      configured: true,
      masked: maskKey(OLD_KEY),
      fingerprint: keyFingerprint(OLD_KEY),
      model: 'gemini-flash-latest',
      changedAt: null,
    });
    expect(maskKey(OLD_KEY)).toBe('AIza…0000');
    expect(keyFingerprint(OLD_KEY)).toMatch(/^[0-9a-f]{12}$/);
  });

  it('records a successful answer with its token usage', async () => {
    const { service, record } = createService();
    genai.generateContent.mockResolvedValue({
      text: ' Xin chào ',
      modelVersion: 'gemini-x',
      usageMetadata: {
        promptTokenCount: 10,
        candidatesTokenCount: 5,
        totalTokenCount: 15,
      },
    });

    await expect(
      service.ask('hi', { source: 'discord', requester: 'tester' }),
    ).resolves.toMatchObject({ answer: 'Xin chào', model: 'gemini-x' });

    expect(record).toHaveBeenCalledWith(
      expect.objectContaining({
        keyFingerprint: keyFingerprint(OLD_KEY),
        source: 'discord',
        requester: 'tester',
        usage: { inputTokens: 10, outputTokens: 5, totalTokens: 15 },
      }),
    );
    expect(record.mock.calls[0]?.[0]).not.toHaveProperty('error');
  });

  it('records an exhausted quota and tells the member in Vietnamese', async () => {
    const { service, record } = createService();
    genai.generateContent.mockRejectedValue(quotaError());

    const result = service.ask('hi', { source: 'discord' });

    await expect(result).rejects.toBeInstanceOf(ServiceUnavailableException);
    await expect(result).rejects.toThrow(/hết lượt hỏi AI/);
    expect(record).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          kind: 'quota',
          quotaValue: 250,
        }) as unknown,
      }),
    );
  });

  it('records an empty answer once', async () => {
    const { service, record } = createService();
    genai.generateContent.mockResolvedValue({ text: '' });

    await expect(service.ask('hi', { source: 'http' })).rejects.toBeInstanceOf(
      ServiceUnavailableException,
    );
    expect(record).toHaveBeenCalledTimes(1);
    expect(record.mock.calls[0]?.[0]).toMatchObject({
      error: { kind: 'empty' },
    });
  });

  describe('replaceKey', () => {
    it('checks the new key with Google, saves it and uses it at once', async () => {
      const { service, notify } = createService();
      genai.get.mockResolvedValue({ name: 'models/gemini-flash-latest' });

      const info = await service.replaceKey(`  ${NEW_KEY}  `);

      expect(genai.keys.at(-1)).toBe(NEW_KEY);
      expect(envFile.updateEnvFile).toHaveBeenCalledWith(
        expect.stringMatching(/\.env$/),
        { GEMINI_API_KEY: NEW_KEY },
      );
      expect(info.fingerprint).toBe(keyFingerprint(NEW_KEY));
      expect(info.changedAt).toBeInstanceOf(Date);
      expect(notify).toHaveBeenCalledWith('gemini-settings');

      genai.generateContent.mockResolvedValue({ text: 'ok' });
      await service.ask('hi', { source: 'http' });
      // The last client created is the one answering.
      expect(genai.keys.at(-1)).toBe(NEW_KEY);
    });

    it.each([
      'short',
      'has spaces in the middle of the key....',
      'x'.repeat(300),
    ])('rejects a malformed key without calling Google: %s', async (key) => {
      const { service } = createService();

      await expect(service.replaceKey(key)).rejects.toBeInstanceOf(
        BadRequestException,
      );
      expect(genai.get).not.toHaveBeenCalled();
      expect(envFile.updateEnvFile).not.toHaveBeenCalled();
    });

    it('keeps the old key when Google rejects the new one', async () => {
      const { service } = createService();
      genai.get.mockRejectedValue(
        Object.assign(
          new Error(
            JSON.stringify({
              error: { code: 400, message: 'API key not valid.' },
            }),
          ),
          { status: 400 },
        ),
      );

      await expect(service.replaceKey(NEW_KEY)).rejects.toThrow(
        /API key not valid/,
      );
      expect(envFile.updateEnvFile).not.toHaveBeenCalled();
      expect(service.keyInfo().fingerprint).toBe(keyFingerprint(OLD_KEY));
    });

    it('does not switch keys when .env cannot be written', async () => {
      const { service } = createService();
      genai.get.mockResolvedValue({});
      envFile.updateEnvFile.mockRejectedValueOnce(new Error('EACCES'));

      await expect(service.replaceKey(NEW_KEY)).rejects.toBeInstanceOf(
        ServiceUnavailableException,
      );
      expect(service.keyInfo().fingerprint).toBe(keyFingerprint(OLD_KEY));
    });
  });

  it('saves limits, writing 0 for unknown ones', async () => {
    const { service } = createService();

    await expect(
      service.updateLimits({ rpd: 500, rpm: null, tpm: 250_000 }),
    ).resolves.toEqual({ rpd: 500, rpm: null, tpm: 250_000 });
    expect(envFile.updateEnvFile).toHaveBeenCalledWith(expect.any(String), {
      GEMINI_LIMIT_RPD: '500',
      GEMINI_LIMIT_RPM: '0',
      GEMINI_LIMIT_TPM: '250000',
    });
  });

  it('counts tokens once per text and caches the result', async () => {
    const { service } = createService();
    genai.countTokens.mockResolvedValue({ totalTokens: 42 });

    await expect(service.countTokens({ a: 'one', b: 'two' })).resolves.toEqual({
      a: 42,
      b: 42,
    });
    await service.countTokens({ a: 'one' });

    expect(genai.countTokens).toHaveBeenCalledTimes(2);
  });

  it('sends the knowledge-based system instruction', async () => {
    const { service } = createService();
    genai.generateContent.mockResolvedValue({ text: 'ok' });

    await service.ask('hi', { source: 'admin', requester: 'admin' });

    const request = genai.generateContent.mock.calls[0]?.[0] as {
      config: { systemInstruction: string; maxOutputTokens: number };
    };
    expect(request.config.systemInstruction).toContain('# Nhiệm vụ trong game');
    expect(request.config.maxOutputTokens).toBe(MAX_OUTPUT_TOKENS);
  });

  it('sends only the relevant knowledge and says which', async () => {
    const { service } = createService();
    genai.generateContent.mockResolvedValue({ text: 'ok' });

    const answer = await service.ask('Làm sao mở Động phủ?', {
      source: 'discord',
    });

    const request = genai.generateContent.mock.calls[0]?.[0] as {
      config: { systemInstruction: string };
    };
    expect(request.config.systemInstruction.length).toBeLessThan(
      SYSTEM_INSTRUCTION.length / 5,
    );
    expect(answer.context.mode).toBe('retrieval');
    expect(
      answer.context.passages.some((p) => p.title.endsWith('Động phủ')),
    ).toBe(true);
  });

  it('marks an answer cut off by the output budget', async () => {
    const { service } = createService();
    genai.generateContent.mockResolvedValue({
      text: 'Một nửa câu',
      candidates: [{ finishReason: 'MAX_TOKENS' }],
    });

    const answer = await service.ask('hi', { source: 'http' });

    expect(answer.answer).toBe(`Một nửa câu\n\n${TRUNCATED_NOTE}`);
  });

  it('sends everything in full mode', async () => {
    const { service } = createService(OLD_KEY, 'full');
    genai.generateContent.mockResolvedValue({ text: 'ok' });

    const answer = await service.ask('hi', { source: 'http' });

    const request = genai.generateContent.mock.calls[0]?.[0] as {
      config: { systemInstruction: string };
    };
    expect(request.config.systemInstruction).toBe(SYSTEM_INSTRUCTION);
    expect(answer.context).toMatchObject({ mode: 'full', passages: [] });
  });

  it('reports a missing key on check', async () => {
    const { service } = createService(null);

    await expect(service.checkKey()).resolves.toMatchObject({
      ok: false,
      error: { kind: 'key' },
    });
  });
});
