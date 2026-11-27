import type { KnowledgeSection } from './knowledge.js';

/**
 * Picks the parts of the knowledge that matter for one question, so a
 * /question no longer sends the whole wiki (~140k tokens) to Gemini.
 *
 * The knowledge is cut into chunks (wiki articles split into ~2,000-character
 * pieces, one chunk per game screen, one per quest group) and ranked with
 * BM25 over Vietnamese syllables and two-syllable phrases ("động phủ",
 * "nhiệm vụ"), with and without diacritics so unaccented questions match too.
 * Runs locally: no API calls, no quota.
 */

export interface KnowledgeChunk {
  id: string;
  sectionId: string;
  sectionTitle: string;
  /** "Group › Article" style label, also used for ranking. */
  title: string;
  text: string;
  /** Always sent (overview of the game menu, unlocks and reset times). */
  core: boolean;
}

export interface ScoredChunk {
  chunk: KnowledgeChunk;
  score: number;
}

export interface ContextSelection {
  /** Chunks sent with the question: core first, then by relevance. */
  chunks: ScoredChunk[];
  /** Characters of knowledge sent (chunk texts). */
  characters: number;
  /** Characters of all knowledge (what "full" mode would send). */
  totalCharacters: number;
}

/** Target size of the knowledge sent with one question (~16k tokens). */
export const CONTEXT_BUDGET_CHARS = 45_000;
const WIKI_CHUNK_CHARS = 2_000;
/** Chunks scoring below this share of the best one are left out. */
const MIN_RELATIVE_SCORE = 0.2;
/** ...but at least this many matching chunks, in case the best is wrong. */
const MIN_CHUNKS = 6;
const BM25_K1 = 1.2;
const BM25_B = 0.5;
/** Title words count this many times, so a matching heading ranks first. */
const TITLE_WEIGHT = 3;

// ------------------------------------------------------------- tokenising

export function stripDiacritics(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

/** Common Vietnamese function words: they say nothing about the topic. */
const STOPWORDS = new Set([
  'là',
  'và',
  'của',
  'có',
  'không',
  'được',
  'cho',
  'các',
  'những',
  'một',
  'để',
  'khi',
  'thì',
  'mà',
  'này',
  'đó',
  'với',
  'trong',
  'ở',
  'ra',
  'vào',
  'bạn',
  'tôi',
  'mình',
  'làm',
  'sao',
  'gì',
  'nào',
  'thế',
  'như',
  'nhé',
  'ạ',
  'ơi',
  'hay',
  'hoặc',
  'thể',
  'cần',
  'phải',
  'đã',
  'sẽ',
  'đang',
  'rồi',
  'nếu',
  'vì',
  'nên',
  'lại',
  'cũng',
  'từ',
  'theo',
  'về',
  'bị',
  'còn',
  'mỗi',
  'đến',
  'tới',
  'trên',
  'dưới',
  'sau',
  'trước',
  'nhiều',
  'ít',
  'hơn',
  'nhất',
  'rất',
  'chỉ',
  'bao',
  'nhiêu',
  'mấy',
  'ai',
  'đâu',
  'game',
  'xin',
  'chào',
  'giúp',
  'hỏi',
  'muốn',
  'biết',
  'cách',
  'vậy',
  'nhỉ',
  'à',
  'hả',
  'nha',
  'giùm',
  'dùm',
]);

/**
 * Unaccented forms of the stop words, for questions typed without
 * diacritics. Forms that are also game words without accents ("tu" in "ma
 * tu", "hoi" in "bang hội", "dau" in "đấu trường"…) are kept searchable.
 */
const PLAIN_STOPWORDS = new Set(
  [...STOPWORDS]
    .map(stripDiacritics)
    .filter(
      (word) =>
        ![
          'tu',
          'ma',
          'bao',
          'hoi',
          'dau',
          'can',
          'co',
          'bi',
          'do',
          'the',
        ].includes(word),
    ),
);

function syllables(text: string): string[] {
  // NFC first: text typed with combining accents (Unikey "tổ hợp") would
  // otherwise be cut apart at every accent mark.
  return (
    text
      .normalize('NFC')
      .toLowerCase()
      .match(/[\p{L}\p{N}]+/gu) ?? []
  );
}

/**
 * Ranking features of a text: syllables and syllable pairs, each with and
 * without diacritics (prefixed so the kinds never collide). A word is a stop
 * word by its accented form, so "từ" is skipped but "tu" (as in "ma tu") is
 * not; a pair of two stop words is skipped too.
 */
export function features(text: string): string[] {
  const exact = syllables(text);
  const plain = exact.map(stripDiacritics);
  const stop = exact.map((word) => STOPWORDS.has(word));
  const result: string[] = [];

  for (let i = 0; i < exact.length; i++) {
    if (!stop[i]) result.push(`u:${exact[i]}`, `n:${plain[i]}`);

    if (i + 1 < exact.length && !(stop[i] && stop[i + 1])) {
      result.push(
        `b:${exact[i]} ${exact[i + 1]}`,
        `m:${plain[i]} ${plain[i + 1]}`,
      );
    }
  }

  return result;
}

/** True when `text` has no Vietnamese diacritics at all. */
function isUnaccented(text: string): boolean {
  return stripDiacritics(text.normalize('NFC')) === text.normalize('NFC');
}

/**
 * Features of a question. A question typed without any diacritics ("lam sao
 * mo dong phu") is matched only on the unaccented forms, with the unaccented
 * stop words: its words are not really unaccented words, and rare unaccented
 * strings in the text would otherwise win.
 */
export function queryFeatures(question: string): string[] {
  if (!isUnaccented(question)) return features(question);

  const words = syllables(question);
  const stop = words.map((word) => PLAIN_STOPWORDS.has(word));
  const result: string[] = [];

  for (let i = 0; i < words.length; i++) {
    if (!stop[i]) result.push(`n:${words[i]}`);
    if (i + 1 < words.length && !(stop[i] && stop[i + 1])) {
      result.push(`m:${words[i]} ${words[i + 1]}`);
    }
  }

  return result;
}

// --------------------------------------------------------------- chunking

/** Splits text into pieces of at most `limit` characters at blank lines. */
function packBlocks(text: string, limit: number): string[] {
  const blocks = text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);
  const pieces: string[] = [];
  let current = '';

  const add = (part: string, separator: string) => {
    if (current && current.length + part.length + separator.length > limit) {
      pieces.push(current);
      current = '';
    }
    current = current ? `${current}${separator}${part}` : part;
  };

  for (const block of blocks) {
    if (block.length > limit) {
      // A single huge block is split at line breaks.
      for (const line of block.split('\n')) add(line, '\n');
    } else {
      add(block, '\n\n');
    }
  }

  if (current) pieces.push(current);
  return pieces;
}

/** A "Chuyên mục …" line: the header of a wiki category. */
const CATEGORY_LINE = /^Chuyên mục /;

/**
 * Article titles listed in the wiki's table of contents ("Mục lục": a group
 * line followed by article titles, groups separated by blank lines). The
 * table ends at the first "Chuyên mục …" header (or, without one, where a
 * title appears again).
 */
export function wikiTableOfContents(content: string): {
  titles: { title: string; group: string }[];
  start: number;
  end: number;
} {
  const lines = content.split('\n');
  const start = lines.findIndex((line) => line.trim() === 'Mục lục');
  const titles: { title: string; group: string }[] = [];

  if (start < 0) return { titles, start: -1, end: 0 };

  let group = '';
  let i = start + 1;

  for (; i < lines.length; i++) {
    const line = lines[i]!.trim();

    if (!line) {
      group = '';
      continue;
    }

    if (CATEGORY_LINE.test(line) || titles.some((t) => t.title === line)) break;

    if (!group) {
      group = line;
    } else {
      titles.push({ title: line, group });
    }
  }

  return { titles, start, end: i };
}

/** The article starts at a line that is its title, or its title + ". …". */
function startsArticle(line: string, title: string): boolean {
  const text = line.trim();
  return (
    text === title ||
    text.startsWith(`${title}. `) ||
    text.startsWith(`${title}: `)
  );
}

/**
 * Wiki chunks: each article (found from the table of contents) and each
 * "Chuyên mục …" category header with its text, long ones split into
 * several pieces. Titles are "Group › Article".
 */
export function chunkWiki(section: KnowledgeSection): KnowledgeChunk[] {
  const lines = section.content.split('\n');
  const toc = wikiTableOfContents(section.content);
  const boundaries: { line: number; title: string }[] = [];
  let from = toc.end;

  for (const entry of toc.titles) {
    const at = lines.findIndex(
      (line, index) => index >= from && startsArticle(line, entry.title),
    );

    if (at >= 0) {
      boundaries.push({ line: at, title: `${entry.group} › ${entry.title}` });
      from = at + 1;
    }
  }

  lines.forEach((line, index) => {
    if (index >= toc.end && CATEGORY_LINE.test(line.trim())) {
      boundaries.push({ line: index, title: line.trim() });
    }
  });
  boundaries.sort((a, b) => a.line - b.line);

  const chunks: KnowledgeChunk[] = [];
  const push = (title: string, text: string) => {
    packBlocks(text, WIKI_CHUNK_CHARS).forEach((piece, index) => {
      chunks.push({
        id: `${section.id}:${chunks.length}`,
        sectionId: section.id,
        sectionTitle: section.title,
        title: index === 0 ? title : `${title} (tiếp)`,
        text: piece,
        core: false,
      });
    });
  };

  if (boundaries.length === 0) {
    push(section.title, section.content);
    return chunks;
  }

  // Text before the table of contents (or before the first article).
  const introEnd = toc.start >= 0 ? toc.start : boundaries[0]!.line;
  const intro = lines.slice(0, introEnd).join('\n');
  if (intro.trim()) push(section.title, intro);

  boundaries.forEach((boundary, index) => {
    const end = boundaries[index + 1]?.line ?? lines.length;
    push(boundary.title, lines.slice(boundary.line, end).join('\n'));
  });

  return chunks;
}

/**
 * Generated game sections are Markdown. Everything before the first "###"
 * (or before the "## Nhóm …" / "## Chế độ …" screen groups) is the overview
 * and always sent; after that every "###" block (a screen, a quest type) and
 * every "####" block (a quest chapter) is one chunk.
 */
export function chunkMarkdown(section: KnowledgeSection): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];
  let group = '';
  let parent = '';
  let title = section.title;
  let core = true;
  let buffer: string[] = [];

  const flush = () => {
    const text = buffer.join('\n').trim();

    if (text) {
      chunks.push({
        id: `${section.id}:${chunks.length}`,
        sectionId: section.id,
        sectionTitle: section.title,
        title,
        text,
        core,
      });
    }

    buffer = [];
  };

  for (const line of section.content.split('\n')) {
    const match = /^(#{2,4})\s+(.*)$/.exec(line);

    if (match) {
      const level = match[1]!.length;
      const heading = match[2]!.trim();

      if (level === 2) {
        if (core && !/^(Nhóm|Chế độ)\s/.test(heading)) {
          buffer.push(line); // still part of the overview
          continue;
        }

        flush();
        core = false;
        group = heading;
        parent = '';
        title = heading;
        continue; // the group name lives on in the chunk titles
      }

      flush();
      core = false;
      if (level === 3) parent = heading;
      title = [group, level === 4 ? parent : '', heading]
        .filter(Boolean)
        .join(' › ');
    }

    buffer.push(line);
  }

  flush();
  return chunks;
}

export function chunkSections(
  sections: readonly KnowledgeSection[],
): KnowledgeChunk[] {
  return sections.flatMap((section) =>
    section.origin === 'wiki' ? chunkWiki(section) : chunkMarkdown(section),
  );
}

// ---------------------------------------------------------------- ranking

interface IndexedChunk {
  chunk: KnowledgeChunk;
  termFrequency: Map<string, number>;
  length: number;
}

export class KnowledgeIndex {
  readonly chunks: readonly KnowledgeChunk[];
  readonly totalCharacters: number;
  private readonly indexed: IndexedChunk[];
  private readonly documentFrequency = new Map<string, number>();
  private readonly averageLength: number;

  constructor(sections: readonly KnowledgeSection[]) {
    this.chunks = chunkSections(sections);
    this.totalCharacters = this.chunks.reduce(
      (sum, chunk) => sum + chunk.text.length,
      0,
    );
    this.indexed = this.chunks.map((chunk) => {
      const termFrequency = new Map<string, number>();
      const titleTerms = features(chunk.title);
      const terms = [
        ...Array.from({ length: TITLE_WEIGHT }, () => titleTerms).flat(),
        ...features(chunk.text),
      ];

      for (const term of terms) {
        termFrequency.set(term, (termFrequency.get(term) ?? 0) + 1);
      }

      for (const term of termFrequency.keys()) {
        this.documentFrequency.set(
          term,
          (this.documentFrequency.get(term) ?? 0) + 1,
        );
      }

      return { chunk, termFrequency, length: terms.length };
    });
    this.averageLength =
      this.indexed.reduce((sum, item) => sum + item.length, 0) /
      Math.max(1, this.indexed.length);
  }

  /** BM25 score of every non-core chunk for `question`, best first. */
  rank(question: string): ScoredChunk[] {
    const terms = [...new Set(queryFeatures(question))];
    // Screen names are compared with accents when the question has them
    // ("đấu trường" must not match "Thư"), without when it has none.
    const accented = !isUnaccented(question);
    const questionWords = ` ${syllables(accented ? question : stripDiacritics(question)).join(' ')} `;
    const total = this.indexed.length;
    const scored: ScoredChunk[] = [];

    for (const item of this.indexed) {
      if (item.chunk.core) continue;
      let score = 0;

      for (const term of terms) {
        const tf = item.termFrequency.get(term);
        if (!tf) continue;
        const df = this.documentFrequency.get(term) ?? 0;
        const idf = Math.log(1 + (total - df + 0.5) / (df + 0.5));
        const norm =
          BM25_K1 * (1 - BM25_B + (BM25_B * item.length) / this.averageLength);
        score += (idf * tf * (BM25_K1 + 1)) / (tf + norm);
      }

      // The question names this chunk's screen or topic ("cầu ma",
      // "động phủ", "boss chung"): a strong signal BM25 alone underrates.
      const leaf = titleLeaf(item.chunk.title, accented);
      if (score > 0 && leaf && questionWords.includes(` ${leaf} `)) {
        score = score * 2 + 5;
      }

      if (score > 0) scored.push({ chunk: item.chunk, score });
    }

    return scored.sort((a, b) => b.score - a.score);
  }

  /** Core chunks plus the most relevant ones, within `budget` characters. */
  select(question: string, budget = CONTEXT_BUDGET_CHARS): ContextSelection {
    const chosen: ScoredChunk[] = this.chunks
      .filter((chunk) => chunk.core)
      .map((chunk) => ({ chunk, score: 0 }));
    const coreCount = chosen.length;
    let characters = chosen.reduce((sum, c) => sum + c.chunk.text.length, 0);
    const ranked = this.rank(question);
    const best = ranked[0]?.score ?? 0;

    for (const candidate of ranked) {
      const picked = chosen.length - coreCount;
      if (picked >= MIN_CHUNKS && candidate.score < best * MIN_RELATIVE_SCORE) {
        break;
      }
      const size = candidate.chunk.text.length;
      if (characters + size > budget) continue;
      chosen.push(candidate);
      characters += size;
    }

    return {
      chunks: chosen,
      characters,
      totalCharacters: this.totalCharacters,
    };
  }
}

/**
 * Last part of a chunk title, lower-case, e.g. "Nhóm Tu hành › Động phủ" →
 * "động phủ" (or "dong phu" when `accented` is false). Long titles (whole
 * wiki article names) never match a question verbatim, so only names of up
 * to four syllables count.
 */
function titleLeaf(title: string, accented: boolean): string | null {
  const leaf = title
    .split('›')
    .at(-1)!
    .replace(/\(.*?\)/g, ' ');
  const words = syllables(accented ? leaf : stripDiacritics(leaf));
  return words.length > 0 && words.length <= 4 ? words.join(' ') : null;
}

function chunkOrder(id: string): number {
  return Number(id.slice(id.lastIndexOf(':') + 1));
}

/** The selected chunks as prompt text, grouped by source in source order. */
export function renderContext(selection: ContextSelection): string {
  const bySection = new Map<string, ScoredChunk[]>();

  for (const item of selection.chunks) {
    const list = bySection.get(item.chunk.sectionTitle) ?? [];
    list.push(item);
    bySection.set(item.chunk.sectionTitle, list);
  }

  return [...bySection.entries()]
    .map(([title, items]) => {
      // Original order inside a source, so the text reads naturally.
      const ordered = [...items].sort(
        (a, b) => chunkOrder(a.chunk.id) - chunkOrder(b.chunk.id),
      );
      const body = ordered
        .map((item) =>
          // Wiki chunks have no heading of their own; game chunks do.
          item.chunk.sectionId === 'wiki'
            ? `## ${item.chunk.title}\n${item.chunk.text}`
            : item.chunk.text,
        )
        .join('\n\n');
      return `# ${title}\n\n${body}`;
    })
    .join('\n\n');
}
