import { InMemoryAuditStore, type AuditStore } from './audit-store.js';
import { AUDIT_RETENTION_DAYS, AuditService } from './audit.service.js';

/** Lets the fire-and-forget writes of record() finish. */
const flush = () => new Promise((resolve) => setImmediate(resolve));

describe('AuditService', () => {
  it('records entries and lists them newest first, a page at a time', async () => {
    const store = new InMemoryAuditStore();
    const audit = new AuditService(store);

    for (let n = 1; n <= 5; n++) {
      audit.record({
        source: 'web',
        action: 'excel_download',
        actor: 'admin',
        ip: `192.168.1.${n}`,
      });
    }
    await flush();

    const first = await audit.list({ limit: 2 });
    expect(first.entries.map((e) => e.ip)).toEqual([
      '192.168.1.5',
      '192.168.1.4',
    ]);
    expect(first.total).toBe(5);

    // Third page of two.
    const last = await audit.list({ limit: 2, offset: 4 });
    expect(last.entries.map((e) => e.ip)).toEqual(['192.168.1.1']);
    expect(last.total).toBe(5);

    // Live updates: only what came after the newest entry shown.
    const newer = await audit.list({ limit: 100, after: 3 });
    expect(newer.entries.map((e) => e.id)).toEqual([5, 4]);
    expect(newer.total).toBe(2);
  });

  it('filters by action, source and search text', async () => {
    const store = new InMemoryAuditStore();
    const audit = new AuditService(store);
    audit.record({
      source: 'web',
      action: 'login',
      actor: 'admin',
      ip: '1.1.1.1',
    });
    audit.record({
      source: 'web',
      action: 'login_failed',
      actor: 'root',
      ip: '117.5.142.221',
    });
    audit.record({
      source: 'discord',
      action: 'verification_submitted',
      actor: 'Phong (123)',
      detail: '#12: Câu hỏi',
    });
    await flush();

    const actions = async (query: Parameters<AuditService['list']>[0]) =>
      (await audit.list(query)).entries.map((e) => e.action);

    expect(await actions({ limit: 10, action: 'login_failed' })).toEqual([
      'login_failed',
    ]);
    expect(await actions({ limit: 10, source: 'discord' })).toEqual([
      'verification_submitted',
    ]);
    expect(await actions({ limit: 10, search: '117.5' })).toEqual([
      'login_failed',
    ]);
    expect(await actions({ limit: 10, search: 'PHONG' })).toEqual([
      'verification_submitted',
    ]);
  });

  it('can leave out the office network, keeping entries without an IP', async () => {
    const store = new InMemoryAuditStore();
    const audit = new AuditService(store);
    for (const ip of [
      '127.0.0.1',
      '192.168.1.1',
      '10.0.0.5',
      '172.20.1.1',
      '172.32.1.1',
      '117.5.142.221',
      null,
    ]) {
      audit.record({ source: ip ? 'web' : 'discord', action: 'login', ip });
    }
    await flush();

    const page = await audit.list({ limit: 100, excludeInternal: true });
    expect(page.entries.map((e) => e.ip)).toEqual([
      null,
      '117.5.142.221',
      '172.32.1.1',
    ]);
    expect((await audit.list({ limit: 100 })).entries).toHaveLength(7);
  });

  it('cuts values to the column sizes and drops empty ones', async () => {
    const store = new InMemoryAuditStore();
    new AuditService(store).record({
      source: 'web',
      action: 'login_failed',
      actor: 'x '.repeat(250),
      ip: '  ',
      detail: 'd '.repeat(200),
    });
    await flush();

    expect(store.entries[0].actor).toHaveLength(120);
    expect(store.entries[0].ip).toBeNull();
    expect(store.entries[0].detail).toHaveLength(300);
  });

  it('never throws when the store fails', async () => {
    const failing: AuditStore = {
      add: () => Promise.reject(new Error('database down')),
      list: () => Promise.resolve({ entries: [], total: 0 }),
      prune: () => Promise.resolve(0),
    };
    const audit = new AuditService(failing);
    expect(() =>
      audit.record({ source: 'web', action: 'logout', actor: 'admin' }),
    ).not.toThrow();
    await flush();
  });

  it('removes entries older than the retention period', async () => {
    const store = new InMemoryAuditStore();
    const old = new Date(Date.now() - (AUDIT_RETENTION_DAYS + 1) * 86_400_000);
    await store.add({
      source: 'web',
      action: 'login',
      actor: 'admin',
      ip: null,
      detail: null,
      at: old,
    });
    await store.add({
      source: 'web',
      action: 'login',
      actor: 'admin',
      ip: null,
      detail: null,
      at: new Date(),
    });

    const audit = new AuditService(store);
    audit.onModuleInit();
    await flush();
    audit.onModuleDestroy();

    expect(store.entries).toHaveLength(1);
    expect(store.entries[0].at.getTime()).toBeGreaterThan(old.getTime());
  });

  it('never stores phone numbers, CCCDs or keys, but keeps Discord ids', async () => {
    const store = new InMemoryAuditStore();
    const audit = new AuditService(store);

    audit.record({
      source: 'web',
      action: 'assistant_ask',
      actor: 'admin',
      detail:
        'SĐT 0912 345 678, +84912345678, CCCD 037153000257, key AIzaSyA1b2C3d4E5f6G7h8I9j0KlmnOPQRstu',
    });
    audit.record({
      source: 'discord',
      action: 'verification_submitted',
      actor: 'tester (1566675122864005130)',
      detail: 'Được cấp vai trò member',
    });
    await new Promise((resolve) => setTimeout(resolve, 0));

    const [web, discord] = store.entries;
    expect(web?.detail).not.toMatch(
      /0912|345 678|84912345678|037153000257|AIza/,
    );
    expect(web?.detail).toContain('[số đã ẩn]');
    expect(web?.detail).toContain('[đã ẩn]');
    expect(discord?.actor).toBe('tester (1566675122864005130)');
  });
});
