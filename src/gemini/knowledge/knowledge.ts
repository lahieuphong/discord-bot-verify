import { INSTRUCTION_PROMPT } from '../../config/utils/const.js';
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

/** Longest answer Gemini may write for /question. */
export const MAX_OUTPUT_TOKENS = 1_200;
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
  'Trả lời bằng tiếng Việt, dùng Markdown của Discord (đậm, danh sách, tiêu đề ngắn); không dùng bảng Markdown và HTML.',
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

/** The system instruction sent to Gemini with every /question. */
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
