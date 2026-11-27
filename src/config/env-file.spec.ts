import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { applyEnvUpdates, updateEnvFile } from './env-file.js';

describe('applyEnvUpdates', () => {
  it('replaces a key in place and keeps everything else', () => {
    const content = [
      '# Gemini',
      'GEMINI_API_KEY=old-key',
      'GEMINI_MODEL=gemini-flash-latest',
      '',
    ].join('\r\n');

    expect(applyEnvUpdates(content, { GEMINI_API_KEY: 'new-key' })).toBe(
      [
        '# Gemini',
        'GEMINI_API_KEY=new-key',
        'GEMINI_MODEL=gemini-flash-latest',
        '',
      ].join('\r\n'),
    );
  });

  it('appends missing keys and drops duplicates that would override', () => {
    const content = 'A=1\nGEMINI_LIMIT_RPD=10\nGEMINI_LIMIT_RPD=20\n';

    expect(
      applyEnvUpdates(content, {
        GEMINI_LIMIT_RPD: '250',
        GEMINI_LIMIT_RPM: '10',
      }),
    ).toBe('A=1\nGEMINI_LIMIT_RPD=250\nGEMINI_LIMIT_RPM=10\n');
  });

  it.each(['has space', 'line\nbreak', 'a#comment', 'quote"'])(
    'refuses unsafe values: %j',
    (value) => {
      expect(() => applyEnvUpdates('', { GEMINI_API_KEY: value })).toThrow(
        /Invalid value/,
      );
    },
  );
});

describe('updateEnvFile', () => {
  let directory: string | undefined;

  afterEach(async () => {
    if (directory) await rm(directory, { recursive: true, force: true });
  });

  it('rewrites the file', async () => {
    directory = await mkdtemp(join(tmpdir(), 'env-file-'));
    const path = join(directory, '.env');
    await writeFile(path, 'PORT=3000\nGEMINI_API_KEY=old\n');

    await updateEnvFile(path, { GEMINI_API_KEY: 'AIzaNewKey' });

    expect(await readFile(path, 'utf8')).toBe(
      'PORT=3000\nGEMINI_API_KEY=AIzaNewKey\n',
    );
  });

  it('keeps both changes when two saves happen at once', async () => {
    directory = await mkdtemp(join(tmpdir(), 'env-file-'));
    const path = join(directory, '.env');
    await writeFile(path, 'GEMINI_API_KEY=old\n');

    await Promise.all([
      updateEnvFile(path, { GEMINI_API_KEY: 'AIzaNewKey' }),
      updateEnvFile(path, { GEMINI_LIMIT_RPD: '250' }),
    ]);

    expect(await readFile(path, 'utf8')).toBe(
      'GEMINI_API_KEY=AIzaNewKey\nGEMINI_LIMIT_RPD=250\n',
    );
  });
});

describe('applyEnvUpdates with odd names', () => {
  it('ignores inherited property names such as toString', () => {
    expect(applyEnvUpdates('toString=1\n', { A: '2' })).toBe(
      'toString=1\nA=2\n',
    );
  });
});
