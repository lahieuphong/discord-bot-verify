/**
 * A small Markdown reader for the admin page: the knowledge sources (game
 * sections are Markdown, the wiki is plain text) and Gemini's answers
 * (Discord-style Markdown). It returns plain data; the view renders React
 * elements, so no HTML from the text is ever injected.
 */
import { normalizeSearch } from './format';

export interface ListItem {
  marker: string;
  text: string;
  /** 0 for top-level items, 1 for items indented under them. */
  depth: number;
}

export type Block =
  | { kind: 'heading'; level: 1 | 2 | 3 | 4; text: string }
  | { kind: 'list'; ordered: boolean; items: ListItem[] }
  | { kind: 'paragraph'; lines: string[] }
  | { kind: 'quote'; lines: string[] }
  | { kind: 'rule' };

/** Most search results shown at once. */
export const SEARCH_LIMIT = 200;

// Simple, anchored patterns: no nested quantifiers, so no slow backtracking.
const HEADING = /^(#{1,4})[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/;
const BULLET = /^([ \t]*)[-*•][ \t]+(.*)$/;
const NUMBERED = /^([ \t]*)(\d+)[.)][ \t]+(.*)$/;
const QUOTE = /^[ \t]*>[ \t]?(.*)$/;
const RULE = /^[ \t]*(?:-{3,}|\*{3,}|_{3,})[ \t]*$/;

/**
 * A plain-text line that works as a heading in the wiki: short, standing
 * alone between blank lines, not a sentence ("Lần đầu vào game"). Bylines
 * ("Cẩm nang · Wiki người chơi V3") are not headings.
 */
export function isPlainHeading(line: string): boolean {
  const text = line.trim();
  return (
    text.length > 0 &&
    text.length <= 70 &&
    !/[.!:;,…]$/.test(text) &&
    !text.includes(': ') &&
    !text.includes(' · ') &&
    !BULLET.test(text) &&
    !NUMBERED.test(text)
  );
}

function indentDepth(indent: string): number {
  return indent.replace(/\t/g, '  ').length >= 2 ? 1 : 0;
}

export function parseBlocks(
  text: string,
  options: { plainHeadings?: boolean } = {},
): Block[] {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let quote: string[] = [];
  let list: Extract<Block, { kind: 'list' }> | null = null;

  const flush = () => {
    if (paragraph.length > 0) {
      blocks.push({ kind: 'paragraph', lines: paragraph });
      paragraph = [];
    }
    if (quote.length > 0) {
      blocks.push({ kind: 'quote', lines: quote });
      quote = [];
    }
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  lines.forEach((line, index) => {
    if (!line.trim()) {
      flush();
      return;
    }

    if (RULE.test(line)) {
      flush();
      blocks.push({ kind: 'rule' });
      return;
    }

    const heading = HEADING.exec(line);
    if (heading) {
      flush();
      blocks.push({
        kind: 'heading',
        level: heading[1]!.length as 1 | 2 | 3 | 4,
        text: heading[2]!.trim(),
      });
      return;
    }

    const bullet = BULLET.exec(line);
    const numbered = bullet ? null : NUMBERED.exec(line);
    if (bullet || numbered) {
      const depth = indentDepth((bullet ?? numbered)![1]!);
      const ordered = Boolean(numbered);
      const item: ListItem = numbered
        ? { marker: `${numbered[2]}.`, text: numbered[3]!, depth }
        : { marker: '•', text: bullet![2]!, depth };

      // Indented items belong to the open list whatever their marker.
      if (list && depth > 0) {
        list.items.push(item);
        return;
      }

      if (paragraph.length > 0 || quote.length > 0) flush();
      if (list && list.ordered !== ordered) flush();
      list ??= { kind: 'list', ordered, items: [] };
      list.items.push({ ...item, depth: 0 });
      return;
    }

    const quoted = QUOTE.exec(line);
    if (quoted) {
      if (paragraph.length > 0 || list) flush();
      quote.push(quoted[1]!.trim());
      return;
    }

    if (list || quote.length > 0) flush();

    // Wiki: a short line alone between blank lines is a sub-heading.
    const alone = !lines[index - 1]?.trim() && !lines[index + 1]?.trim();
    if (options.plainHeadings && alone && isPlainHeading(line)) {
      flush();
      blocks.push({ kind: 'heading', level: 4, text: line.trim() });
      return;
    }

    paragraph.push(line.trim());
  });

  flush();
  return blocks;
}

/** "Mở khóa: từ Trúc Cơ" → label "Mở khóa", rest "từ Trúc Cơ". */
export function splitLabel(
  text: string,
): { label: string; rest: string } | null {
  const at = text.indexOf(': ');
  if (at <= 0 || at > 40) return null;
  const label = text.slice(0, at);
  const rest = text.slice(at + 2);
  // Not a label when it holds Markdown, a comma or a sentence end ("?" may
  // close a label: "Bạn muốn làm gì?: …"), nor when the line is itself a
  // question ("Vấn Đạo: Nghịch Mệnh là game gì?" is a title).
  if (/[*`.!,]|\?./.test(label) || rest.trimEnd().endsWith('?')) return null;
  return { label, rest };
}

export type Inline =
  | { kind: 'text'; text: string }
  | { kind: 'bold'; text: string }
  | { kind: 'italic'; text: string }
  | { kind: 'code'; text: string };

// Matches one span at a time: ***bold italic*** (shown bold), **bold**,
// `code`, *italic* or _italic_ (the single markers only at word edges, so
// "2*3" and "an_id" stay text).
const SPAN =
  /\*\*\*([^*\n]+?)\*\*\*|\*\*([^*\n]+?)\*\*|`([^`\n]+)`|(?<![\p{L}\p{N}*])\*([^*\s][^*\n]*?)\*(?![\p{L}\p{N}*])|(?<![\p{L}\p{N}_])_([^_\s][^_\n]*?)_(?![\p{L}\p{N}_])/gu;

/** Bold, italic and code spans of one line; everything else is text. */
export function parseInline(text: string): Inline[] {
  const parts: Inline[] = [];
  let last = 0;

  for (const match of text.matchAll(SPAN)) {
    const at = match.index;
    if (at > last) parts.push({ kind: 'text', text: text.slice(last, at) });

    const bold = match[1] ?? match[2];
    if (bold !== undefined) parts.push({ kind: 'bold', text: bold });
    else if (match[3] !== undefined)
      parts.push({ kind: 'code', text: match[3] });
    else parts.push({ kind: 'italic', text: (match[4] ?? match[5])! });

    last = at + match[0].length;
  }

  if (last < text.length) parts.push({ kind: 'text', text: text.slice(last) });
  return parts;
}

/** One character lower-cased without diacritics; spaces stay spaces. */
function foldChar(char: string): string {
  return char
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

/**
 * Splits `text` into plain and matching parts for highlighting `query`,
 * ignoring case and Vietnamese diacritics ("dong phu" marks "Động phủ").
 */
export function highlightParts(
  text: string,
  query: string,
): { text: string; match: boolean }[] {
  const needle = normalizeSearch(query);
  if (needle.length < 2) return [{ text, match: false }];

  // Normalise code point by code point, so positions map back to `text`.
  // Vietnamese letters each become one letter; anything that does not (an
  // emoji, a combining mark) disables highlighting for this text instead.
  const chars = Array.from(text.normalize('NFC'));
  const flat = chars.map(foldChar);
  if (flat.some((c) => c.length !== 1)) return [{ text, match: false }];

  const haystack = flat.join('');
  const parts: { text: string; match: boolean }[] = [];
  let from = 0;
  let at = haystack.indexOf(needle);

  while (at >= 0) {
    if (at > from) {
      parts.push({ text: chars.slice(from, at).join(''), match: false });
    }
    parts.push({
      text: chars.slice(at, at + needle.length).join(''),
      match: true,
    });
    from = at + needle.length;
    at = haystack.indexOf(needle, from);
  }

  if (from < chars.length) {
    parts.push({ text: chars.slice(from).join(''), match: false });
  }
  return parts;
}

export interface SearchGroup {
  /** "Nhóm Tu hành › Động phủ": where the lines are in the source. */
  path: string;
  lines: string[];
}

export interface IndexedLine {
  line: string;
  /** Lower-case, without diacritics: computed once, not per keystroke. */
  key: string;
  /** Headings the line sits under. */
  path: string;
}

/**
 * Every non-empty line of `content` with its search key and the headings it
 * belongs to: Markdown headings, and with `plainHeadings` (the wiki) also
 * short stand-alone lines. A heading line belongs to its parent headings.
 */
export function indexContent(
  content: string,
  options: { plainHeadings?: boolean } = {},
): IndexedLine[] {
  const lines = content.split('\n');
  const path: string[] = [];
  const indexed: IndexedLine[] = [];

  lines.forEach((line, index) => {
    if (!line.trim()) return;
    const heading = HEADING.exec(line);
    let parent: string;

    if (heading) {
      // "##" is the top level; never leave gaps when a level is skipped.
      const level = heading[1]!.length;
      path.length = Math.min(path.length, Math.max(0, level - 2));
      parent = path.join(' › ');
      path.push(heading[2]!.trim());
    } else if (
      options.plainHeadings &&
      !lines[index - 1]?.trim() &&
      !lines[index + 1]?.trim() &&
      isPlainHeading(line)
    ) {
      path.length = 0;
      parent = '';
      path.push(line.trim());
    } else {
      parent = path.join(' › ');
    }

    indexed.push({ line, key: normalizeSearch(line), path: parent });
  });

  return indexed;
}

/** Lines containing `query`, grouped by the headings they sit under. */
export function searchIndexed(
  lines: readonly IndexedLine[],
  query: string,
  limit = SEARCH_LIMIT,
): { groups: SearchGroup[]; total: number } {
  const needle = normalizeSearch(query);
  const groups: SearchGroup[] = [];
  let total = 0;

  if (needle.length === 0) return { groups, total };

  for (const item of lines) {
    if (!item.key.includes(needle)) continue;
    total += 1;
    if (total > limit) continue;

    const last = groups[groups.length - 1];
    if (last && last.path === item.path) {
      last.lines.push(item.line);
    } else {
      groups.push({ path: item.path, lines: [item.line] });
    }
  }

  return { groups, total };
}
