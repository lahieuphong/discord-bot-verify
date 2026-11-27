// `npm run knowledge:sync [-- <gameDir>]`
//
// Regenerates the chatbot's game knowledge (features + quests) from the game
// source. The game folder defaults to GAME_SOURCE_DIR or
// E:\Phong_Nho_IT\TuTienHTML_r3 and must have its dependencies installed
// (pnpm install), because the extractor runs with the game's own tsx.
// The game folder is only read.

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const botRoot = resolve(here, '../..');
const gameDir = resolve(
  process.argv[2] ??
    process.env.GAME_SOURCE_DIR ??
    'E:\\Phong_Nho_IT\\TuTienHTML_r3',
);

const tsxCli = join(gameDir, 'node_modules', 'tsx', 'dist', 'cli.mjs');
const gameData = join(gameDir, 'packages', 'game-data', 'src', 'index.ts');

if (!existsSync(gameData)) {
  console.error(`Game source not found: ${gameData}`);
  console.error('Pass the folder: npm run knowledge:sync -- <path to TuTienHTML_r3>');
  process.exit(1);
}

if (!existsSync(tsxCli)) {
  console.error(`tsx not found in ${gameDir}. Run "corepack pnpm install" there first.`);
  process.exit(1);
}

const outFile = join(botRoot, 'src', 'gemini', 'knowledge', 'game-knowledge.generated.ts');
const featuresFile = join(here, 'features.vi.json');

const result = spawnSync(
  process.execPath,
  [tsxCli, join(here, 'extract.mjs'), gameDir, outFile, featuresFile],
  { cwd: gameDir, stdio: 'inherit' },
);

process.exit(result.status ?? 1);
