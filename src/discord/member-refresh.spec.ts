import { describe, expect, it, vi } from 'vitest';
import { MemberRefreshGate } from './member-refresh.js';

describe('MemberRefreshGate', () => {
  it('shares one running refresh between concurrent callers', async () => {
    const gate = new MemberRefreshGate(60_000);
    let finish!: () => void;
    const refresh = vi.fn(
      () => new Promise<void>((resolve) => (finish = resolve)),
    );

    const first = gate.run('guild', refresh);
    const second = gate.run('guild', refresh);
    finish();
    await Promise.all([first, second]);

    expect(refresh).toHaveBeenCalledTimes(1);
  });

  it('skips refreshes during the cooldown, then allows the next one', async () => {
    let now = 0;
    const gate = new MemberRefreshGate(60_000, () => now);
    const refresh = vi.fn(() => Promise.resolve());

    await gate.run('guild', refresh);
    now = 59_999;
    await gate.run('guild', refresh);
    expect(refresh).toHaveBeenCalledTimes(1);

    now = 60_000;
    await gate.run('guild', refresh);
    expect(refresh).toHaveBeenCalledTimes(2);
  });

  it('also waits after a failed refresh', async () => {
    let now = 0;
    const gate = new MemberRefreshGate(60_000, () => now);
    const refresh = vi.fn(() => Promise.reject(new Error('rate limited')));

    await expect(gate.run('guild', refresh)).rejects.toThrow('rate limited');
    now = 1_000;
    await gate.run('guild', refresh);

    expect(refresh).toHaveBeenCalledTimes(1);
  });

  it('keeps guilds independent', async () => {
    const gate = new MemberRefreshGate(60_000);
    const refresh = vi.fn(() => Promise.resolve());

    await gate.run('a', refresh);
    await gate.run('b', refresh);

    expect(refresh).toHaveBeenCalledTimes(2);
  });
});
