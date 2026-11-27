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

  const changeTab = (next: Tab) => {
    window.history.replaceState(null, '', TAB_HASH[next]);
    setTab(next);
  };

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
      {tab === 'members' && (
        <Dashboard
          liveMode={liveMode}
          refreshSignal={signals.members}
          onSessionEnded={onSessionEnded}
        />
      )}
      {tab === 'gemini' && (
        <GeminiPage
          liveMode={liveMode}
          refreshSignal={signals.gemini}
          onSessionEnded={onSessionEnded}
        />
      )}
      {tab === 'assistant' && <AssistantPage onSessionEnded={onSessionEnded} />}
      {tab === 'audit' && (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
          <AuditPage onError={auditError} />
        </main>
      )}
    </div>
  );
}
