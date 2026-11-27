import {
  ClockIcon,
  KeyRoundIcon,
  RefreshCwIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { KeyCard } from '@/components/gemini/key-card';
import { LimitsCard } from '@/components/gemini/limits-card';
import { RecentCard } from '@/components/gemini/recent-card';
import { UsageChart } from '@/components/gemini/usage-chart';
import { UsageStats } from '@/components/gemini/usage-stats';
import { LiveIndicator } from '@/components/live-indicator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { api, ApiError } from '@/lib/api';
import { formatDateTime } from '@/lib/format';
import {
  effectiveLimit,
  formatCountdown,
  formatNumber,
  formatTimeOfDay,
  isMinuteQuota,
  usageLevel,
  usagePercent,
} from '@/lib/gemini';
import type { LiveMode } from '@/lib/live';
import { useNow } from '@/lib/now';
import type { GeminiOverview } from '@/lib/types';
import { cn } from '@/lib/utils';

/** Several calls often finish together; reload once. */
const RELOAD_DEBOUNCE_MS = 400;

export function GeminiPage({
  liveMode,
  refreshSignal,
  onSessionEnded,
}: {
  liveMode: LiveMode;
  refreshSignal: number;
  onSessionEnded: (notice: string | null) => void;
}) {
  const [overview, setOverview] = useState<GeminiOverview | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const reloadTimer = useRef<number | undefined>(undefined);
  const now = useNow();

  const handleError = useCallback(
    (err: unknown) => {
      if (err instanceof ApiError && err.status === 401) {
        onSessionEnded(err.message);
        return;
      }

      setError(
        err instanceof ApiError
          ? err.message
          : 'Không tải được dữ liệu, vui lòng thử lại.',
      );
    },
    [onSessionEnded],
  );

  const load = useCallback(async () => {
    setLoading(true);

    try {
      setOverview(await api.gemini());
      setError(null);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  useEffect(() => {
    void load();
    return () => window.clearTimeout(reloadTimer.current);
  }, [load]);

  // Reload on live changes, but not for the signal value present at mount.
  const mountSignal = useRef(refreshSignal);
  useEffect(() => {
    if (refreshSignal === mountSignal.current) return;
    window.clearTimeout(reloadTimer.current);
    reloadTimer.current = window.setTimeout(
      () => void load(),
      RELOAD_DEBOUNCE_MS,
    );
  }, [refreshSignal, load]);

  // A new quota day started while the page was open: counts drop to zero.
  const resetAt = overview?.usage?.quotaDay.resetAt;
  const reloadedFor = useRef<string | null>(null);
  useEffect(() => {
    if (
      resetAt &&
      reloadedFor.current !== resetAt &&
      now.getTime() >= new Date(resetAt).getTime() + 2_000
    ) {
      reloadedFor.current = resetAt; // once per reset, even if loading fails
      void load();
    }
  }, [now, resetAt, load]);

  // The "last minute" figures are computed by the server at load time; reload
  // once they have aged out so they drop back without waiting for a call.
  const lastMinuteCalls = overview?.usage?.lastMinute.requests ?? 0;
  const generatedAt = overview?.generatedAt;
  useEffect(() => {
    if (lastMinuteCalls === 0 || !generatedAt) return;
    const timer = window.setTimeout(() => void load(), 61_000);
    return () => window.clearTimeout(timer);
  }, [lastMinuteCalls, generatedAt, load]);

  const usage = overview?.usage ?? null;

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-2xl font-semibold tracking-tight">
            Mức dùng Gemini API
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <LiveIndicator mode={liveMode} />
            {usage ? (
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="size-4" />
                Hạn mức ngày đặt lại lúc{' '}
                <span className="font-medium text-foreground">
                  {formatTimeOfDay(usage.quotaDay.resetAt)}
                </span>
                <span className="tabular-nums">
                  · còn {formatCountdown(usage.quotaDay.resetAt, now)}
                </span>
              </span>
            ) : (
              !overview && <span>Đang tải dữ liệu…</span>
            )}
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() => void load()}
          disabled={loading}
        >
          <RefreshCwIcon className={cn(loading && 'animate-spin')} />
          Làm mới
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <TriangleAlertIcon />
          <AlertTitle>Không tải được dữ liệu</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {overview ? (
        <>
          <StatusAlerts overview={overview} now={now} />
          {usage && <UsageStats overview={overview} usage={usage} />}

          {/* Phones: chart, key + limits, then the long table. Desktop: key
              and limits in a right-hand column beside chart and table. */}
          <div className="grid items-start gap-6 lg:grid-cols-3">
            {usage && (
              <div className="min-w-0 lg:col-span-2">
                <UsageChart
                  usage={usage}
                  dailyLimit={effectiveLimit(overview, 'rpd').value}
                />
              </div>
            )}
            <div className="flex flex-col gap-6 lg:col-start-3 lg:row-span-2 lg:row-start-1">
              <KeyCard
                keyInfo={overview.key}
                onChanged={() => void load()}
                onError={handleError}
              />
              <LimitsCard
                limits={overview.limits}
                learned={usage?.learnedLimits ?? null}
                onChanged={() => void load()}
                onError={handleError}
              />
            </div>
            {usage && (
              <div className="min-w-0 lg:col-span-2">
                <RecentCard
                  refreshKey={overview.generatedAt}
                  now={now}
                  onError={handleError}
                />
              </div>
            )}
          </div>

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Google không có API cho biết key còn bao nhiêu lượt, nên các số trên
            do bot tự đếm
            {usage?.allTime.firstAt &&
              ` từ ${formatDateTime(usage.allTime.firstAt)} (${formatNumber(usage.allTime.requests)} lượt với key này)`}
            . Hạn mức tính theo <b>project</b> Google: nếu key khác cùng project
            cũng đang được dùng ở nơi khác, mức dùng thật sẽ cao hơn.
          </p>
        </>
      ) : (
        !error && <GeminiSkeleton />
      )}
    </main>
  );
}

/** The "is something wrong / almost used up" banners at the top. */
function StatusAlerts({
  overview,
  now,
}: {
  overview: GeminiOverview;
  now: Date;
}) {
  const usage = overview.usage;
  const alerts: React.ReactNode[] = [];

  if (!overview.key.configured) {
    alerts.push(
      <Alert key="no-key" variant="destructive">
        <KeyRoundIcon />
        <AlertTitle>Chưa có key Gemini</AlertTitle>
        <AlertDescription>
          Lệnh /question chưa dùng được. Dán key ở mục “Key đang dùng” bên dưới.
        </AlertDescription>
      </Alert>,
    );
  }

  if (!overview.trackingEnabled) {
    alerts.push(
      <Alert key="no-db" variant="warning">
        <TriangleAlertIcon />
        <AlertTitle>Không đếm được lượt dùng</AlertTitle>
        <AlertDescription>
          Bot đang chạy với DATABASE_ENABLED=false nên không lưu được số lượt
          gọi Gemini.
        </AlertDescription>
      </Alert>,
    );
  }

  if (usage) {
    const latest = usage.recent[0];
    const rpd = effectiveLimit(overview, 'rpd');
    const level = usageLevel(usage.today.requests, rpd.value);
    const resetText = `Hạn mức ngày đặt lại lúc ${formatTimeOfDay(usage.quotaDay.resetAt)} (còn ${formatCountdown(usage.quotaDay.resetAt, now)}).`;
    const newKeyText =
      'Muốn dùng tiếp ngay thì đổi sang key của một project Google khác (key cùng project dùng chung hạn mức).';

    if (latest && !latest.ok && latest.errorKind === 'key') {
      alerts.push(
        <Alert key="bad-key" variant="destructive">
          <KeyRoundIcon />
          <AlertTitle>Google từ chối key đang dùng</AlertTitle>
          <AlertDescription>
            {latest.errorMessage ?? 'Key không hợp lệ hoặc đã bị thu hồi.'} Hãy
            đổi key mới bên dưới.
          </AlertDescription>
        </Alert>,
      );
    } else if (
      latest &&
      !latest.ok &&
      latest.errorKind === 'quota' &&
      isMinuteQuota(latest.quotaId) &&
      level !== 'exhausted'
    ) {
      alerts.push(
        <Alert key="minute" variant="warning">
          <TriangleAlertIcon />
          <AlertTitle>Vượt giới hạn mỗi phút</AlertTitle>
          <AlertDescription>
            Lượt gọi gần nhất bị Google chặn vì có quá nhiều câu hỏi trong một
            phút
            {latest.retryAfterSec !== null &&
              ` (Google báo thử lại sau ${latest.retryAfterSec} giây)`}
            . Giới hạn này tự hết sau khoảng một phút, không cần đổi key.
          </AlertDescription>
        </Alert>,
      );
    } else if (
      (latest && !latest.ok && latest.errorKind === 'quota') ||
      level === 'exhausted'
    ) {
      alerts.push(
        <Alert key="exhausted" variant="destructive">
          <TriangleAlertIcon />
          <AlertTitle>Key đã hết hạn mức</AlertTitle>
          <AlertDescription>
            {latest?.errorKind === 'quota'
              ? 'Lượt gọi gần nhất bị Google chặn vì hết hạn mức (lỗi 429), thành viên hỏi /question sẽ không được trả lời. '
              : `Đã dùng ${formatNumber(usage.today.requests)}/${formatNumber(rpd.value ?? 0)} lượt hôm nay. `}
            {resetText} {newKeyText}
          </AlertDescription>
        </Alert>,
      );
    } else if (level === 'warning') {
      alerts.push(
        <Alert key="warning" variant="warning">
          <TriangleAlertIcon />
          <AlertTitle>
            Sắp hết hạn mức hôm nay (
            {usagePercent(usage.today.requests, rpd.value)}%)
          </AlertTitle>
          <AlertDescription>
            Đã dùng {formatNumber(usage.today.requests)}/
            {formatNumber(rpd.value ?? 0)} lượt. {resetText} {newKeyText}
          </AlertDescription>
        </Alert>,
      );
    }
  }

  return alerts.length > 0 ? <>{alerts}</> : null;
}

function GeminiSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, i) => (
          <Skeleton key={i} className="h-[136px] rounded-xl bg-background" />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Skeleton className="h-[320px] rounded-xl bg-background lg:col-span-2" />
        <Skeleton className="h-[320px] rounded-xl bg-background" />
      </div>
    </>
  );
}
