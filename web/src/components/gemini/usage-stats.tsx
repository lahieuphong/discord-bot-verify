import {
  CalendarClockIcon,
  CircleAlertIcon,
  GaugeIcon,
  TextCursorInputIcon,
  type LucideIcon,
} from 'lucide-react';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  effectiveLimit,
  formatNumber,
  formatTokens,
  usageLevel,
  usagePercent,
  type EffectiveLimit,
  type UsageLevel,
} from '@/lib/gemini';
import type { GeminiOverview, GeminiUsage } from '@/lib/types';
import { cn } from '@/lib/utils';

const BAR_TONE: Record<UsageLevel, string> = {
  unknown: 'bg-sky-500',
  ok: 'bg-sky-500',
  warning: 'bg-amber-500',
  exhausted: 'bg-red-500',
};

const VALUE_TONE: Record<UsageLevel, string> = {
  unknown: '',
  ok: '',
  warning: 'text-amber-700',
  exhausted: 'text-red-600',
};

interface Stat {
  label: string;
  used: number;
  format: (value: number) => string;
  limit: EffectiveLimit | null;
  unit: string;
  hint: string;
  icon: LucideIcon;
  tone: string;
}

function limitHint(limit: EffectiveLimit, used: number, unit: string): string {
  if (limit.value === null) {
    return 'Chưa nhập hạn mức, xem mục Hạn mức bên dưới';
  }

  const left = Math.max(0, limit.value - used);
  const source = limit.source === 'google' ? ' (Google báo)' : '';
  return `Còn ${formatNumber(left)} ${unit} trên ${formatNumber(limit.value)}${source}`;
}

export function UsageStats({
  overview,
  usage,
}: {
  overview: GeminiOverview;
  usage: GeminiUsage;
}) {
  const rpd = effectiveLimit(overview, 'rpd');
  const rpm = effectiveLimit(overview, 'rpm');
  const tpm = effectiveLimit(overview, 'tpm');
  const { today, lastMinute } = usage;

  const stats: Stat[] = [
    {
      label: 'Lượt gọi hôm nay',
      used: today.requests,
      format: formatNumber,
      limit: rpd,
      unit: 'lượt',
      hint: limitHint(rpd, today.requests, 'lượt'),
      icon: CalendarClockIcon,
      tone: 'bg-sky-50 text-sky-600',
    },
    {
      label: 'Lượt gọi 1 phút qua',
      used: lastMinute.requests,
      format: formatNumber,
      limit: rpm,
      unit: 'lượt',
      hint: limitHint(rpm, lastMinute.requests, 'lượt'),
      icon: GaugeIcon,
      tone: 'bg-violet-50 text-violet-600',
    },
    {
      label: 'Token đầu vào 1 phút qua',
      used: lastMinute.inputTokens,
      format: formatTokens,
      limit: tpm,
      unit: 'token',
      hint: limitHint(tpm, lastMinute.inputTokens, 'token'),
      icon: TextCursorInputIcon,
      tone: 'bg-zinc-100 text-zinc-700',
    },
    {
      label: 'Lỗi hôm nay',
      used: today.errors,
      format: formatNumber,
      limit: null,
      unit: '',
      hint:
        today.quotaErrors > 0
          ? `${formatNumber(today.quotaErrors)} lần Google báo hết hạn mức`
          : `${formatNumber(today.ok)} lượt thành công, ${formatTokens(today.totalTokens)} token`,
      icon: CircleAlertIcon,
      tone:
        today.quotaErrors > 0
          ? 'bg-red-50 text-red-600'
          : 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {stats.map((stat) => {
        const level = stat.limit
          ? usageLevel(stat.used, stat.limit.value)
          : 'unknown';
        const percent = stat.limit
          ? usagePercent(stat.used, stat.limit.value)
          : null;

        return (
          <Card key={stat.label} className="h-full gap-3 py-5">
            <CardHeader className="px-5">
              <CardDescription className="font-medium">
                {stat.label}
              </CardDescription>
              <CardTitle
                className={cn(
                  'text-3xl font-semibold tracking-tight tabular-nums',
                  VALUE_TONE[level],
                )}
              >
                {stat.format(stat.used)}
                {stat.limit?.value != null && (
                  <span className="ml-1 text-base font-normal text-muted-foreground">
                    / {stat.format(stat.limit.value)}
                  </span>
                )}
              </CardTitle>
              <CardAction>
                <span
                  className={cn(
                    'flex size-9 items-center justify-center rounded-lg',
                    stat.tone,
                  )}
                >
                  <stat.icon className="size-[18px]" />
                </span>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-stretch gap-2 px-5 text-xs leading-snug text-muted-foreground">
              {percent !== null && (
                <div
                  role="progressbar"
                  aria-label={stat.label}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={percent}
                  className="h-2 overflow-hidden rounded-full bg-muted"
                >
                  <div
                    className={cn(
                      'h-full rounded-full transition-[width]',
                      BAR_TONE[level],
                    )}
                    style={{
                      width: `${Math.max(percent, stat.used > 0 ? 2 : 0)}%`,
                    }}
                  />
                </div>
              )}
              <span>
                {percent !== null && (
                  <span className="font-medium text-foreground tabular-nums">
                    {percent}% ·{' '}
                  </span>
                )}
                {stat.hint}
              </span>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
