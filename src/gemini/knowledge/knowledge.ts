import { INSTRUCTION_PROMPT } from '../../config/utils/const.js';
import {
  KnowledgeIndex,
  renderContext,
  type ContextSelection,
} from './retrieval.js';
import {
  GAME_KNOWLEDGE_GENERATED_AT,
  GAME_KNOWLEDGE_SECTIONS,
} from './game-knowledge.generated.js';

/** One block of text the /question assistant is given with every question. */
export interface KnowledgeSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  /** `wiki`: the hand-written wiki; `game`: generated from the game source. */
  origin: 'wiki' | 'game';
}

/**
 * Output budget of one /question. Thinking models spend part of it on hidden
 * reasoning (~600–800 tokens measured), so 1,200 cut answers off mid-sentence.
 */
export const MAX_OUTPUT_TOKENS = 3_000;
/** Added to an answer that still hit the output budget. */
export const TRUNCATED_NOTE =
  '_(Câu trả lời bị cắt vì quá dài, hãy hỏi cụ thể hơn.)_';
/** Longest question a member may send (Discord option and HTTP body). */
export const MAX_QUESTION_LENGTH = 4_000;

// INSTRUCTION_PROMPT starts with the role sentence, followed by the wiki.
const [personaLine = '', ...wikiLines] = INSTRUCTION_PROMPT.trim().split('\n');

/** Who the assistant is and how it answers. */
export const ASSISTANT_PERSONA = personaLine.trim();

/** Rules added on top of the persona: which source to trust, answer format. */
export const ASSISTANT_GUIDANCE = [
  'Khi người chơi hỏi về tính năng, màn hình hoặc nhiệm vụ trong game, dựa vào phần "Tính năng trong game" và "Nhiệm vụ trong game": hai phần này được trích trực tiếp từ dữ liệu và mã nguồn game nên chính xác hơn wiki khi hai bên khác nhau.',
  'Giải thích theo từng bước người chơi làm được (vào màn hình nào, bấm gì, cần điều kiện gì, được thưởng gì).',
  'Các con số (giới hạn lượt, cấp mở khóa, giá, giờ) là giá trị mặc định của game; quản trị game có thể chỉnh trên máy chủ, nên khi nêu số hãy nói đó là mặc định và nhắc người chơi xem con số đang hiện trong game.',
  'Nếu tài liệu không có thông tin, nói rõ là chưa có thông tin về điều đó thay vì đoán.',
  'Trả lời bằng tiếng Việt, gọn (thường dưới 300 từ, vừa một hai tin nhắn Discord), dùng Markdown của Discord (đậm, danh sách, tiêu đề ngắn); không dùng bảng Markdown và HTML.',
].join(' ');

export const WIKI_SECTION: KnowledgeSection = {
  id: 'wiki',
  title: 'Wiki dự án Tu Tiên',
  summary:
    'Wiki có sẵn từ trước: cẩm nang, tân thủ, sáu thế giới, cảnh giới, công pháp, bảo vật và hoạt động.',
  content: wikiLines.join('\n').trim(),
  origin: 'wiki',
};

export const KNOWLEDGE_SECTIONS: readonly KnowledgeSection[] = [
  WIKI_SECTION,
  ...GAME_KNOWLEDGE_SECTIONS,
];

export { GAME_KNOWLEDGE_GENERATED_AT };

/** The system instruction with every knowledge source in full ("full" mode). */
export function buildSystemInstruction(
  sections: readonly KnowledgeSection[] = KNOWLEDGE_SECTIONS,
): string {
  return [
    ASSISTANT_PERSONA,
    ASSISTANT_GUIDANCE,
    ...sections.map((section) => `# ${section.title}\n\n${section.content}`),
  ].join('\n\n');
}

export const SYSTEM_INSTRUCTION = buildSystemInstruction();

/**
 * How much knowledge a /question sends: `retrieval` (default) only the
 * passages relevant to the question, `full` every source (~140k tokens).
 */
export type KnowledgeMode = 'retrieval' | 'full';

/** Added in retrieval mode: the model only sees selected passages. */
export const RETRIEVAL_NOTE =
  'Phần tài liệu bên dưới chỉ gồm tổng quan của game và các đoạn liên quan nhất được chọn tự động cho câu hỏi này, không phải toàn bộ tài liệu; nếu các đoạn này không trả lời được câu hỏi, nói rõ là chưa có thông tin thay vì đoán.';

export const KNOWLEDGE_INDEX = new KnowledgeIndex(KNOWLEDGE_SECTIONS);

export interface QuestionInstruction {
  mode: KnowledgeMode;
  instruction: string;
  /** Passages sent (retrieval mode); null in full mode. */
  selection: ContextSelection | null;
}

/** The system instruction for one question. */
export function instructionFor(
  question: string,
  mode: KnowledgeMode,
): QuestionInstruction {
  if (mode === 'full') {
    return { mode, instruction: SYSTEM_INSTRUCTION, selection: null };
  }

  const selection = KNOWLEDGE_INDEX.select(question);

  return {
    mode,
    selection,
    instruction: [
      ASSISTANT_PERSONA,
      ASSISTANT_GUIDANCE,
      RETRIEVAL_NOTE,
      renderContext(selection),
    ].join('\n\n'),
  };
}
