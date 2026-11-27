import {
  highlightParts,
  indexContent,
  isPlainHeading,
  parseBlocks,
  parseInline,
  searchIndexed,
  splitLabel,
} from './markdown-lite';

describe('parseBlocks', () => {
  it('reads the game sections: headings, bullet and numbered lists', () => {
    const blocks = parseBlocks(
      [
        '## Nhóm Tu hành',
        '',
        '### Động phủ',
        'Cơ ngơi riêng.',
        '- Mở khóa: Trúc Cơ Sơ kỳ',
        '- Mẹo: nâng Tụ Linh Trận trước',
        '1. Bước ra khỏi thôn',
        '2. Thanh kiếm đầu tiên',
      ].join('\n'),
    );

    expect(blocks).toEqual([
      { kind: 'heading', level: 2, text: 'Nhóm Tu hành' },
      { kind: 'heading', level: 3, text: 'Động phủ' },
      { kind: 'paragraph', lines: ['Cơ ngơi riêng.'] },
      {
        kind: 'list',
        ordered: false,
        items: [
          { marker: '•', text: 'Mở khóa: Trúc Cơ Sơ kỳ', depth: 0 },
          { marker: '•', text: 'Mẹo: nâng Tụ Linh Trận trước', depth: 0 },
        ],
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          { marker: '1.', text: 'Bước ra khỏi thôn', depth: 0 },
          { marker: '2.', text: 'Thanh kiếm đầu tiên', depth: 0 },
        ],
      },
    ]);
  });

  it('reads Gemini answers: "*" bullets and rules', () => {
    expect(parseBlocks('* **Một**\n---\nXong.')).toEqual([
      {
        kind: 'list',
        ordered: false,
        items: [{ marker: '•', text: '**Một**', depth: 0 }],
      },
      { kind: 'rule' },
      { kind: 'paragraph', lines: ['Xong.'] },
    ]);
  });

  it('turns short stand-alone wiki lines into headings only when asked', () => {
    const text =
      'Hướng dẫn tân thủ\n\nBắt đầu ở Tiên Nghịch.\n\nLần đầu vào game\n\nNội dung.';

    expect(
      parseBlocks(text, { plainHeadings: true }).map((b) => b.kind),
    ).toEqual(['heading', 'paragraph', 'heading', 'paragraph']);
    expect(parseBlocks(text).every((b) => b.kind === 'paragraph')).toBe(true);
  });

  it('never treats sentences or "key: value" lines as headings', () => {
    expect(isPlainHeading('Bắt đầu ở Tiên Nghịch.')).toBe(false);
    expect(isPlainHeading('Hệ thống: Cảnh giới')).toBe(false);
    expect(isPlainHeading('Lần đầu vào game')).toBe(true);
  });
});

describe('inline text', () => {
  it('finds bold, italic and code without touching "*" inside words', () => {
    expect(
      parseInline('Đạt **Trúc Cơ** rồi *đột phá* bằng `/question` 2*3'),
    ).toEqual([
      { kind: 'text', text: 'Đạt ' },
      { kind: 'bold', text: 'Trúc Cơ' },
      { kind: 'text', text: ' rồi ' },
      { kind: 'italic', text: 'đột phá' },
      { kind: 'text', text: ' bằng ' },
      { kind: 'code', text: '/question' },
      { kind: 'text', text: ' 2*3' },
    ]);
  });

  it('splits a short label before ": "', () => {
    expect(splitLabel('Mở khóa: từ Trúc Cơ')).toEqual({
      label: 'Mở khóa',
      rest: 'từ Trúc Cơ',
    });
    expect(splitLabel('Không có nhãn ở đây')).toBeNull();
    expect(splitLabel('**Đậm**: không phải nhãn')).toBeNull();
    expect(splitLabel('Vấn Đạo: Nghịch Mệnh là game gì?')).toBeNull();
    expect(splitLabel('Bạn muốn làm gì?: Biết mình đang ở đâu')).toEqual({
      label: 'Bạn muốn làm gì?',
      rest: 'Biết mình đang ở đâu',
    });
  });

  it('highlights matches ignoring case and diacritics', () => {
    expect(highlightParts('Mở Động phủ ở Trúc Cơ', 'dong phu')).toEqual([
      { text: 'Mở ', match: false },
      { text: 'Động phủ', match: true },
      { text: ' ở Trúc Cơ', match: false },
    ]);
    expect(highlightParts('abc', 'x')).toEqual([{ text: 'abc', match: false }]);
  });
});

describe('search', () => {
  const content = [
    '## Nhóm Tu hành',
    '',
    '### Động phủ',
    '- Mở khóa: Trúc Cơ Sơ kỳ',
    '',
    '### Linh thú',
    '- Mở khóa: Trúc Cơ Sơ kỳ',
    '',
    'Lời ngoài lề',
    '',
    'Trúc Cơ cũng có ở đây.',
  ].join('\n');

  it('groups matching lines under their headings', () => {
    const { groups, total } = searchIndexed(
      indexContent(content, { plainHeadings: true }),
      'truc co',
    );

    expect(total).toBe(3);
    expect(groups).toEqual([
      { path: 'Nhóm Tu hành › Động phủ', lines: ['- Mở khóa: Trúc Cơ Sơ kỳ'] },
      { path: 'Nhóm Tu hành › Linh thú', lines: ['- Mở khóa: Trúc Cơ Sơ kỳ'] },
      { path: 'Lời ngoài lề', lines: ['Trúc Cơ cũng có ở đây.'] },
    ]);
  });

  it('finds headings too, filed under their parent', () => {
    const { groups } = searchIndexed(indexContent(content), 'linh thu');

    expect(groups).toEqual([{ path: 'Nhóm Tu hành', lines: ['### Linh thú'] }]);
  });

  it('caps the number of lines returned', () => {
    const many = Array.from({ length: 50 }, () => 'trúc cơ').join('\n');
    const result = searchIndexed(indexContent(many), 'truc co', 10);

    expect(result.total).toBe(50);
    expect(result.groups[0]?.lines).toHaveLength(10);
  });

  it('never leaves gaps in heading paths', () => {
    const { groups } = searchIndexed(
      indexContent(['## A', '#### C', 'trúc cơ'].join('\n')),
      'truc co',
    );

    expect(groups[0]?.path).toBe('A › C');
  });
});

describe('more Markdown', () => {
  it('reads quotes, nested items, and strips closing hashes', () => {
    expect(
      parseBlocks(
        [
          '## Tiêu đề ##',
          '> Lưu ý: mặc định',
          '1. Một',
          '  * con',
          '2. Hai',
        ].join('\n'),
      ),
    ).toEqual([
      { kind: 'heading', level: 2, text: 'Tiêu đề' },
      { kind: 'quote', lines: ['Lưu ý: mặc định'] },
      {
        kind: 'list',
        ordered: true,
        items: [
          { marker: '1.', text: 'Một', depth: 0 },
          { marker: '•', text: 'con', depth: 1 },
          { marker: '2.', text: 'Hai', depth: 0 },
        ],
      },
    ]);
  });

  it('keeps unmatched markers as text', () => {
    expect(parseInline('__init__ và **a*b** và 2*3')).toEqual([
      { kind: 'text', text: '__init__ và **a*b** và 2*3' },
    ]);
    expect(parseInline('***x***')).not.toContainEqual({
      kind: 'text',
      text: '*',
    });
  });

  it('does not bold sentence lead-ins or bylines', () => {
    expect(splitLabel('Để mở Động phủ, bạn cần: đạt Trúc Cơ')).toBeNull();
    expect(isPlainHeading('Cẩm nang · Wiki người chơi V3')).toBe(false);
  });
});
