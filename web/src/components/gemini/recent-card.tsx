import { HistoryIcon, Loader2Icon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Pager } from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { api } from '@/lib/api';
import { formatDateTime, formatRelative } from '@/lib/format';
import { errorLabel, formatNumber } from '@/lib/gemini';
import type { GeminiRecentRequest } from '@/lib/types';

function source(request: GeminiRecentRequest): string {
  if (request.source === 'discord') {
    return request.requester ? `Discord · @${request.requester}` : 'Discord';
  }

  if (request.source === 'admin') {
    return request.requester
      ? `Hỏi thử · ${request.requester}`
      : 'Hỏi thử trên trang';
  }

  return 'HTTP /question';
}

const DEFAULT_PAGE_SIZE = 10;

/**
 * The current key's calls, newest first, one page at a time. Reloads its
 * page whenever `refreshKey` changes (the Gemini tab reloaded after a call).
 */
export function RecentCard({
  refreshKey,
  now,
  onError,
}: {
  refreshKey: string;
  now: Date;
  onError: (error: unknown) => void;
}) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [recent, setRecent] = useState<GeminiRecentRequest[] | null>(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  /** Ignores answers to requests made for an older page. */
  const requestId = useRef(0);
  const top = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = ++requestId.current;
    setLoading(true);

    api
      .geminiRequests(page, pageSize)
      .then((result) => {
        if (id !== requestId.current) return;
        const pageCount = Math.max(1, Math.ceil(result.total / pageSize));
        if (page > pageCount) {
          setPage(pageCount); // fewer pages than the one shown
          return;
        }
        setRecent(result.entries);
        setTotal(result.total);
      })
      .catch((error: unknown) => {
        if (id === requestId.current) onError(error);
      })
      .finally(() => {
        if (id === requestId.current) setLoading(false);
      });
  }, [page, pageSize, refreshKey, onError]);

  const goToPage = (next: number) => {
    setPage(next);
    top.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;

  return (
    <Card ref={top} className="scroll-mt-20 gap-2 pb-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          Lượt gọi gần đây
          {loading && (
            <Loader2Icon className="size-4 animate-spin text-muted-foreground" />
          )}
        </CardTitle>
        <CardDescription>
          Mọi lượt gọi của key này, mới nhất trước. Bot không lưu nội dung câu
          hỏi.
        </CardDescription>
      </CardHeader>

      {recent === null ? (
        <div className="flex justify-center py-12">
          <Loader2Icon className="size-6 animate-spin text-muted-foreground" />
        </div>
      ) : recent.length === 0 ? (
        <div className="flex flex-col items-center gap-2 px-6 py-12 text-muted-foreground">
          <HistoryIcon className="size-8 opacity-40" />
          <span>Chưa có lượt gọi nào từ khi bắt đầu đếm.</span>
        </div>
      ) : (
        <div className="px-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Thời gian</TableHead>
                <TableHead>Nguồn</TableHead>
                <TableHead>Kết quả</TableHead>
                <TableHead className="text-right">Token vào / ra</TableHead>
                <TableHead className="hidden text-right sm:table-cell">
                  Xử lý
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recent.map((request, index) => (
                <TableRow key={`${request.createdAt}-${index}`}>
                  <TableCell
                    className="whitespace-nowrap"
                    title={formatDateTime(request.createdAt)}
                  >
                    {formatRelative(request.createdAt, now)}
                  </TableCell>
                  <TableCell className="max-w-48 truncate">
                    {source(request)}
                  </TableCell>
                  <TableCell>
                    {request.ok ? (
                      <Badge variant="success">Thành công</Badge>
                    ) : (
                      <span
                        className="flex items-center gap-2"
                        title={request.errorMessage ?? undefined}
                      >
                        <Badge
                          variant={
                            request.errorKind === 'quota' ||
                            request.errorKind === 'key'
                              ? 'danger'
                              : 'warning'
                          }
                        >
                          {errorLabel(request.errorKind)}
                        </Badge>
                        {request.retryAfterSec !== null && (
                          <span className="text-xs text-muted-foreground">
                            thử lại sau {request.retryAfterSec}s
                          </span>
                        )}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {request.inputTokens === null &&
                    request.outputTokens === null
                      ? '—'
                      : `${formatNumber(request.inputTokens ?? 0)} / ${formatNumber(request.outputTokens ?? 0)}`}
                  </TableCell>
                  <TableCell className="hidden text-right text-muted-foreground tabular-nums sm:table-cell">
                    {(request.durationMs / 1000).toFixed(1)}s
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {total > 0 && (
        <div className="pb-2">
          <Pager
            page={page}
            pageCount={pageCount}
            from={from}
            to={from === 0 ? 0 : from + (recent?.length ?? 0) - 1}
            total={total}
            pageSize={pageSize}
            onPageChange={goToPage}
            onPageSizeChange={(size) => {
              setPageSize(size);
              setPage(1);
            }}
            unit="lượt gọi"
          />
        </div>
      )}
    </Card>
  );
}
