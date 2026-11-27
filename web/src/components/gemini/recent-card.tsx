import { HistoryIcon } from 'lucide-react';
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

export function RecentCard({
  recent,
  now,
}: {
  recent: GeminiRecentRequest[];
  now: Date;
}) {
  return (
    <Card className="gap-2 pb-2">
      <CardHeader>
        <CardTitle className="text-base">Lượt gọi gần đây</CardTitle>
        <CardDescription>
          20 lượt mới nhất của key này. Bot không lưu nội dung câu hỏi.
        </CardDescription>
      </CardHeader>

      {recent.length === 0 ? (
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
    </Card>
  );
}
