import {
  BotMessageSquareIcon,
  HistoryIcon,
  LogOutIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fetchBotStatus } from '@/lib/api';

type BotStatus = NonNullable<Awaited<ReturnType<typeof fetchBotStatus>>>;

const STATUS: Record<
  BotStatus['status'],
  { label: string; variant: 'success' | 'danger' | 'muted' }
> = {
  online: { label: 'Bot đang hoạt động', variant: 'success' },
  offline: { label: 'Bot mất kết nối', variant: 'danger' },
  disabled: { label: 'Bot đang tắt', variant: 'muted' },
};

const STATUS_REFRESH_MS = 30_000;

export type Tab = 'members' | 'gemini' | 'assistant' | 'audit';

const TABS: { tab: Tab; label: string; icon: LucideIcon }[] = [
  { tab: 'members', label: 'Thành viên', icon: UsersIcon },
  { tab: 'gemini', label: 'Gemini API', icon: SparklesIcon },
  { tab: 'assistant', label: 'Trợ lý AI', icon: BotMessageSquareIcon },
  { tab: 'audit', label: 'Nhật ký', icon: HistoryIcon },
];

/** Same layout as the other bots' admin pages: brand | tabs | account. */
export function AppHeader({
  username,
  tab,
  onTabChange,
  onLogout,
}: {
  username: string;
  tab: Tab;
  onTabChange: (tab: Tab) => void;
  onLogout: () => void;
}) {
  const [status, setStatus] = useState<BotStatus | null>(null);

  useEffect(() => {
    const load = () => void fetchBotStatus().then(setStatus);
    load();
    const timer = window.setInterval(load, STATUS_REFRESH_MS);
    return () => window.clearInterval(timer);
  }, []);

  const badge = status ? STATUS[status.status] : null;

  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      {/* The equal side columns keep the tabs centred. */}
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:gap-4 sm:px-6">
        <div className="flex items-center gap-2.5 justify-self-start">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <ShieldCheckIcon className="size-5" />
          </span>
          <div className="hidden leading-tight whitespace-nowrap sm:block">
            <div className="text-sm font-semibold tracking-tight">
              Xác Thực Game
            </div>
            <div className="text-xs text-muted-foreground">Quản trị</div>
          </div>
        </div>

        {/* Icon-only tabs on phones; the label stays as the accessible name. */}
        <TabsList className="h-11 gap-1 rounded-xl border bg-muted/70 p-1 shadow-xs">
          {TABS.map((item) => (
            <TabsTrigger
              key={item.tab}
              active={tab === item.tab}
              aria-label={item.label}
              title={item.label}
              className="h-full gap-2 rounded-lg px-3.5 text-[15px] hover:bg-foreground/5 sm:px-4 data-[state=active]:border-sky-300 data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800 data-[state=active]:shadow-sm [&_svg:not([class*='size-'])]:size-[18px]"
              onClick={() => onTabChange(item.tab)}
            >
              <item.icon />
              <span className="hidden sm:inline">{item.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex items-center gap-3 justify-self-end">
          {badge && (
            <Badge variant={badge.variant} className="hidden lg:inline-flex">
              <span className="size-1.5 rounded-full bg-current" />
              {badge.label}
              {status?.status === 'online' && status.gatewayPingMs !== null
                ? ` · ${status.gatewayPingMs}ms`
                : ''}
            </Badge>
          )}
          <span className="hidden text-sm text-muted-foreground xl:inline">
            {username}
          </span>
          <Button
            variant="outline"
            size="sm"
            aria-label="Đăng xuất"
            title={`Đăng xuất (${username})`}
            onClick={onLogout}
          >
            <LogOutIcon />
            <span className="hidden xl:inline">Đăng xuất</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
