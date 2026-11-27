import { KeyRoundIcon, TriangleAlertIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { FlowCard, PersonaCard } from '@/components/assistant/flow-card';
import { SourcesCard } from '@/components/assistant/sources-card';
import { TryCard } from '@/components/assistant/try-card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { api, ApiError } from '@/lib/api';
import type { AssistantOverview, AssistantTokenCounts } from '@/lib/types';

/** The "Trợ lý AI" tab: how /question works and what it knows. */
export function AssistantPage({
  onSessionEnded,
}: {
  onSessionEnded: (notice: string | null) => void;
}) {
  const [overview, setOverview] = useState<AssistantOverview | null>(null);
  const [tokens, setTokens] = useState<AssistantTokenCounts | null>(null);
  const [countingTokens, setCountingTokens] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    api.assistant().then(setOverview).catch(handleError);
  }, [handleError]);

  async function countTokens() {
    setCountingTokens(true);

    try {
      setTokens(await api.assistantTokens());
      setError(null);
    } catch (err) {
      handleError(err);
    } finally {
      setCountingTokens(false);
    }
  }

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight">
          Trợ lý AI · lệnh /question
        </h1>
        <p className="text-sm text-muted-foreground">
          Bot trả lời câu hỏi của thành viên về game Vấn Đạo: Nghịch Mệnh bằng
          Gemini, dựa trên các nguồn kiến thức bên dưới.
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <TriangleAlertIcon />
          <AlertTitle>Có lỗi</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {overview && !overview.keyConfigured && (
        <Alert variant="destructive">
          <KeyRoundIcon />
          <AlertTitle>Chưa có key Gemini</AlertTitle>
          <AlertDescription>
            Lệnh /question chưa trả lời được. Thêm key ở tab Gemini API.
          </AlertDescription>
        </Alert>
      )}

      {overview ? (
        <>
          <FlowCard overview={overview} systemTokens={tokens?.total ?? null} />
          <div className="grid items-start gap-6 lg:grid-cols-5">
            <div className="flex min-w-0 flex-col gap-6 lg:col-span-3">
              <SourcesCard
                overview={overview}
                tokens={tokens}
                countingTokens={countingTokens}
                onCountTokens={() => void countTokens()}
                onError={handleError}
              />
            </div>
            <div className="flex min-w-0 flex-col gap-6 lg:col-span-2">
              <TryCard
                maxLength={overview.maxQuestionLength}
                disabled={!overview.keyConfigured}
                onError={handleError}
              />
              <PersonaCard overview={overview} />
            </div>
          </div>
        </>
      ) : (
        !error && (
          <>
            <Skeleton className="h-[220px] rounded-xl bg-background" />
            <Skeleton className="h-[360px] rounded-xl bg-background" />
          </>
        )
      )}
    </main>
  );
}
