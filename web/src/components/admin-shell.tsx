import { useCallback, useEffect, useState } from 'react';
import { AppHeader, type Tab } from '@/components/app-header';
import { Dashboard } from '@/components/dashboard';
import { GeminiPage } from '@/components/gemini/gemini-page';
import { Toaster } from '@/components/ui/sonner';
import { api } from '@/lib/api';
import { useLiveUpdates } from '@/lib/live';

const TAB_HASH: Record<Tab, string> = {
  members: '#/thanh-vien',
  gemini: '#/gemini',
};

function tabFromHash(): Tab {
  const hash = window.location.hash;
  return (
    (Object.keys(TAB_HASH) as Tab[]).find((key) => TAB_HASH[key] === hash) ??
    'members'
  );
}

/** Which tab reloads for a live change (null reason = both). */
function tabOfReason(reason: string | null): Tab | null {
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
  const [signals, setSignals] = useState<Record<Tab, number>>({
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
      {tab === 'members' ? (
        <Dashboard
          liveMode={liveMode}
          refreshSignal={signals.members}
          onSessionEnded={onSessionEnded}
        />
      ) : (
        <GeminiPage
          liveMode={liveMode}
          refreshSignal={signals.gemini}
          onSessionEnded={onSessionEnded}
        />
      )}
    </div>
  );
}
