import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import {
  BadRequestException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';
import type { EnvironmentVariables } from '../config/environment.js';
import { updateEnvFile } from '../config/env-file.js';
import { INSTRUCTION_PROMPT } from '../config/utils/const.js';
import { LiveUpdatesService } from '../live/live-updates.service.js';
import {
  describeGeminiError,
  EmptyGeminiAnswerError,
  type GeminiErrorInfo,
} from './gemini-errors.js';
import type { GeminiLimits } from './gemini-usage.js';
import {
  GeminiUsageService,
  type GeminiSource,
} from './gemini-usage.service.js';

export interface GeminiAnswer {
  answer: string;
  model: string;
  usage: {
    inputTokens: number | null;
    outputTokens: number | null;
    totalTokens: number | null;
  };
}

export interface GeminiKeyInfo {
  configured: boolean;
  /** e.g. "AIza…x7Qk"; the key itself never leaves the server. */
  masked: string | null;
  fingerprint: string | null;
  model: string;
  /** When the key was last replaced on the admin page (this process). */
  changedAt: Date | null;
}

export type GeminiKeyCheck =
  | {
      ok: true;
      model: string;
      displayName: string | null;
      inputTokenLimit: number | null;
      outputTokenLimit: number | null;
    }
  | { ok: false; error: GeminiErrorInfo };

/** Gemini API keys: one line of letters, digits, "-", "_" and ".". */
const API_KEY_PATTERN = /^[A-Za-z0-9_.-]{20,256}$/;

export function keyFingerprint(apiKey: string): string {
  return createHash('sha256').update(apiKey, 'utf8').digest('hex').slice(0, 12);
}

export function maskKey(apiKey: string): string {
  return apiKey.length <= 8
    ? '••••'
    : `${apiKey.slice(0, 4)}…${apiKey.slice(-4)}`;
}

@Injectable()
export class GeminiService {
  private readonly logger = new Logger(GeminiService.name);
  private readonly model: string;
  /** The .env next to the running app (NSSM/compose start it in the app folder). */
  private readonly envFilePath = resolve(process.cwd(), '.env');
  private apiKey: string | null;
  private client: GoogleGenAI | null;
  private keyChangedAt: Date | null = null;
  private limits: GeminiLimits;

  constructor(
    private readonly configService: ConfigService<EnvironmentVariables, true>,
    private readonly usageService: GeminiUsageService,
    private readonly liveUpdatesService: LiveUpdatesService,
  ) {
    this.apiKey =
      this.configService.get('GEMINI_API_KEY', { infer: true }) ?? null;
    this.model = this.configService.get('GEMINI_MODEL', { infer: true });
    this.client = this.apiKey ? new GoogleGenAI({ apiKey: this.apiKey }) : null;
    this.limits = {
      rpd: this.configService.get('GEMINI_LIMIT_RPD', { infer: true }),
      rpm: this.configService.get('GEMINI_LIMIT_RPM', { infer: true }),
      tpm: this.configService.get('GEMINI_LIMIT_TPM', { infer: true }),
    };
  }

  async ask(
    question: string,
    meta: { source: GeminiSource; requester?: string | null },
  ): Promise<GeminiAnswer> {
    const client = this.client;
    const apiKey = this.apiKey;

    if (!client || !apiKey) {
      throw new ServiceUnavailableException(
        'Gemini is not configured. Add GEMINI_API_KEY to .env and restart the app.',
      );
    }

    const startedAt = Date.now();
    const base = {
      keyFingerprint: keyFingerprint(apiKey),
      model: this.model,
      source: meta.source,
      requester: meta.requester ?? null,
    };

    try {
      const response = await client.models.generateContent({
        model: this.model,
        contents: question,
        config: {
          maxOutputTokens: 1_200,
          systemInstruction: INSTRUCTION_PROMPT,
        },
      });
      const usage = {
        inputTokens: response.usageMetadata?.promptTokenCount ?? null,
        outputTokens: response.usageMetadata?.candidatesTokenCount ?? null,
        totalTokens: response.usageMetadata?.totalTokenCount ?? null,
      };
      const answer = response.text?.trim();

      if (!answer) {
        void this.usageService.record({
          ...base,
          durationMs: Date.now() - startedAt,
          usage,
          error: describeGeminiError(new EmptyGeminiAnswerError()),
        });
        throw new EmptyGeminiAnswerError();
      }

      void this.usageService.record({
        ...base,
        durationMs: Date.now() - startedAt,
        usage,
      });

      return {
        answer,
        model: response.modelVersion ?? this.model,
        usage,
      };
    } catch (error) {
      const info = describeGeminiError(error);

      if (!(error instanceof EmptyGeminiAnswerError)) {
        void this.usageService.record({
          ...base,
          durationMs: Date.now() - startedAt,
          error: info,
        });
      }

      const stack = error instanceof Error ? error.stack : String(error);
      this.logger.error(`Gemini request failed (${info.kind})`, stack);

      throw new ServiceUnavailableException(this.userMessage(info));
    }
  }

  keyInfo(): GeminiKeyInfo {
    return {
      configured: this.apiKey !== null,
      masked: this.apiKey ? maskKey(this.apiKey) : null,
      fingerprint: this.apiKey ? keyFingerprint(this.apiKey) : null,
      model: this.model,
      changedAt: this.keyChangedAt,
    };
  }

  getLimits(): GeminiLimits {
    return { ...this.limits };
  }

  /** Asks Google whether the current key works (uses no generation quota). */
  async checkKey(): Promise<GeminiKeyCheck> {
    if (!this.apiKey) {
      return {
        ok: false,
        error: {
          kind: 'key',
          status: null,
          message: 'Chưa có GEMINI_API_KEY.',
          quotaId: null,
          quotaValue: null,
          retryAfterSec: null,
        },
      };
    }

    return this.probe(this.apiKey);
  }

  /**
   * Replaces the key without a restart: the new key is checked with Google
   * first, then written to .env (kept across restarts and deploys) and used
   * for the next question.
   */
  async replaceKey(newKey: string): Promise<GeminiKeyInfo> {
    const apiKey = newKey.trim();

    if (!API_KEY_PATTERN.test(apiKey)) {
      throw new BadRequestException(
        'Key không đúng định dạng (chỉ gồm chữ, số, "-", "_" và ".", dài 20–256 ký tự).',
      );
    }

    if (apiKey === this.apiKey) {
      throw new BadRequestException('Đây là key đang dùng.');
    }

    const check = await this.probe(apiKey);

    if (!check.ok) {
      throw new BadRequestException(
        `Google không chấp nhận key này: ${check.error.message}`,
      );
    }

    await this.writeEnv({ GEMINI_API_KEY: apiKey });
    this.apiKey = apiKey;
    this.client = new GoogleGenAI({ apiKey });
    this.keyChangedAt = new Date();
    this.logger.log(
      `Gemini API key replaced (now ${maskKey(apiKey)}, fingerprint ${keyFingerprint(apiKey)})`,
    );
    this.liveUpdatesService.notify('gemini-settings');
    return this.keyInfo();
  }

  /** Saves the limits shown in AI Studio (null = unknown). */
  async updateLimits(limits: GeminiLimits): Promise<GeminiLimits> {
    await this.writeEnv({
      GEMINI_LIMIT_RPD: String(limits.rpd ?? 0),
      GEMINI_LIMIT_RPM: String(limits.rpm ?? 0),
      GEMINI_LIMIT_TPM: String(limits.tpm ?? 0),
    });
    this.limits = { ...limits };
    this.logger.log(
      `Gemini limits set to ${JSON.stringify(this.limits)} on the admin page`,
    );
    this.liveUpdatesService.notify('gemini-settings');
    return this.getLimits();
  }

  private async probe(apiKey: string): Promise<GeminiKeyCheck> {
    try {
      const model = await new GoogleGenAI({ apiKey }).models.get({
        model: this.model,
      });

      return {
        ok: true,
        model: model.name ?? this.model,
        displayName: model.displayName ?? null,
        inputTokenLimit: model.inputTokenLimit ?? null,
        outputTokenLimit: model.outputTokenLimit ?? null,
      };
    } catch (error) {
      return { ok: false, error: describeGeminiError(error) };
    }
  }

  private async writeEnv(updates: Record<string, string>): Promise<void> {
    try {
      await updateEnvFile(this.envFilePath, updates);
    } catch (error) {
      this.logger.error(`Could not update ${this.envFilePath}`, String(error));
      throw new ServiceUnavailableException(
        'Không ghi được file .env của bot trên máy chủ; chưa có gì thay đổi.',
      );
    }
  }

  private userMessage(info: GeminiErrorInfo): string {
    switch (info.kind) {
      case 'quota':
        return 'Bot đã dùng hết lượt hỏi AI (hạn mức Gemini). Vui lòng thử lại sau.';
      case 'key':
        return 'Khóa Gemini của bot không hợp lệ. Vui lòng báo quản trị viên.';
      default:
        return 'Gemini could not answer right now. Please try again shortly.';
    }
  }
}
