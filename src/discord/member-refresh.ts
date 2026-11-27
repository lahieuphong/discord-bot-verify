/**
 * Discord rate-limits "request guild members" (gateway opcode 8) per guild,
 * so a full member refresh must not run on every admin page reload. This
 * gate lets at most one refresh per guild run at a time, shares it with
 * concurrent callers, and waits `cooldownMs` after each attempt (successful
 * or not) before allowing the next one.
 */
export class MemberRefreshGate {
  private readonly running = new Map<string, Promise<void>>();
  private readonly lastAttemptAt = new Map<string, number>();

  constructor(
    private readonly cooldownMs: number,
    private readonly now: () => number = Date.now,
  ) {}

  /** Runs `refresh` unless one is running or the cooldown has not passed. */
  async run(guildId: string, refresh: () => Promise<void>): Promise<void> {
    const running = this.running.get(guildId);

    if (running) {
      return running;
    }

    const last = this.lastAttemptAt.get(guildId);

    if (last !== undefined && this.now() - last < this.cooldownMs) {
      return;
    }

    this.lastAttemptAt.set(guildId, this.now());
    const attempt = refresh().finally(() => {
      this.running.delete(guildId);
    });
    this.running.set(guildId, attempt);
    return attempt;
  }
}
