import {
  CircleCheckIcon,
  CircleXIcon,
  KeyRoundIcon,
  Loader2Icon,
  ShieldCheckIcon,
} from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { api, ApiError } from '@/lib/api';
import { formatDateTime } from '@/lib/format';
import { errorLabel, formatNumber } from '@/lib/gemini';
import type { GeminiKeyCheck, GeminiKeyInfo } from '@/lib/types';

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b py-2.5 text-sm last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="min-w-0 truncate text-right font-medium">
        {children}
      </span>
    </div>
  );
}

export function KeyCard({
  keyInfo,
  onChanged,
  onError,
}: {
  keyInfo: GeminiKeyInfo;
  onChanged: () => void;
  onError: (error: unknown) => void;
}) {
  const [checking, setChecking] = useState(false);
  const [check, setCheck] = useState<GeminiKeyCheck | null>(null);
  const [editing, setEditing] = useState(false);
  const [newKey, setNewKey] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  async function runCheck() {
    setChecking(true);
    setCheck(null);

    try {
      setCheck(await api.checkGeminiKey());
    } catch (error) {
      onError(error);
    } finally {
      setChecking(false);
    }
  }

  async function save(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setSaveError(null);

    try {
      const info = await api.replaceGeminiKey(newKey);
      toast.success('Đã đổi key Gemini', {
        description: `Bot dùng key ${info.masked ?? ''} ngay từ câu hỏi tiếp theo.`,
      });
      setNewKey('');
      setEditing(false);
      setCheck(null);
      onChanged();
    } catch (error) {
      if (error instanceof ApiError && error.status !== 401) {
        setSaveError(error.message);
      } else {
        onError(error);
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <KeyRoundIcon className="size-4 text-muted-foreground" />
          Key đang dùng
        </CardTitle>
        <CardDescription>
          Key thật chỉ nằm trên máy chủ; trang chỉ hiện vài ký tự đầu và cuối.
        </CardDescription>
        <CardAction>
          <Button
            variant="outline"
            size="sm"
            onClick={() => void runCheck()}
            disabled={checking || !keyInfo.configured}
          >
            {checking ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <ShieldCheckIcon />
            )}
            Kiểm tra
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <div>
          <Row label="Key">
            <code className="font-mono">
              {keyInfo.masked ?? 'Chưa có (GEMINI_API_KEY trống)'}
            </code>
          </Row>
          <Row label="Model">{keyInfo.model}</Row>
          {keyInfo.fingerprint && (
            <Row label="Mã nhận diện">
              <code className="font-mono text-xs">{keyInfo.fingerprint}</code>
            </Row>
          )}
          {keyInfo.changedAt && (
            <Row label="Đổi trên trang lúc">
              {formatDateTime(keyInfo.changedAt)}
            </Row>
          )}
        </div>

        {check &&
          (check.ok ? (
            <p className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
              <CircleCheckIcon className="mt-0.5 size-4 shrink-0" />
              <span>
                Key hoạt động với {check.displayName ?? check.model}
                {check.inputTokenLimit !== null &&
                  ` (tối đa ${formatNumber(check.inputTokenLimit)} token đầu vào mỗi câu)`}
                .
              </span>
            </p>
          ) : (
            <p className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              <CircleXIcon className="mt-0.5 size-4 shrink-0" />
              <span>
                <span className="font-medium">
                  {errorLabel(check.error.kind)}
                  {check.error.status !== null && ` (${check.error.status})`}:
                </span>{' '}
                {check.error.message}
              </span>
            </p>
          ))}

        {editing ? (
          <form className="flex flex-col gap-2" onSubmit={(e) => void save(e)}>
            <Label htmlFor="gemini-new-key">Key mới</Label>
            <Input
              id="gemini-new-key"
              type="password"
              autoComplete="off"
              spellCheck={false}
              placeholder="Dán key từ Google AI Studio"
              value={newKey}
              onChange={(event) => setNewKey(event.target.value)}
              aria-invalid={saveError !== null}
              autoFocus
            />
            {saveError && (
              <p className="text-sm text-destructive">{saveError}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Bot kiểm tra key với Google trước khi lưu, rồi dùng luôn mà không
              cần khởi động lại.
            </p>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setEditing(false);
                  setNewKey('');
                  setSaveError(null);
                }}
              >
                Hủy
              </Button>
              <Button
                type="submit"
                size="sm"
                disabled={saving || newKey.trim().length === 0}
              >
                {saving && <Loader2Icon className="animate-spin" />}
                Kiểm tra và lưu
              </Button>
            </div>
          </form>
        ) : (
          <Button variant="secondary" onClick={() => setEditing(true)}>
            <KeyRoundIcon />
            Đổi key mới
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
