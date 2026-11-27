import { describe, expect, it } from 'vitest';
import { INSTRUCTION_PROMPT } from '../../config/utils/const.js';
import {
  ASSISTANT_GUIDANCE,
  ASSISTANT_PERSONA,
  buildSystemInstruction,
  KNOWLEDGE_SECTIONS,
  SYSTEM_INSTRUCTION,
  WIKI_SECTION,
} from './knowledge.js';

describe('assistant knowledge', () => {
  it('splits the old prompt into the role sentence and the wiki', () => {
    expect(ASSISTANT_PERSONA).toMatch(/^Bạn là 1 bot chăm sóc khách hàng/);
    expect(WIKI_SECTION.content).not.toContain(ASSISTANT_PERSONA);
    // Nothing of the old prompt is lost.
    expect(
      `${ASSISTANT_PERSONA}\n${WIKI_SECTION.content}`.replace(/\s+/g, ' '),
    ).toBe(INSTRUCTION_PROMPT.trim().replace(/\s+/g, ' '));
  });

  it('includes the game knowledge generated from the game source', () => {
    const ids = KNOWLEDGE_SECTIONS.map((section) => section.id);

    expect(ids).toEqual(['wiki', 'game-features', 'game-quests']);
    const quests = KNOWLEDGE_SECTIONS.find((s) => s.id === 'game-quests');
    expect(quests?.content).toContain('Nhiệm vụ chính');
    expect(quests?.content).toContain('Nhiệm vụ hằng ngày');
  });

  it('builds the system instruction from role, rules and every section', () => {
    expect(SYSTEM_INSTRUCTION.startsWith(ASSISTANT_PERSONA)).toBe(true);
    expect(SYSTEM_INSTRUCTION).toContain(ASSISTANT_GUIDANCE);

    for (const section of KNOWLEDGE_SECTIONS) {
      expect(SYSTEM_INSTRUCTION).toContain(`# ${section.title}`);
    }

    expect(
      buildSystemInstruction([
        { id: 'x', title: 'T', summary: '', content: 'C', origin: 'game' },
      ]),
    ).toBe(`${ASSISTANT_PERSONA}\n\n${ASSISTANT_GUIDANCE}\n\n# T\n\nC`);
  });
});
