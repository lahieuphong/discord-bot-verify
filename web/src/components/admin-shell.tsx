import { useCallback, useEffect, useState } from 'react';
import { AppHeader, type Tab } from '@/components/app-header';
import { AssistantPage } from '@/components/assistant/assistant-page';
import { AuditPage } from '@/components/audit-page';
import { Dashboard } from '@/components/dashboard';
import { GeminiPage } from '@/components/gemini/gemini-page';
import { Toaster } from '@/components/ui/sonner';
import { api, ApiError } from '@/lib/api';
import { useLiveUpdates } from '@/lib/live';

const TAB_HASH: Record<Tab, string> = {
  members: '#/thanh-vien',
  gemini: '#/gemini',
  assistant: '#/tro-ly-ai',
  audit: '#/nhat-ky',
};

function tabFromHash(): Tab {
  const hash = window.location.hash;
  return (
    (Object.keys(TAB_HASH) as Tab[]).find((key) => TAB_HASH[key] === hash) ??
    'members'
  );
}

/** Tabs that reload on live changes. */
type LiveTab = 'members' | 'gemini';

/** Which tab reloads for a live change (null reason = both). */
function tabOfReason(reason: string | null): LiveTab | null {
  if (reason === null) return null;
  return reason.startsWith('gemini-') ? 'gemini' : 'members';
}

/** Logged-in admin page: shared header, tabs and live connection. */
export function AdminShell({
  username,
  onSessionEnded,
}: {
  username: string;
  onSessionEnded: (notice: string | null) => void;
}) {
  const [tab, setTab] = useState<Tab>(tabFromHash);
  // Bumped when the server reports a change for that tab.
  const [signals, setSignals] = useState<Record<LiveTab, number>>({
    members: 0,
    gemini: 0,
  });

  useEffect(() => {
    const onHashChange = () => setTab(tabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Tabs stay mounted once opened (only hidden), so going back to one shows
  // it at once instead of reloading it behind a skeleton.
  const [visited, setVisited] = useState<ReadonlySet<Tab>>(
    () => new Set([tab]),
  );
  useEffect(() => {
    setVisited((current) =>
      current.has(tab) ? current : new Set([...current, tab]),
    );
  }, [tab]);

  const changeTab = (next: Tab) => {
    if (next === tab) return;
    window.history.replaceState(null, '', TAB_HASH[next]);
    setTab(next);
    window.scrollTo({ top: 0 });
  };

  const panel = (id: Tab, content: React.ReactNode) =>
    visited.has(id) || tab === id ? (
      <div key={id} className="tab-panel" hidden={tab !== id}>
        {content}
      </div>
    ) : null;

  const onChange = useCallback((reason: string | null) => {
    const target = tabOfReason(reason);
    setSignals((current) => ({
      members: target === 'gemini' ? current.members : current.members + 1,
      gemini: target === 'members' ? current.gemini : current.gemini + 1,
    }));
  }, []);

  /** The audit page shows the message; 401 goes back to the login form. */
  const auditError = useCallback(
    (reason: unknown): string => {
      if (reason instanceof ApiError && reason.status === 401) {
        onSessionEnded(reason.message);
      }
      return reason instanceof Error
        ? reason.message
        : 'Không kết nối được máy chủ.';
    },
    [onSessionEnded],
  );

  const liveMode = useLiveUpdates({
    onChange,
    onUnauthorized: onSessionEnded,
  });

  async function logout() {
    await api.logout().catch(() => undefined);
    onSessionEnded(null);
  }

  return (
    <div className="min-h-svh bg-muted/40">
      <Toaster position="bottom-right" closeButton />
      <AppHeader
        username={username}
        tab={tab}
        onTabChange={changeTab}
        onLogout={() => void logout()}
      />
      {panel(
        'members',
        <Dashboard
          liveMode={liveMode}
          refreshSignal={signals.members}
          onSessionEnded={onSessionEnded}
        />,
      )}
      {panel(
        'gemini',
        <GeminiPage
          liveMode={liveMode}
          refreshSignal={signals.gemini}
          onSessionEnded={onSessionEnded}
        />,
      )}
      {panel('assistant', <AssistantPage onSessionEnded={onSessionEnded} />)}
      {panel(
        'audit',
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
          <AuditPage onError={auditError} active={tab === 'audit'} />
        </main>,
      )}
    </div>
  );
}
