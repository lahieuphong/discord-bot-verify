import { useState } from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  formatNumber,
  formatQuotaDay,
  formatTimeOfDay,
  formatTokens,
} from '@/lib/gemini';
import type { GeminiUsage } from '@/lib/types';
import { cn } from '@/lib/utils';

const CHART_HEIGHT = 176;

/** Every n-th day is labelled on phones, counted back from today. */
const MOBILE_LABEL_EVERY = 4;

/** A round axis maximum at or above `value`, with an even half-way tick. */
function niceMax(value: number): number {
  if (value <= 4) return 4;
  const power = 10 ** Math.floor(Math.log10(value));
  const step =
    [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10].find((m) => m * power >= value) ??
    10;
  return step * power;
}

/**
 * Requests per quota day, one series: a single hue, no legend (the title
 * names it), solid hairline grid, the daily limit as a dashed threshold.
 */
export function UsageChart({
  usage,
  dailyLimit,
}: {
  usage: GeminiUsage;
  dailyLimit: number | null;
}) {
  const [active, setActive] = useState<number | null>(null);
  const days = usage.days;
  const peak = Math.max(...days.map((day) => day.requests), dailyLimit ?? 0);
  // ~15% headroom so the limit line and tooltip never touch the top edge.
  const max = niceMax(peak * 1.15);
  const ticks = [0, max / 2, max];
  const resetTime = formatTimeOfDay(usage.quotaDay.resetAt);
  const activeDay = active === null ? null : days[active];

  return (
    <Card className="gap-4 pb-5">
      <CardHeader>
        <CardTitle className="text-base">Lượt gọi 14 ngày qua</CardTitle>
        <CardDescription>
          Mỗi cột là một ngày hạn mức của Google, bắt đầu lúc {resetTime} giờ
          Việt Nam.
          {dailyLimit !== null && (
            <> Đường gạch đỏ là hạn mức {formatNumber(dailyLimit)} lượt/ngày.</>
          )}
        </CardDescription>
      </CardHeader>

      {/* pt-2 leaves room for the top axis label above the plot. */}
      <div className="px-6 pt-2">
        <div className="flex gap-2">
          {/* Y axis labels */}
          <div
            className="relative w-8 shrink-0 text-right text-[11px] text-muted-foreground tabular-nums"
            style={{ height: CHART_HEIGHT }}
            aria-hidden
          >
            {ticks.map((tick) => (
              <span
                key={tick}
                className="absolute right-0 -translate-y-1/2"
                style={{ bottom: `${(tick / max) * 100}%` }}
              >
                {formatTokens(tick)}
              </span>
            ))}
          </div>

          <div className="relative min-w-0 flex-1">
            <div className="relative" style={{ height: CHART_HEIGHT }}>
              {/* Solid hairline grid */}
              {ticks.map((tick) => (
                <div
                  key={tick}
                  className="absolute inset-x-0 h-px bg-border"
                  style={{ bottom: `${(tick / max) * 100}%` }}
                  aria-hidden
                />
              ))}

              {dailyLimit !== null && (
                <div
                  className="absolute inset-x-0 z-10 border-t-2 border-dashed border-red-400"
                  style={{ bottom: `${(dailyLimit / max) * 100}%` }}
                  aria-hidden
                />
              )}

              {/* Bars: 2px surface gap between neighbours, 4px rounded tops. */}
              <div
                className="absolute inset-0 flex items-end gap-0.5"
                onMouseLeave={() => setActive(null)}
              >
                {days.map((day, index) => {
                  const isToday = index === days.length - 1;
                  const height = (day.requests / max) * 100;

                  return (
                    <button
                      key={day.day}
                      type="button"
                      className="group relative flex h-full flex-1 cursor-default items-end outline-none"
                      aria-label={`Ngày ${formatQuotaDay(day.day)}: ${day.requests} lượt, ${day.errors} lỗi`}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onBlur={() => setActive(null)}
                    >
                      <span
                        className={cn(
                          'w-full rounded-t-[4px] transition-colors',
                          isToday ? 'bg-sky-600' : 'bg-sky-400',
                          active === index && 'bg-sky-700',
                          'group-focus-visible:ring-2 group-focus-visible:ring-ring/60',
                        )}
                        style={{
                          height: `${height}%`,
                          minHeight: day.requests > 0 ? 2 : 0,
                        }}
                      />
                    </button>
                  );
                })}
              </div>

              {activeDay && active !== null && (
                <div
                  className="pointer-events-none absolute z-20 w-max -translate-x-1/2 rounded-lg border bg-background px-3 py-2 text-xs shadow-md"
                  style={{
                    left: `${((active + 0.5) / days.length) * 100}%`,
                    bottom: `calc(${Math.min((activeDay.requests / max) * 100, 85)}% + 8px)`,
                  }}
                  role="status"
                >
                  <div className="font-medium">
                    Ngày {formatQuotaDay(activeDay.day)}
                    {active === days.length - 1 && ' (hôm nay)'}
                  </div>
                  <div className="text-muted-foreground tabular-nums">
                    {formatNumber(activeDay.requests)} lượt ·{' '}
                    {formatNumber(activeDay.errors)} lỗi ·{' '}
                    {formatTokens(activeDay.totalTokens)} token
                  </div>
                </div>
              )}
            </div>

            {/* X axis: labels centred under their bar; on phones only every
                MOBILE_LABEL_EVERY-th day (always including today). */}
            <div className="mt-2 flex h-4 gap-0.5 text-[11px] text-muted-foreground tabular-nums">
              {days.map((day, index) => {
                const fromToday = days.length - 1 - index;

                return (
                  <span key={day.day} className="relative flex-1">
                    <span
                      className={cn(
                        'absolute left-1/2 -translate-x-1/2 whitespace-nowrap',
                        fromToday % MOBILE_LABEL_EVERY !== 0 &&
                          'invisible sm:visible',
                        fromToday === 0 && 'font-medium text-foreground',
                      )}
                    >
                      {formatQuotaDay(day.day)}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Table view of the same data for screen readers. */}
      <table className="sr-only">
        <caption>Lượt gọi Gemini theo ngày</caption>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Lượt gọi</th>
            <th>Lỗi</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day.day}>
              <td>{formatQuotaDay(day.day)}</td>
              <td>{day.requests}</td>
              <td>{day.errors}</td>
              <td>{day.totalTokens}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
