import { EyeIcon, Loader2Icon, SendIcon } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { MarkdownView } from '@/components/assistant/markdown-view';
import { Badge } from '@/components/ui/badge';
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
import type { AnswerContext, AssistantTestAnswer } from '@/lib/types';

const EXAMPLES = [
  'Nhiệm vụ hằng ngày có những việc gì, nhận thưởng tối đa mấy lần?',
  'Làm sao để mở Động phủ và nó dùng để làm gì?',
  'lam sao vao Cau Ma',
];

/** Passages listed before "Xem cả … đoạn còn lại". */
const PASSAGES_SHOWN = 10;

/** The knowledge passages a question is (or would be) sent with. */
function PassageList({ context }: { context: AnswerContext }) {
  const [showAll, setShowAll] = useState(false);

  if (context.mode === 'full') {
    return (
      <p className="text-xs text-muted-foreground">
        Chế độ gửi toàn bộ: kèm mọi nguồn kiến thức (
        {formatNumber(context.characters)} ký tự).
      </p>
    );
  }

  const matched = context.passages.filter((p) => !p.core);
  const shown = showAll ? matched : matched.slice(0, PASSAGES_SHOWN);

  return (
    <details className="rounded-lg border bg-muted/20 px-3 py-2 text-sm" open>
      <summary className="cursor-pointer text-muted-foreground">
        Gửi kèm {formatNumber(context.characters)} ký tự kiến thức:{' '}
        {matched.length === 0
          ? 'chỉ tổng quan game (không có đoạn nào khớp)'
          : `tổng quan game và ${matched.length} đoạn khớp nhất`}
      </summary>
      {matched.length > 0 && (
        <ol className="mt-2 flex flex-col gap-1">
          {shown.map((passage, index) => (
            <li
              key={`${passage.title}-${index}`}
              className="flex items-baseline gap-2 text-xs"
            >
              <span className="w-10 shrink-0 text-right font-medium text-foreground tabular-nums">
                {passage.score.toFixed(1)}
              </span>
              <span className="min-w-0 flex-1 truncate" title={passage.title}>
                {passage.title}
              </span>
              <Badge variant="muted" className="hidden sm:inline-flex">
                {passage.source}
              </Badge>
            </li>
          ))}
        </ol>
      )}
      {matched.length > PASSAGES_SHOWN && (
        <button
          type="button"
          className="mt-2 cursor-pointer text-xs text-sky-700 hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? 'Thu gọn'
            : `Xem cả ${matched.length - PASSAGES_SHOWN} đoạn còn lại`}
        </button>
      )}
    </details>
  );
}

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
  const [busy, setBusy] = useState<'preview' | 'ask' | null>(null);
  const [preview, setPreview] = useState<AnswerContext | null>(null);
  const [result, setResult] = useState<AssistantTestAnswer | null>(null);
  const [askError, setAskError] = useState<string | null>(null);

  async function run(kind: 'preview' | 'ask') {
    setBusy(kind);
    setAskError(null);
    setResult(null);
    setPreview(null);

    try {
      if (kind === 'preview') {
        setPreview(await api.previewAssistant(question));
      } else {
        setResult(await api.askAssistant(question));
      }
    } catch (error) {
      if (error instanceof ApiError && error.status !== 401) {
        setAskError(error.message);
      } else {
        onError(error);
      }
    } finally {
      setBusy(null);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void run('ask');
  }

  const empty = question.trim().length === 0;

  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle className="text-base">Hỏi thử</CardTitle>
        <CardDescription>
          "Xem bot sẽ gửi gì" chỉ chạy bước tìm đoạn kiến thức: miễn phí, không
          gọi Gemini. "Gửi câu hỏi" hỏi Gemini giống hệt lệnh /question, tốn một
          lượt (ghi ở tab Gemini API) và không đăng lên Discord.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" onSubmit={submit}>
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
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground tabular-nums">
              {formatNumber(question.length)}/{formatNumber(maxLength)} ký tự
            </span>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                disabled={busy !== null || empty}
                onClick={() => void run('preview')}
              >
                {busy === 'preview' ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  <EyeIcon />
                )}
                Xem bot sẽ gửi gì
              </Button>
              <Button
                type="submit"
                disabled={disabled || busy !== null || empty}
              >
                {busy === 'ask' ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  <SendIcon />
                )}
                {busy === 'ask' ? 'Đang hỏi Gemini…' : 'Gửi câu hỏi'}
              </Button>
            </div>
          </div>
        </form>

        {askError && (
          <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {askError}
          </p>
        )}

        {preview && (
          <div className="mt-4">
            <PassageList context={preview} />
          </div>
        )}

        {result && (
          <div className="mt-4 flex flex-col gap-2">
            <div className="rounded-xl border bg-muted/30 p-4">
              <MarkdownView text={result.answer} />
            </div>
            <p className="text-xs text-muted-foreground tabular-nums">
              {(result.durationMs / 1000).toFixed(1)} giây ·{' '}
              {formatNumber(result.usage.inputTokens ?? 0)} token vào ·{' '}
              {formatNumber(result.usage.outputTokens ?? 0)} token ra · Discord
              sẽ đăng thành {result.discordMessages} tin nhắn · {result.model}
            </p>
            <PassageList context={result.context} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
