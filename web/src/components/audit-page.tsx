import {
  ArrowUpIcon,
  CircleAlertIcon,
  GlobeIcon,
  Loader2Icon,
  MessageSquareIcon,
  RotateCwIcon,
  SearchIcon,
  XIcon,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Pager } from '@/components/pager';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { api, ApiError } from '@/lib/api';
import { formatRelative, formatTimestamp } from '@/lib/format';
import type {
  AuditEntry,
  AuditFilter,
  AuditScope,
  AuditSource,
} from '@/lib/types';
import { cn } from '@/lib/utils';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'muted';

/**
 * Red for what may be an intrusion, amber for the Excel file (phone numbers
 * and CCCDs) and key changes, blue for Discord verification events.
 */
const ACTION_TONE: Record<string, BadgeVariant> = {
  login: 'success',
  login_failed: 'danger',
  login_blocked: 'danger',
  gemini_key_rejected: 'danger',
  excel_download: 'warning',
  gemini_key_replace: 'warning',
  gemini_limits_update: 'warning',
  verification_submitted: 'info',
  role_restored: 'info',
};

const SCOPES: { value: AuditScope; label: string }[] = [
  { value: 'all', label: 'Mọi truy cập' },
  { value: 'external', label: 'Ngoài mạng nội bộ' },
];

/** Opens on what matters most: access from outside the office network. */
const DEFAULT_FILTER: AuditFilter = { scope: 'external' };

const SOURCES: { value: AuditSource | 'all'; label: string }[] = [
  { value: 'all', label: 'Mọi nguồn' },
  { value: 'web', label: 'Trang quản trị' },
  { value: 'discord', label: 'Discord' },
];

const SEARCH_DELAY_MS = 300;
const DEFAULT_PAGE_SIZE = 20;
/** How often the page asks for new entries while it is visible. */
const LIVE_INTERVAL_MS = 3000;
/** How long new rows stay highlighted. */
const FRESH_MS = 4000;

/**
 * The server itself and private LAN ranges; same rule as the server's
 * isInternalIp (src/audit/audit.types.ts) behind the "Ngoài mạng nội bộ" scope.
 */
function isInternalIp(ip: string): boolean {
  return (
    ip === '::1' ||
    ['127.', '10.', '192.168.', 'fc', 'fd'].some((p) => ip.startsWith(p)) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(ip)
  );
}

function IpCell({ ip }: { ip: string | null }) {
  if (!ip) return <span className="text-muted-foreground">—</span>;
  const internal = isInternalIp(ip);
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5">
      <span className="font-mono text-xs tabular-nums">{ip}</span>
      <Badge variant={internal ? 'muted' : 'danger'}>
        {internal ? 'Nội bộ' : 'Bên ngoài'}
      </Badge>
    </span>
  );
}

function SourceIcon({ source }: { source: AuditSource }) {
  const Icon = source === 'discord' ? MessageSquareIcon : GlobeIcon;
  return (
    <Icon
      className="size-3.5 shrink-0 text-muted-foreground"
      aria-label={source === 'discord' ? 'Discord' : 'Trang quản trị'}
    />
  );
}

/** Who logged in, downloaded the Excel file or changed something, and from where. */
export function AuditPage({
  onError,
  active = true,
}: {
  onError: (reason: unknown) => string;
  /** False while the tab is hidden: live polling pauses. */
  active?: boolean;
}) {
  const [filter, setFilter] = useState<AuditFilter>(DEFAULT_FILTER);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [entries, setEntries] = useState<AuditEntry[]>([]);
  const [total, setTotal] = useState(0);
  const [labels, setLabels] = useState<Map<string, string>>(new Map());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [now, setNow] = useState(() => Date.now());
  /** Rows that just arrived, highlighted for a moment. */
  const [fresh, setFresh] = useState<ReadonlySet<number>>(new Set());
  /** Entries that arrived while the admin reads a later page. */
  const [pendingNew, setPendingNew] = useState(0);
  /** Ignores answers to requests made for an older filter or page. */
  const requestId = useRef(0);
  /** Newest id seen with the current filter; live updates ask for newer. */
  const latestId = useRef<number | null>(null);
  const polling = useRef(false);
  const top = useRef<HTMLDivElement>(null);

  /** Filters and the page size always start again from page 1. */
  const updateFilter = (patch: Partial<AuditFilter>) => {
    setFilter((current) => ({ ...current, ...patch }));
    setPage(1);
  };

  // The search box filters after the admin stops typing.
  useEffect(() => {
    const timer = setTimeout(() => {
      const search = searchText.trim() || undefined;
      setFilter((current) =>
        current.search === search ? current : { ...current, search },
      );
      setPage(1);
    }, SEARCH_DELAY_MS);
    return () => clearTimeout(timer);
  }, [searchText]);

  // A new filter has its own "newest" entry.
  useEffect(() => {
    latestId.current = null;
    setPendingNew(0);
  }, [filter]);

  const load = useCallback(async () => {
    const id = ++requestId.current;
    setLoading(true);
    setError(null);

    try {
      const result = await api.audit(filter, { page, pageSize });
      if (id !== requestId.current) return;

      const pageCount = Math.max(1, Math.ceil(result.total / pageSize));
      if (page > pageCount) {
        // The filter left fewer pages than the one shown: go to the last.
        setPage(pageCount);
        return;
      }

      setLabels(new Map(result.actions.map((a) => [a.value, a.label])));
      setEntries(result.entries);
      setTotal(result.total);
      setNow(Date.now());
      if (page === 1) {
        latestId.current = result.entries[0]?.id ?? 0;
        setPendingNew(0);
      }
    } catch (reason) {
      if (id === requestId.current) setError(onError(reason));
    } finally {
      if (id === requestId.current) setLoading(false);
    }
  }, [filter, page, pageSize, onError]);

  useEffect(() => {
    void load();
  }, [load]);

  // Live updates: every few seconds, ask how many entries are newer than the
  // newest one seen. Page 1 shows them right away; on a later page the rows
  // stay put and a notice offers to go back to the first page. Paused while
  // the browser tab is hidden.
  useEffect(() => {
    if (error) return;
    let clearFresh: ReturnType<typeof setTimeout> | undefined;

    const tick = async () => {
      const after = latestId.current;
      if (after === null) return;
      const id = requestId.current;

      const newer = await api.audit(filter, { after });
      if (id !== requestId.current) return;
      setNow(Date.now());
      if (newer.total === 0) return;

      if (page !== 1) {
        setPendingNew(newer.total);
        return;
      }

      const first = await api.audit(filter, { page: 1, pageSize });
      if (id !== requestId.current) return;
      setEntries(first.entries);
      setTotal(first.total);
      latestId.current = first.entries[0]?.id ?? after;
      setFresh(new Set(newer.entries.map((entry) => entry.id)));
      clearTimeout(clearFresh);
      clearFresh = setTimeout(() => setFresh(new Set()), FRESH_MS);
    };

    const timer = setInterval(() => {
      if (polling.current || document.hidden || !active) return;
      polling.current = true;
      tick()
        .catch((reason: unknown) => {
          // An expired session goes back to the login form; other errors
          // (a network hiccup) are simply retried on the next tick.
          if (reason instanceof ApiError && reason.status === 401) {
            onError(reason);
          }
        })
        .finally(() => {
          polling.current = false;
        });
    }, LIVE_INTERVAL_MS);

    return () => {
      clearInterval(timer);
      clearTimeout(clearFresh);
    };
  }, [filter, page, pageSize, error, onError, active]);

  /** Changes page and brings the top of the list into view. */
  const goToPage = (next: number) => {
    setPage(next);
    top.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;

  const hasFilters = Boolean(
    filter.action ||
    filter.source ||
    searchText ||
    filter.scope !== DEFAULT_FILTER.scope,
  );
  const actionOptions = [
    { value: 'all', label: 'Mọi hành động' },
    ...[...labels].map(([value, label]) => ({ value, label })),
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      <div>
        <h1 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-2xl font-semibold tracking-tight">
          Nhật ký truy cập
          {!error && (
            <Badge
              variant="success"
              className="font-normal"
              title={`Tự cập nhật mỗi ${LIVE_INTERVAL_MS / 1000} giây`}
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-current" />
              </span>
              Trực tiếp
            </Badge>
          )}
        </h1>
        <p className="text-sm text-muted-foreground">
          Ai đã đăng nhập, tải file Excel (có SĐT và CCCD), đổi key hay hạn mức
          Gemini trên trang quản trị, và ai đã gửi form xác thực hoặc được cấp
          lại vai trò trên Discord. Mặc định chỉ hiện truy cập{' '}
          <b>ngoài mạng nội bộ</b> (IP bên ngoài và sự kiện Discord); chọn{' '}
          <b>Mọi truy cập</b> để xem cả trong công ty. Nhật ký giữ 180 ngày và
          không bao giờ ghi SĐT, CCCD hay key.
        </p>
      </div>

      <Card ref={top} className="scroll-mt-20 gap-0 py-0">
        <div className="flex flex-col gap-3 border-b p-4 xl:flex-row xl:items-center">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-9"
                placeholder="Tìm theo người, IP hoặc chi tiết"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </div>
            <Select
              aria-label="Phạm vi"
              className="sm:w-48"
              value={filter.scope}
              onValueChange={(scope) => updateFilter({ scope })}
              options={SCOPES}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 xl:flex">
            <Select
              aria-label="Hành động"
              className="xl:w-56"
              value={filter.action ?? 'all'}
              onValueChange={(value) =>
                updateFilter({ action: value === 'all' ? undefined : value })
              }
              options={actionOptions}
            />
            <Select
              aria-label="Nguồn"
              className="xl:w-44"
              value={filter.source ?? 'all'}
              onValueChange={(value) =>
                updateFilter({ source: value === 'all' ? undefined : value })
              }
              options={SOURCES}
            />
          </div>
          <div className="flex gap-2">
            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchText('');
                  setFilter(DEFAULT_FILTER);
                  setPage(1);
                }}
              >
                <XIcon />
                Bỏ lọc
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              disabled={loading}
              onClick={() => void load()}
            >
              <RotateCwIcon className={cn(loading && 'animate-spin')} />
              Tải lại
            </Button>
          </div>
        </div>

        {pendingNew > 0 && !error && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-sky-50 px-4 py-2.5 text-sm text-sky-800 sm:px-6">
            <span>
              Có <b className="tabular-nums">{pendingNew}</b> bản ghi mới từ lúc
              bạn xem trang này.
            </span>
            <Button variant="outline" size="sm" onClick={() => goToPage(1)}>
              <ArrowUpIcon />
              Về trang đầu
            </Button>
          </div>
        )}

        <CardContent className="px-0">
          {error ? (
            <div className="p-4">
              <Alert variant="destructive">
                <CircleAlertIcon />
                <AlertTitle>Không tải được nhật ký</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          ) : loading && entries.length === 0 ? (
            <div className="flex justify-center py-16">
              <Loader2Icon className="size-6 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-44 pl-4">Thời gian</TableHead>
                  <TableHead className="hidden md:table-cell">Người</TableHead>
                  <TableHead className="hidden lg:table-cell">IP</TableHead>
                  <TableHead>Hành động</TableHead>
                  <TableHead className="hidden pr-4 xl:table-cell">
                    Chi tiết
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className={cn(loading && 'opacity-60')}>
                {entries.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-32 text-center whitespace-normal text-muted-foreground"
                    >
                      {filter.scope === 'external' && !hasFilters
                        ? 'Không có truy cập nào từ ngoài mạng nội bộ.'
                        : hasFilters
                          ? 'Không có bản ghi nào khớp bộ lọc.'
                          : 'Chưa có bản ghi nào.'}
                    </TableCell>
                  </TableRow>
                ) : (
                  entries.map((entry) => (
                    <TableRow
                      key={entry.id}
                      className={cn(
                        'transition-colors duration-1000',
                        fresh.has(entry.id) && 'bg-sky-50 hover:bg-sky-50',
                      )}
                    >
                      <TableCell className="pl-4 align-top">
                        <span className="block text-sm tabular-nums">
                          {formatTimestamp(entry.at)}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {formatRelative(entry.at, new Date(now))}
                        </span>
                      </TableCell>
                      <TableCell className="hidden align-top whitespace-normal md:table-cell">
                        <span className="flex items-center gap-1.5 text-sm">
                          <SourceIcon source={entry.source} />
                          <span className="break-all">
                            {entry.actor ?? (
                              <span className="text-muted-foreground">—</span>
                            )}
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="hidden align-top lg:table-cell">
                        <IpCell ip={entry.ip} />
                      </TableCell>
                      <TableCell className="pr-4 align-top whitespace-normal xl:pr-2">
                        <Badge
                          variant={ACTION_TONE[entry.action] ?? 'muted'}
                          className="max-w-full whitespace-normal"
                        >
                          {labels.get(entry.action) ?? entry.action}
                        </Badge>
                        {/* Folded columns on narrower screens. */}
                        <span className="mt-1.5 grid gap-1 text-xs text-muted-foreground xl:hidden">
                          <span className="flex items-center gap-1.5 md:hidden">
                            <SourceIcon source={entry.source} />
                            <span className="break-all">
                              {entry.actor ?? '—'}
                            </span>
                          </span>
                          {entry.ip && (
                            <span className="lg:hidden">
                              <IpCell ip={entry.ip} />
                            </span>
                          )}
                          {entry.detail && (
                            <span className="break-words">{entry.detail}</span>
                          )}
                        </span>
                      </TableCell>
                      <TableCell className="hidden pr-4 align-top text-sm whitespace-normal text-muted-foreground xl:table-cell">
                        <span className="break-words">
                          {entry.detail ?? '—'}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>

        {total > 0 && !error && (
          <div className="pb-4">
            <Pager
              page={page}
              pageCount={pageCount}
              from={from}
              to={from === 0 ? 0 : from + entries.length - 1}
              total={total}
              pageSize={pageSize}
              onPageChange={goToPage}
              onPageSizeChange={(size) => {
                setPageSize(size);
                setPage(1);
              }}
              unit="bản ghi"
            />
          </div>
        )}
      </Card>
    </div>
  );
}
