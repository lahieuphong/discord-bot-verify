import { BadRequestException } from '@nestjs/common';
import type { Request } from 'express';
import { describe, expect, it, vi } from 'vitest';
import type { GeminiUsageService } from '../gemini/gemini-usage.service.js';
import type { GeminiService } from '../gemini/gemini.service.js';
import { GeminiAdminController } from './gemini-admin.controller.js';

const request = { headers: {}, socket: {} } as unknown as Request;

function createController({
  trackingEnabled = true,
  fingerprint = 'abc123abc123' as string | null,
} = {}) {
  const geminiService = {
    keyInfo: vi.fn(() => ({
      configured: fingerprint !== null,
      masked: fingerprint ? 'AIza…0000' : null,
      fingerprint,
      model: 'gemini-flash-latest',
      changedAt: null,
    })),
    getLimits: vi.fn(() => ({ rpd: 250, rpm: null, tpm: null })),
    updateLimits: vi.fn((limits: unknown) => Promise.resolve(limits)),
    replaceKey: vi.fn(() => Promise.resolve({ masked: 'AIza…1111' })),
  };
  const usageService = {
    isEnabled: vi.fn(() => trackingEnabled),
    getKeyUsage: vi.fn(() => Promise.resolve({ today: { requests: 3 } })),
  };
  const controller = new GeminiAdminController(
    geminiService as unknown as GeminiService,
    usageService as unknown as GeminiUsageService,
  );

  return { controller, geminiService, usageService };
}

describe('GeminiAdminController', () => {
  it('returns the key, limits and usage of the current key', async () => {
    const { controller, usageService } = createController();

    const overview = await controller.overview();

    expect(overview).toMatchObject({
      key: { masked: 'AIza…0000' },
      limits: { rpd: 250 },
      trackingEnabled: true,
      usage: { today: { requests: 3 } },
    });
    expect(usageService.getKeyUsage).toHaveBeenCalledWith(
      'abc123abc123',
      expect.any(Date),
    );
  });

  it.each([
    { trackingEnabled: false, fingerprint: 'abc123abc123' },
    { trackingEnabled: true, fingerprint: null },
  ])('has no usage without a database or key: %o', async (options) => {
    const { controller, usageService } = createController(options);

    await expect(controller.overview()).resolves.toMatchObject({ usage: null });
    expect(usageService.getKeyUsage).not.toHaveBeenCalled();
  });

  it('accepts whole numbers and treats empty values as unknown', async () => {
    const { controller, geminiService } = createController();

    await controller.updateLimits({ rpd: 500, rpm: '', tpm: null }, request);

    expect(geminiService.updateLimits).toHaveBeenCalledWith({
      rpd: 500,
      rpm: null,
      tpm: null,
    });
  });

  it.each([{ rpd: -1 }, { rpd: 1.5 }, { rpd: '250' }, { rpm: 2_000_000_000 }])(
    'rejects invalid limits %o',
    async (body) => {
      const { controller, geminiService } = createController();

      await expect(
        controller.updateLimits(body, request),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(geminiService.updateLimits).not.toHaveBeenCalled();
    },
  );

  it('requires a key when replacing it', async () => {
    const { controller, geminiService } = createController();

    await expect(
      controller.replaceKey({ apiKey: '  ' }, request),
    ).rejects.toBeInstanceOf(BadRequestException);
    await controller.replaceKey({ apiKey: 'AIzaNew' }, request);
    expect(geminiService.replaceKey).toHaveBeenCalledWith('AIzaNew');
  });
});
