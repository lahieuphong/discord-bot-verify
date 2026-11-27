import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { MAX_QUESTION_LENGTH } from '../gemini/knowledge/knowledge.js';
import { GeminiService, type GeminiAnswer } from '../gemini/gemini.service.js';

@Controller()
export class QuestionController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('question')
  /** The public answer: which knowledge was used stays on the admin page. */
  async question(
    @Body() body: unknown,
  ): Promise<Omit<GeminiAnswer, 'context'>> {
    const question = this.readQuestion(body);
    const { answer, model, usage } = await this.geminiService.ask(question, {
      source: 'http',
    });
    return { answer, model, usage };
  }

  private readQuestion(body: unknown): string {
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
      throw new BadRequestException('question must be a non-empty string');
    }

    const value = (body as Record<string, unknown>).question;

    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new BadRequestException('question must be a non-empty string');
    }

    const question = value.trim();

    if (question.length > MAX_QUESTION_LENGTH) {
      throw new BadRequestException(
        `question must be at most ${MAX_QUESTION_LENGTH} characters`,
      );
    }

    return question;
  }
}
