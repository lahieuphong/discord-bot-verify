import { BadRequestException } from '@nestjs/common';
import { describe, expect, it } from 'vitest';
import { InMemoryAuditStore } from '../audit/audit-store.js';
import { AuditService } from '../audit/audit.service.js';
import { AuditAdminController } from './audit-admin.controller.js';

async function createController() {
  const store = new InMemoryAuditStore();
  const audit = new AuditService(store);
  const at = new Date('2026-11-27T05:00:00Z');
  await store.add({
    source: 'web',
    action: 'login',
    actor: 'admin',
    ip: '192.168.1.1',
    detail: null,
    at,
  });
  await store.add({
    source: 'web',
    action: 'login_failed',
    actor: 'x',
    ip: '203.0.113.9',
    detail: null,
    at,
  });
  await store.add({
    source: 'discord',
    action: 'verification_submitted',
    actor: 'tester (1)',
    ip: null,
    detail: 'Được cấp vai trò member',
    at,
  });
  await store.add({
    source: 'web',
    action: 'excel_download',
    actor: 'admin',
    ip: '203.0.113.9',
    detail: '635 thành viên',
    at,
  });

  return new AuditAdminController(audit);
}

describe('AuditAdminController', () => {
  it('lists newest first with labels and ISO dates', async () => {
    const controller = await createController();

    const page = await controller.list();

    expect(page.total).toBe(4);
    expect(page.entries.map((e) => e.action)).toEqual([
      'excel_download',
      'verification_submitted',
      'login_failed',
      'login',
    ]);
    expect(page.entries[0]?.at).toBe('2026-11-27T05:00:00.000Z');
    expect(page.actions).toContainEqual({
      value: 'excel_download',
      label: 'Tải file Excel',
    });
  });

  it('filters by action, source, search and the office network', async () => {
    const controller = await createController();

    expect(
      (await controller.list(undefined, undefined, undefined, 'login')).total,
    ).toBe(1);
    expect(
      (
        await controller.list(
          undefined,
          undefined,
          undefined,
          undefined,
          'discord',
        )
      ).total,
    ).toBe(1);
    expect(
      (
        await controller.list(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          'tester',
        )
      ).total,
    ).toBe(1);
    // External scope: outside IPs and Discord, not 192.168.x.
    const external = await controller.list(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'external',
    );
    expect(external.entries.map((e) => e.action)).toEqual([
      'excel_download',
      'verification_submitted',
      'login_failed',
    ]);
  });

  it('returns only newer entries for live updates', async () => {
    const controller = await createController();

    expect((await controller.list(undefined, undefined, '2')).total).toBe(2);
  });

  it.each([
    ['0', undefined, undefined, undefined],
    [undefined, '7', undefined, undefined],
    [undefined, undefined, undefined, 'drop_table'],
    ['1', undefined, '3', undefined],
  ])('rejects bad filters %#', async (page, pageSize, after, action) => {
    const controller = await createController();

    await expect(
      controller.list(page, pageSize, after, action),
    ).rejects.toBeInstanceOf(BadRequestException);
  });
});
