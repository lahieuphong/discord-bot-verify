import { randomBytes } from 'node:crypto';
import { readFile, rename, rm, writeFile } from 'node:fs/promises';

/** Values written to .env must stay on one line and need no quoting. */
const SAFE_VALUE = /^[A-Za-z0-9_.-]*$/;
const KEY = /^[A-Z][A-Z0-9_]*$/;

/**
 * Returns `content` with each `KEY=value` line of `updates` replaced (the
 * first occurrence; later duplicates are removed so they cannot override it)
 * or appended. Comments, blank lines, other keys and the file's line endings
 * are kept as they are.
 */
export function applyEnvUpdates(
  content: string,
  updates: Record<string, string>,
): string {
  for (const [key, value] of Object.entries(updates)) {
    if (!KEY.test(key)) {
      throw new Error(`Invalid .env key: ${key}`);
    }

    if (!SAFE_VALUE.test(value)) {
      throw new Error(`Invalid value for ${key}`);
    }
  }

  const eol = content.includes('\r\n') ? '\r\n' : '\n';
  const lines = content.length > 0 ? content.split(/\r?\n/) : [];
  const done = new Set<string>();
  const result: string[] = [];

  for (const line of lines) {
    const match = /^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=/.exec(line);
    const key = match?.[1];

    if (key !== undefined && Object.hasOwn(updates, key)) {
      if (!done.has(key)) {
        result.push(`${key}=${updates[key]}`);
        done.add(key);
      }
      continue;
    }

    result.push(line);
  }

  const missing = Object.keys(updates).filter((key) => !done.has(key));

  if (missing.length > 0) {
    // Keep a final newline before appending.
    while (result.length > 0 && result[result.length - 1] === '') {
      result.pop();
    }
    result.push(...missing.map((key) => `${key}=${updates[key]}`), '');
  }

  return result.join(eol);
}

/** Writes in this process run one after another (read-modify-write). */
let queue: Promise<unknown> = Promise.resolve();

/**
 * Updates keys in an .env file. The new content is written to a temporary
 * file first and renamed over the original, so a crash never leaves a
 * half-written .env behind. Concurrent calls are serialised, so two saves at
 * the same moment cannot overwrite each other's change.
 */
export function updateEnvFile(
  path: string,
  updates: Record<string, string>,
): Promise<void> {
  const run = queue.then(async () => {
    const current = await readFile(path, 'utf8');
    const next = applyEnvUpdates(current, updates);
    const temporary = `${path}.${process.pid}.${randomBytes(4).toString('hex')}.tmp`;

    try {
      await writeFile(temporary, next, 'utf8');
      await rename(temporary, path);
    } catch (error) {
      // Never leave a copy of the secrets lying around.
      await rm(temporary, { force: true });
      throw error;
    }
  });

  queue = run.catch(() => undefined);
  return run;
}
