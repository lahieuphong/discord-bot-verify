import {
  BookOpenIcon,
  ChevronDownIcon,
  CoinsIcon,
  Gamepad2Icon,
  Loader2Icon,
  SearchIcon,
} from 'lucide-react';
import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MarkdownView } from '@/components/assistant/markdown-view';
import { api } from '@/lib/api';
import { formatDateTime, normalizeSearch } from '@/lib/format';
import { formatNumber } from '@/lib/gemini';
import { indexContent, SEARCH_LIMIT, searchIndexed } from '@/lib/markdown-lite';
import type {
  AssistantOverview,
  AssistantSource,
  AssistantTokenCounts,
} from '@/lib/types';
import { cn } from '@/lib/utils';

function SourceViewer({
  source,
  onError,
}: {
  source: AssistantSource;
  onError: (error: unknown) => void;
}) {
  const [content, setContent] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let active = true;
    api
      .assistantSource(source.id)
      .then((result) => {
        if (active) setContent(result.content);
      })
      .catch((error: unknown) => {
        if (active) onError(error);
      });
    return () => {
      active = false;
    };
  }, [source.id, onError]);

  // Searching: lines indexed once, results grouped under their headings.
  // The query is deferred so typing stays smooth on the big wiki.
  const plainHeadings = source.origin === 'wiki';
  const index = useMemo(
    () => (content === null ? null : indexContent(content, { plainHeadings })),
    [content, plainHeadings],
  );
  const deferredQuery = useDeferredValue(query);
  const searching = normalizeSearch(deferredQuery).length >= 2;
  const results = useMemo(
    () => (index && searching ? searchIndexed(index, deferredQuery) : null),
    [index, deferredQuery, searching],
  );

  return (
    <div className="mt-3 flex flex-col gap-2">
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm trong nguồn này (không cần dấu)…"
          className="pl-9"
          aria-label={`Tìm trong ${source.title}`}
        />
      </div>

      {content === null ? (
        <div className="flex items-center gap-2 py-6 text-sm text-muted-foreground">
          <Loader2Icon className="size-4 animate-spin" /> Đang tải nội dung…
        </div>
      ) : (
        <div className="max-h-[28rem] overflow-auto rounded-lg border bg-muted/30 px-4 py-3">
          <p className="sr-only" aria-live="polite">
            {results ? `${results.total} dòng khớp` : ''}
          </p>
          {results &&
            (results.total === 0 ? (
              <p className="py-4 text-center text-sm text-muted-foreground">
                Không có dòng nào chứa từ này.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                <p className="text-xs text-muted-foreground" aria-hidden>
                  {formatNumber(results.total)} dòng khớp
                  {results.total > SEARCH_LIMIT &&
                    `, hiện ${formatNumber(SEARCH_LIMIT)} dòng đầu`}
                </p>
                {results.groups.map((group, groupIndex) => (
                  <section
                    key={`${group.path}-${groupIndex}`}
                    className="flex flex-col gap-1.5 border-l-2 border-sky-200 pl-3"
                  >
                    {group.path && (
                      <div className="text-xs font-medium text-sky-800">
                        {group.path}
                      </div>
                    )}
                    <MarkdownView
                      text={group.lines.join('\n\n')}
                      query={deferredQuery}
                      className="gap-1.5"
                    />
                  </section>
                ))}
              </div>
            ))}
          {/* Kept mounted while searching: rebuilding the whole wiki on
              every backspace would be slow. */}
          <div hidden={results !== null}>
            <MarkdownView text={content} plainHeadings={plainHeadings} />
          </div>
        </div>
      )}
    </div>
  );
}

export function SourcesCard({
  overview,
  tokens,
  countingTokens,
  onCountTokens,
  onError,
}: {
  overview: AssistantOverview;
  tokens: AssistantTokenCounts | null;
  countingTokens: boolean;
  onCountTokens: () => void;
  onError: (error: unknown) => void;
}) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle className="text-base">Nguồn kiến thức</CardTitle>
        <CardDescription>
          Kiến thức bot dùng để trả lời, cắt thành{' '}
          {formatNumber(overview.passageCount)} đoạn để tìm. Phần lấy từ game
          được tạo lúc {formatDateTime(overview.gameKnowledgeGeneratedAt)} bằng
          lệnh{' '}
          <code className="rounded bg-muted px-1">npm run knowledge:sync</code>{' '}
          (đọc thư mục TuTienHTML_r3).
        </CardDescription>
        <CardAction>
          <Button
            variant="outline"
            size="sm"
            onClick={onCountTokens}
            disabled={countingTokens || !overview.keyConfigured}
            title="Hỏi Google số token của từng nguồn (miễn phí, không tốn lượt)"
          >
            {countingTokens ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <CoinsIcon />
            )}
            Đếm token
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {tokens && (
          <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Toàn bộ các nguồn dài khoảng{' '}
            <b className="tabular-nums">{formatNumber(tokens.total)}</b> token.{' '}
            {overview.knowledgeMode === 'retrieval'
              ? `Mỗi câu hỏi chỉ gửi phần liên quan (tối đa ${formatNumber(overview.contextBudget)} ký tự), nên tốn ít hơn nhiều; con số thật của từng câu hiện ở ô Hỏi thử và tab Gemini API.`
              : 'Bot đang ở chế độ gửi toàn bộ (GEMINI_KNOWLEDGE_MODE=full): mỗi câu hỏi tốn chừng ấy token đầu vào.'}
          </p>
        )}

        <ul className="flex flex-col gap-2">
          {overview.sources.map((source) => {
            const isOpen = open === source.id;
            const sourceTokens = tokens?.sections[source.id];

            return (
              <li key={source.id} className="rounded-xl border p-4">
                <div className="flex flex-wrap items-start gap-3">
                  <span
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-lg',
                      source.origin === 'game'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-zinc-100 text-zinc-700',
                    )}
                  >
                    {source.origin === 'game' ? (
                      <Gamepad2Icon className="size-[18px]" />
                    ) : (
                      <BookOpenIcon className="size-[18px]" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1 basis-[calc(100%-3rem)] sm:basis-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{source.title}</span>
                      <Badge
                        variant={source.origin === 'game' ? 'success' : 'muted'}
                      >
                        {source.origin === 'game'
                          ? 'Từ mã nguồn game'
                          : 'Wiki có sẵn'}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {source.summary}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground tabular-nums">
                      {formatNumber(source.characters)} ký tự ·{' '}
                      {formatNumber(source.lines)} dòng
                      {sourceTokens !== undefined &&
                        ` · ${formatNumber(sourceTokens)} token`}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-12 sm:ml-0"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : source.id)}
                  >
                    {isOpen ? 'Thu gọn' : 'Xem nội dung'}
                    <ChevronDownIcon
                      className={cn(
                        'transition-transform',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </Button>
                </div>
                {isOpen && <SourceViewer source={source} onError={onError} />}
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
