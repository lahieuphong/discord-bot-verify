// Reads the game's own data (TuTienHTML_r3) and writes the chatbot knowledge
// module src/gemini/knowledge/game-knowledge.generated.ts.
//
// Run through scripts/game-knowledge/sync.mjs (`npm run knowledge:sync`): it
// starts this file with the game's tsx, so the game's TypeScript data files
// can be imported directly. Nothing in the game folder is modified.
//
//   node <game>/node_modules/.bin/tsx extract.mjs <gameDir> <outFile> <featuresJson>

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const [gameDir, outFile, featuresFile] = process.argv.slice(2);

if (!gameDir || !outFile || !featuresFile) {
  console.error('usage: extract.mjs <gameDir> <outFile> <featuresJson>');
  process.exit(2);
}

const gd = await import(
  pathToFileURL(join(gameDir, 'packages/game-data/src/index.ts')).href
);
const vi = gd.CONTENT_VI;
const warnings = [];

// ---------------------------------------------------------------- helpers

/** Vietnamese text of a content key; warns (and returns the key) if missing. */
function text(key) {
  const value = vi[key];
  if (value === undefined) {
    warnings.push(`missing text: ${key}`);
    return key;
  }
  return value;
}

const numberFormat = new Intl.NumberFormat('vi-VN');
const num = (n) => numberFormat.format(n);

/** "Ngưng Khí tầng 3", "Trúc Cơ Sơ kỳ"… for a character level. */
function levelName(level) {
  const stage = gd.STAGES.find((s) => s.level === level);
  if (!stage) return `cấp ${level}`;
  const node = gd.REALM_BY_ID[stage.realmId];
  const name = text(node.nameKey);
  if (node.stageModel === 'layers') {
    return `${name} ${text('stage.layer').replace('{n}', String(stage.stage))}`;
  }
  if (node.stageModel === 'four_stage') {
    return `${name} ${text(gd.FOUR_STAGE_KEYS[stage.stage - 1])}`;
  }
  return name;
}

function realmName(realmId) {
  const node = gd.REALM_BY_ID[realmId];
  return node ? text(node.nameKey) : realmId;
}

function itemName(itemId) {
  const key = `item.${itemId}.name`;
  return vi[key] ?? text(gd.MATERIAL_BY_ID?.[itemId]?.nameKey ?? key);
}

function equipName(id) {
  const def = gd.EQUIP_BY_ID[id];
  return def ? text(def.nameKey) : id;
}

function skillName(id) {
  const def = gd.SKILL_BY_ID[id] ?? gd.PASSIVE_BY_ID[id];
  return def ? text(def.nameKey) : text(`skill.${id}.name`);
}

// ---------------------------------------------------- menu (web source text)

// The menu lives in the web app (React); read it as text instead of running it.
const appSource = readFileSync(join(gameDir, 'apps/web/src/App.tsx'), 'utf8');
const i18nSource = readFileSync(join(gameDir, 'apps/web/src/i18n.ts'), 'utf8');

// The first definition of each key is the Vietnamese one (UI_VI comes first).
const screenNames = {};
for (const m of i18nSource.matchAll(/'nav\.(\w+)':\s*'([^']+)'/g)) {
  screenNames[m[1]] ??= m[2];
}

function parseArrayLiteral(name) {
  const match = new RegExp(`const ${name}[^=]*=\\s*(\\[[\\s\\S]*?\\]);`).exec(
    appSource,
  );
  if (!match) throw new Error(`Could not find ${name} in App.tsx`);
  // Only string/array/object literals: safe to evaluate as JSON-ish JS.
  return Function(`"use strict"; return (${match[1]});`)();
}

const navGroups = parseArrayLiteral('NAV_GROUPS');
const families = parseArrayLiteral('FAMILIES');
const familyOf = (page) => families.find((f) => f.includes(page)) ?? [page];
const screenName = (page) => screenNames[page] ?? page;

// --------------------------------------------------------------- features

const features = JSON.parse(readFileSync(featuresFile, 'utf8'));
const featureByPage = new Map(features.map((f) => [f.page, f]));
const hiddenPages = new Set(['assets', 'admin']);

/** Every screen reachable from the menu, in menu order. */
const menuPages = [];
for (const group of navGroups) {
  for (const page of group.pages) {
    for (const member of familyOf(page)) {
      if (!hiddenPages.has(member) && !menuPages.includes(member)) {
        menuPages.push(member);
      }
    }
  }
}

for (const page of menuPages) {
  if (!featureByPage.has(page)) warnings.push(`no description for screen: ${page}`);
}

function renderFeature(feature) {
  const name = screenNames[feature.page] ?? feature.name;
  const lines = [`### ${name}`, feature.summary];
  if (feature.unlock) lines.push(`- Mở khóa: ${feature.unlock}`);
  for (const step of feature.howTo ?? []) lines.push(`- ${step}`);
  for (const tab of feature.tabs ?? []) lines.push(`- Mục "${tab.name}": ${tab.summary}`);
  for (const tip of feature.tips ?? []) lines.push(`- Mẹo: ${tip}`);
  return lines.join('\n');
}

const featureLines = [
  '## Tính năng (các màn hình) trong game',
  'Thanh menu chia thành các nhóm; màn hình cùng họ hiện thành tab trong cùng một cửa sổ.',
];
for (const group of navGroups) {
  const pages = group.pages.flatMap(familyOf).filter((p) => !hiddenPages.has(p));
  featureLines.push(`- Nhóm "${group.title}": ${[...new Set(pages)].map(screenName).join(', ')}`);
}
for (const group of navGroups) {
  featureLines.push('', `## Nhóm ${group.title}`);
  for (const page of [...new Set(group.pages.flatMap(familyOf))]) {
    const feature = featureByPage.get(page);
    if (feature) featureLines.push('', renderFeature(feature));
  }
}
const extraFeatures = features.filter((f) => !menuPages.includes(f.page));
if (extraFeatures.length > 0) {
  featureLines.push('', '## Chế độ và màn hình khác');
  for (const feature of extraFeatures) featureLines.push('', renderFeature(feature));
}

// ----------------------------------------------------------------- unlocks

const UNLOCKS = [
  ['SECT_JOIN_LEVEL', 'Gia nhập tông môn'],
  ['CAVE_UNLOCK_LEVEL', 'Động phủ'],
  ['DAO_UNLOCK_LEVEL', 'Ngộ đạo'],
  ['MERIDIAN_REQ_LEVEL', 'Kinh mạch'],
  ['TREASURE_UNLOCK_LEVEL', 'Pháp bảo'],
  ['KHOI_LOI_UNLOCK_LEVEL', 'Khôi lỗi'],
  ['ANCIENT_REQ_LEVEL', 'Cổ Thần'],
  ['ARENA_MIN_LEVEL', 'Đấu trường'],
  ['MARKET_MIN_LEVEL', 'Chợ'],
  ['AUCTION_MIN_LEVEL', 'Đấu giá'],
  ['GUILD_CREATE_LEVEL', 'Lập bang hội'],
  ['GUILD_WAR_MIN_LEVEL', 'Bang chiến'],
  ['GW2_MIN_LEVEL', 'Chiến Tuyến'],
  ['WORLD_BOSS_MIN_LEVEL', 'Boss chung'],
  ['CHAT_MIN_LEVEL', 'Trò chuyện'],
  ['STANCE_UNLOCK_LEVEL', 'Thế (Chứng đạo)'],
  ['ESSENCE_UNLOCK_LEVEL', 'Tinh hoa (Chứng đạo)'],
  ['MORTAL_UNLOCK_LEVEL', 'Hóa phàm'],
  ['IMMORTAL_UNLOCK_LEVEL', 'Tiên đạo'],
];
const unlockLines = [];
for (const [constant, label] of UNLOCKS) {
  const level = gd[constant];
  if (typeof level === 'number') {
    unlockLines.push(`- ${label}: từ ${levelName(level)}`);
  } else {
    warnings.push(`unlock constant not found: ${constant}`);
  }
}
if (unlockLines.length > 0) {
  featureLines.splice(
    2 + navGroups.length,
    0,
    '',
    '## Mốc mở khóa theo cảnh giới (từ dữ liệu game)',
    ...unlockLines,
  );
}

// ------------------------------------------------------------------ quests

function rewardText(rewards) {
  const parts = [];
  if (rewards.stones) parts.push(`${num(rewards.stones)} linh thạch`);
  for (const item of rewards.items ?? []) parts.push(`${itemName(item.itemId)} ×${item.qty}`);
  for (const id of rewards.equipDefIds ?? []) parts.push(`trang bị ${equipName(id)}`);
  for (const id of rewards.skills ?? []) parts.push(`công pháp ${skillName(id)}`);
  return parts.join(', ') || 'không có';
}

// Chapter headings of the main quest line, as shown on the Nhiệm vụ screen.
const progressSource = readFileSync(join(gameDir, 'apps/web/src/pages/Progress.tsx'), 'utf8');
const chapterLiteral = /const CHAPTERS[^=]*=\s*(\{[^}]*\})/.exec(progressSource);
const CHAPTERS = chapterLiteral
  ? [...chapterLiteral[1].matchAll(/(\d+):\s*'([^']+)'/g)].map((m) => [Number(m[1]), m[2]])
  : [];
if (CHAPTERS.length === 0) warnings.push('quest chapter headings not found in Progress.tsx');

const questLines = [
  '## Nhiệm vụ trong game',
  `Màn hình Nhiệm vụ có các mục: Nhiệm vụ chính, Chương truyện, Hằng ngày, Hằng tuần, Thành tựu, Lịch & việc nên làm. Ngày mới bắt đầu lúc ${gd.DEFAULT_RESET_HOUR} giờ (giờ Việt Nam) theo mặc định, tuần mới bắt đầu vào thứ Hai cùng giờ; quản trị game có thể đổi giờ này, giờ đang dùng hiện trong mục Lịch & việc nên làm.`,
  '',
  `### Nhiệm vụ chính (${gd.QUESTS.length} nhiệm vụ, làm lần lượt)`,
  'Mỗi nhiệm vụ do một NPC giao; bấm "Đi tới" để mở đúng màn hình cần làm. Điều kiện xét theo trạng thái và bộ đếm tích lũy, nên việc đã làm trước khi tới lượt vẫn được tính. Làm xong phải bấm nhận thưởng.',
];
for (const quest of [...gd.QUESTS].sort((a, b) => a.order - b.order)) {
  const chapter = CHAPTERS.find(([order]) => order === quest.order);
  if (chapter) questLines.push('', `#### ${chapter[1]}`);
  questLines.push(
    `${quest.order}. ${text(quest.nameKey)} (NPC: ${text(quest.npcKey)}; màn hình: ${screenName(quest.goto)}). ${text(quest.descKey)} Thưởng: ${rewardText(quest.rewards)}.`,
  );
}

const daily = gd.DAILY_TASKS.map((t) => `- ${text(t.nameKey)}`);
const weekly = gd.WEEKLY_TASKS.map((t) => `- ${text(t.nameKey)}`);
const dailyReward = gd.periodicReward(16, 'daily');
const weeklyReward = gd.periodicReward(16, 'weekly');
questLines.push(
  '',
  `### Nhiệm vụ hằng ngày (${gd.DAILY_TASKS.length} việc, mặc định mỗi ngày nhận thưởng tối đa ${gd.DAILY_CLAIM_LIMIT} việc)`,
  'Không cần làm đủ mọi việc: chọn những việc hợp với cách chơi. Thưởng mỗi việc: linh thạch (tăng theo cảnh giới) và ' +
    `${num(dailyReward.contribution)} cống hiến tông môn.`,
  ...daily,
  '',
  `### Nhiệm vụ hằng tuần (${gd.WEEKLY_TASKS.length} việc)`,
  `Thưởng mỗi việc: linh thạch (gấp 6 lần thưởng ngày), ${num(weeklyReward.contribution)} cống hiến và 2 viên ${itemName('item_qi_pill')} (từ Trúc Cơ: ${itemName('item_spirit_pill')}).`,
  ...weekly,
  '',
  `### Thành tựu (${gd.ACHIEVEMENTS.length} mốc, nhận một lần)`,
  ...gd.ACHIEVEMENTS.map((a) => `- ${text(a.nameKey)}: ${num(a.stones)} linh thạch`),
  '',
  `### Việc tông môn (mỗi ngày, cần đã gia nhập tông môn)`,
  ...gd.SECT_TASKS.map((t) => `- ${text(t.nameKey)}: ${num(t.contribution)} cống hiến`),
  '',
  '### Nhiệm vụ bang (theo tuần)',
  'Mục tiêu tính trên tổng của cả bang; đạt rồi thì mỗi thành viên tự nhận phần mình một lần trong tuần.',
  ...gd.GUILD_QUESTS.map((q) => `- ${text(q.nameKey)}: ${num(q.stones)} linh thạch`),
);

// ------------------------------------------------------------------ output

const sections = [
  {
    id: 'game-features',
    title: 'Tính năng trong game',
    summary: `${features.length} màn hình/chế độ, mô tả theo mã nguồn giao diện game; mốc mở khóa lấy từ dữ liệu game.`,
    content: featureLines.join('\n'),
  },
  {
    id: 'game-quests',
    title: 'Nhiệm vụ trong game',
    summary: `${gd.QUESTS.length} nhiệm vụ chính, ${gd.DAILY_TASKS.length} hằng ngày, ${gd.WEEKLY_TASKS.length} hằng tuần, ${gd.ACHIEVEMENTS.length} thành tựu, ${gd.SECT_TASKS.length} việc tông môn, ${gd.GUILD_QUESTS.length} nhiệm vụ bang; lấy trực tiếp từ dữ liệu game.`,
    content: questLines.join('\n'),
  },
];

// Keep the previous timestamp when nothing changed, so a re-sync is a no-op.
let generatedAt = new Date().toISOString();
if (existsSync(outFile)) {
  const previous = readFileSync(outFile, 'utf8');
  const previousAt = /GAME_KNOWLEDGE_GENERATED_AT = ["'](.+?)["']/.exec(previous)?.[1];
  const sameContent = sections.every((s) => previous.includes(JSON.stringify(s.content)));
  if (previousAt && sameContent) generatedAt = previousAt;
}
const module = `// Generated by \`npm run knowledge:sync\` from the game source (TuTienHTML_r3).
// Do not edit by hand: change scripts/game-knowledge/features.vi.json or the
// game, then run the sync again.
import type { KnowledgeSection } from './knowledge.js';

export const GAME_KNOWLEDGE_GENERATED_AT = ${JSON.stringify(generatedAt)};

export const GAME_KNOWLEDGE_SECTIONS: KnowledgeSection[] = ${JSON.stringify(
  sections.map((s) => ({ ...s, origin: 'game' })),
  null,
  2,
)};
`;

writeFileSync(outFile, module, 'utf8');

console.log(`Wrote ${outFile}`);
for (const section of sections) {
  console.log(`  ${section.id}: ${section.content.length} characters`);
}
if (warnings.length > 0) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const warning of warnings) console.log(`  - ${warning}`);
}
