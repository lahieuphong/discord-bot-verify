import { Loader2Icon, SendIcon } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { api, ApiError } from '@/lib/api';
import { formatNumber } from '@/lib/gemini';
import type { AssistantTestAnswer } from '@/lib/types';

const EXAMPLES = [
  'Nhiệm vụ hằng ngày có những việc gì, nhận thưởng tối đa mấy lần?',
  'Làm sao để mở Động phủ và nó dùng để làm gì?',
  'Nhiệm vụ chính số 11 yêu cầu gì?',
];

/** Ask Gemini exactly like a member would with /question. */
export function TryCard({
  maxLength,
  disabled,
  onError,
}: {
  maxLength: number;
  disabled: boolean;
  onError: (error: unknown) => void;
}) {
  const [question, setQuestion] = useState('');
  const [asking, setAsking] = useState(false);
  const [result, setResult] = useState<AssistantTestAnswer | null>(null);
  const [askError, setAskError] = useState<string | null>(null);

  async function ask(event: FormEvent) {
    event.preventDefault();
    setAsking(true);
    setAskError(null);
    setResult(null);

    try {
      setResult(await api.askAssistant(question));
    } catch (error) {
      if (error instanceof ApiError && error.status !== 401) {
        setAskError(error.message);
      } else {
        onError(error);
      }
    } finally {
      setAsking(false);
    }
  }

  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle className="text-base">Hỏi thử</CardTitle>
        <CardDescription>
          Gửi câu hỏi giống hệt lệnh /question để xem bot sẽ trả lời gì. Mỗi lần
          hỏi thử tốn một lượt Gemini như câu hỏi thật (ghi ở tab Gemini API) và
          không đăng lên Discord.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" onSubmit={(e) => void ask(e)}>
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            maxLength={maxLength}
            rows={3}
            placeholder="Ví dụ: Làm sao để mở Động phủ?"
            aria-label="Câu hỏi thử"
            className="w-full resize-y rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          />
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((example) => (
              <button
                key={example}
                type="button"
                className="cursor-pointer rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setQuestion(example)}
              >
                {example}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground tabular-nums">
              {formatNumber(question.length)}/{formatNumber(maxLength)} ký tự
            </span>
            <Button
              type="submit"
              disabled={disabled || asking || question.trim().length === 0}
            >
              {asking ? <Loader2Icon className="animate-spin" /> : <SendIcon />}
              {asking ? 'Đang hỏi Gemini…' : 'Gửi câu hỏi'}
            </Button>
          </div>
        </form>

        {askError && (
          <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {askError}
          </p>
        )}

        {result && (
          <div className="mt-4 flex flex-col gap-2">
            <div className="rounded-xl border bg-muted/30 p-4 text-sm leading-relaxed whitespace-pre-wrap">
              {result.answer}
            </div>
            <p className="text-xs text-muted-foreground tabular-nums">
              {(result.durationMs / 1000).toFixed(1)} giây ·{' '}
              {formatNumber(result.usage.inputTokens ?? 0)} token vào ·{' '}
              {formatNumber(result.usage.outputTokens ?? 0)} token ra · Discord
              sẽ đăng thành {result.discordMessages} tin nhắn · {result.model}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
