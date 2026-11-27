import { describe, expect, it } from 'vitest';
import {
  instructionFor,
  WIKI_SECTION,
  KNOWLEDGE_INDEX,
  RETRIEVAL_NOTE,
  SYSTEM_INSTRUCTION,
  type KnowledgeSection,
} from './knowledge.js';
import {
  chunkMarkdown,
  chunkWiki,
  CONTEXT_BUDGET_CHARS,
  features,
  KnowledgeIndex,
  queryFeatures,
  renderContext,
  wikiTableOfContents,
} from './retrieval.js';

const wiki: KnowledgeSection = {
  id: 'wiki',
  title: 'Wiki',
  summary: '',
  origin: 'wiki',
  content: [
    'Lời mở đầu.',
    '',
    'Mục lục',
    '',
    'Cẩm nang',
    'Hướng dẫn tân thủ',
    'Động phủ',
    '',
    'Hướng dẫn tân thủ',
    'Bắt đầu bằng bế quan.',
    '',
    'Động phủ',
    'Động phủ mở ở Trúc Cơ.',
    '',
    `${'Linh điền trồng dược liệu. '.repeat(60)}`,
    '',
    `${'Tụ Linh Trận tăng tốc tu vi. '.repeat(60)}`,
  ].join('\n'),
};

const game: KnowledgeSection = {
  id: 'game',
  title: 'Tính năng',
  summary: '',
  origin: 'game',
  content: [
    '## Tính năng trong game',
    'Tổng quan menu.',
    '',
    '## Mốc mở khóa',
    '- Chợ: từ Ngưng Khí tầng 8',
    '',
    '## Nhóm Tu hành',
    '',
    '### Động phủ',
    'Nâng phòng để tăng tu vi.',
    '',
    '### Linh thú',
    'Thu phục linh thú.',
    '',
    '## Nhóm Cộng đồng',
    '',
    '### Chợ',
    'Mua bán bằng linh thạch, thuế 5%.',
  ].join('\n'),
};

describe('features', () => {
  it('uses syllables and pairs, with and without diacritics', () => {
    const terms = features('Động phủ');

    expect(terms).toEqual(
      expect.arrayContaining(['u:động', 'n:dong', 'b:động phủ', 'm:dong phu']),
    );
  });

  it('drops function words, and pairs made only of them', () => {
    const terms = features('làm sao mở');

    expect(terms).not.toContain('u:làm');
    expect(terms).not.toContain('b:làm sao');
    expect(terms).toContain('b:sao mở');
  });

  it('matches unaccented questions on unaccented forms only', () => {
    expect(
      queryFeatures('mo dong phu').every(
        (term) => term.startsWith('n:') || term.startsWith('m:'),
      ),
    ).toBe(true);
    expect(queryFeatures('mở động phủ')).toContain('u:động');
  });
});

describe('chunking', () => {
  it('finds titles followed by text and keeps category headers', () => {
    const chunks = chunkWiki({
      ...wiki,
      content: [
        'Mục lục',
        '',
        'Tiên Nghịch',
        'Mười sáu chương',
        'Động phủ',
        '',
        'Chuyên mục Tiên Nghịch',
        'Mô tả chuyên mục.',
        '',
        'Mười sáu chương. Tuyến V2 bắt đầu ở Kết Đan.',
        'Chương 1.',
        '',
        'Động phủ',
        'Nâng phòng.',
        '',
        'Chuyên mục Nhật ký',
        'Bản cập nhật 1.',
      ].join('\n'),
    });

    expect(chunks.map((c) => c.title)).toEqual([
      'Chuyên mục Tiên Nghịch',
      'Tiên Nghịch › Mười sáu chương',
      'Tiên Nghịch › Động phủ',
      'Chuyên mục Nhật ký',
    ]);
    expect(chunks[0]?.text).toBe('Chuyên mục Tiên Nghịch\nMô tả chuyên mục.');
    expect(chunks[3]?.text).toContain('Bản cập nhật 1.');
  });

  it('cuts the wiki into articles from its table of contents', () => {
    const chunks = chunkWiki(wiki);

    expect(chunks[0]?.title).toBe('Wiki');
    expect(chunks[1]).toMatchObject({
      title: 'Cẩm nang › Hướng dẫn tân thủ',
      text: 'Hướng dẫn tân thủ\nBắt đầu bằng bế quan.',
    });
    // The long "Động phủ" article is split into several pieces.
    const cave = chunks.filter((c) =>
      c.title.startsWith('Cẩm nang › Động phủ'),
    );
    expect(cave.length).toBeGreaterThan(1);
    expect(cave[1]?.title).toBe('Cẩm nang › Động phủ (tiếp)');
    expect(chunks.every((c) => c.text.length <= 2_000)).toBe(true);
  });

  it('keeps the overview of a game section as an always-sent chunk', () => {
    const chunks = chunkMarkdown(game);

    expect(chunks.map((c) => [c.title, c.core])).toEqual([
      ['Tính năng', true],
      ['Nhóm Tu hành › Động phủ', false],
      ['Nhóm Tu hành › Linh thú', false],
      ['Nhóm Cộng đồng › Chợ', false],
    ]);
    expect(chunks[0]?.text).toContain('Chợ: từ Ngưng Khí tầng 8');
  });
});

describe('KnowledgeIndex', () => {
  const index = new KnowledgeIndex([wiki, game]);

  it('always sends the overview and adds the relevant passages', () => {
    const selection = index.select('Chợ thu thuế bao nhiêu?');
    const titles = selection.chunks.map((c) => c.chunk.title);

    expect(titles[0]).toBe('Tính năng');
    expect(titles[1]).toBe('Nhóm Cộng đồng › Chợ');
  });

  it('sends only the overview for a greeting', () => {
    const selection = index.select('xin chào');

    expect(selection.chunks.every((c) => c.chunk.core)).toBe(true);
  });

  it('respects the character budget', () => {
    const selection = index.select('động phủ linh điền tụ linh trận', 1_000);

    expect(selection.characters).toBeLessThanOrEqual(1_000);
  });

  it('renders passages grouped by source', () => {
    const text = renderContext(index.select('động phủ'));

    expect(text).toContain('# Tính năng');
    expect(text).toContain('# Wiki');
    expect(text).toContain('## Cẩm nang › Động phủ');
  });
});

describe('real knowledge', () => {
  it('finds every article of the wiki table of contents', () => {
    const titles = new Set(chunkWiki(WIKI_SECTION).map((c) => c.title));
    const missing = wikiTableOfContents(WIKI_SECTION.content).titles.filter(
      (t) => !titles.has(`${t.group} › ${t.title}`),
    );

    expect(missing).toEqual([]);
  });

  it('keeps every wiki line after the table of contents', () => {
    const toc = wikiTableOfContents(WIKI_SECTION.content);
    const chunkText = chunkWiki(WIKI_SECTION)
      .map((c) => c.text)
      .join('\n');
    const lost = WIKI_SECTION.content
      .split('\n')
      .slice(toc.end)
      .map((line) => line.trim())
      .filter((line) => line && !chunkText.includes(line));

    expect(lost).toEqual([]);
  });

  it('does not boost a screen whose name only matches without accents', () => {
    const titles = KNOWLEDGE_INDEX.select('đối thủ ở đấu trường')
      .chunks.filter((c) => !c.chunk.core)
      .slice(0, 3)
      .map((c) => c.chunk.title);

    expect(titles).not.toContain('Nhóm Cộng đồng › Thư');
    expect(titles[0]).toMatch(/Đấu trường/);
  });

  it('reads text typed with combining accents', () => {
    expect(
      KNOWLEDGE_INDEX.select(
        'Làm sao để mở Động phủ?'.normalize('NFD'),
      ).chunks.find((c) => !c.chunk.core)?.chunk.title,
    ).toMatch(/Động phủ$/);
  });

  it('sends only the overview for a question made of filler words', () => {
    const selection = KNOWLEDGE_INDEX.select('là gì vậy');

    expect(selection.chunks.every((c) => c.chunk.core)).toBe(true);
  });

  const top = (question: string) =>
    KNOWLEDGE_INDEX.select(question).chunks.find((c) => !c.chunk.core)?.chunk
      .title;

  it.each([
    ['Nhiệm vụ hằng ngày có những việc gì?', /^Nhiệm vụ hằng ngày/],
    ['lam sao mo dong phu', /Động phủ$/],
    ['Cầu Ma là gì, vào bằng cách nào?', /Cầu Ma$/],
    ['Kinh mạch có bao nhiêu mạch?', /Kinh mạch$/],
    ['chợ bán đồ thuế bao nhiêu', /Chợ$/],
    ['ma tu la gi', /Ma tu$/],
    ['Cốt truyện mười sáu chương chính tuyến', /Mười sáu chương chính tuyến/],
    ['Vòng quay pháp bảo siêu hiếm hoạt động thế nào?', /Vòng quay pháp bảo/],
  ])('finds the right passage for %j', (question, expected) => {
    expect(top(question)).toMatch(expected);
  });

  it('sends a small fraction of the knowledge per question', () => {
    const prepared = instructionFor('Làm sao để mở Động phủ?', 'retrieval');

    expect(prepared.selection?.characters).toBeLessThanOrEqual(
      CONTEXT_BUDGET_CHARS,
    );
    expect(prepared.instruction.length).toBeLessThan(
      SYSTEM_INSTRUCTION.length / 5,
    );
    expect(prepared.instruction).toContain(RETRIEVAL_NOTE);
  });

  it('can still send everything in full mode', () => {
    expect(instructionFor('x', 'full')).toEqual({
      mode: 'full',
      instruction: SYSTEM_INSTRUCTION,
      selection: null,
    });
  });
});
