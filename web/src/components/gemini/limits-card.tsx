import {
  ExternalLinkIcon,
  Loader2Icon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { api, ApiError } from '@/lib/api';
import { formatDateTime } from '@/lib/format';
import { formatNumber, parseLimitInput } from '@/lib/gemini';
import type { GeminiLimits, GeminiUsage } from '@/lib/types';

const FIELDS: { key: keyof GeminiLimits; label: string; unit: string }[] = [
  { key: 'rpd', label: 'Lượt gọi mỗi ngày (RPD)', unit: 'lượt/ngày' },
  { key: 'rpm', label: 'Lượt gọi mỗi phút (RPM)', unit: 'lượt/phút' },
  { key: 'tpm', label: 'Token đầu vào mỗi phút (TPM)', unit: 'token/phút' },
];

type Draft = Record<keyof GeminiLimits, string>;

function toDraft(limits: GeminiLimits): Draft {
  return {
    rpd: limits.rpd?.toString() ?? '',
    rpm: limits.rpm?.toString() ?? '',
    tpm: limits.tpm?.toString() ?? '',
  };
}

export function LimitsCard({
  limits,
  learned,
  onChanged,
  onError,
}: {
  limits: GeminiLimits;
  learned: GeminiUsage['learnedLimits'] | null;
  onChanged: () => void;
  onError: (error: unknown) => void;
}) {
  const [draft, setDraft] = useState<Draft>(() => toDraft(limits));
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Follow limits saved elsewhere (another admin or browser tab). Keyed on
  // the values, not the object, so a usage reload does not wipe typing.
  const savedKey = JSON.stringify(toDraft(limits));
  useEffect(() => setDraft(JSON.parse(savedKey) as Draft), [savedKey]);

  const dirty = JSON.stringify(draft) !== savedKey;

  async function save(event: FormEvent) {
    event.preventDefault();
    const parsed = {
      rpd: parseLimitInput(draft.rpd),
      rpm: parseLimitInput(draft.rpm),
      tpm: parseLimitInput(draft.tpm),
    };

    if (Object.values(parsed).includes('invalid')) {
      setFormError('Hạn mức phải là số nguyên dương; để trống nếu chưa biết.');
      return;
    }

    setSaving(true);
    setFormError(null);

    try {
      await api.updateGeminiLimits(parsed as GeminiLimits);
      toast.success('Đã lưu hạn mức');
      onChanged();
    } catch (error) {
      if (error instanceof ApiError && error.status !== 401) {
        setFormError(error.message);
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
          <SlidersHorizontalIcon className="size-4 text-muted-foreground" />
          Hạn mức
        </CardTitle>
        <CardDescription>
          Google không cho bot đọc hạn mức của key. Nhập các số trong AI Studio
          (mục Rate limit của model đang dùng) để trang tính còn lại bao nhiêu.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" onSubmit={(e) => void save(e)}>
          {FIELDS.map((field) => {
            const learnedValue = learned?.[field.key] ?? null;

            return (
              <div key={field.key} className="flex flex-col gap-1.5">
                <Label htmlFor={`limit-${field.key}`}>{field.label}</Label>
                <Input
                  id={`limit-${field.key}`}
                  inputMode="numeric"
                  placeholder="Chưa biết"
                  value={draft[field.key]}
                  onChange={(event) =>
                    setDraft({ ...draft, [field.key]: event.target.value })
                  }
                />
                {learnedValue !== null &&
                  String(learnedValue) !== draft[field.key] && (
                    <button
                      type="button"
                      className="w-fit cursor-pointer text-left text-xs text-sky-700 hover:underline"
                      onClick={() =>
                        setDraft({
                          ...draft,
                          [field.key]: String(learnedValue),
                        })
                      }
                    >
                      Google báo {formatNumber(learnedValue)} {field.unit}
                      {learned?.at && ` (${formatDateTime(learned.at)})`} · dùng
                      số này
                    </button>
                  )}
              </div>
            );
          })}

          {formError && <p className="text-sm text-destructive">{formError}</p>}

          <div className="flex items-center justify-between gap-2">
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            >
              Mở AI Studio
              <ExternalLinkIcon className="size-3" />
            </a>
            <Button type="submit" size="sm" disabled={saving || !dirty}>
              {saving && <Loader2Icon className="animate-spin" />}
              Lưu hạn mức
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
