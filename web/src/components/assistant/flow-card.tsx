import {
  BotMessageSquareIcon,
  ChevronRightIcon,
  MessageSquareTextIcon,
  ScrollTextIcon,
  SparklesIcon,
  type LucideIcon,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatNumber } from '@/lib/gemini';
import type { AssistantOverview } from '@/lib/types';
import { cn } from '@/lib/utils';

interface Step {
  icon: LucideIcon;
  tone: string;
  title: string;
  text: React.ReactNode;
}

/** How a /question travels from Discord to Gemini and back. */
export function FlowCard({
  overview,
  systemTokens,
}: {
  overview: AssistantOverview;
  systemTokens: number | null;
}) {
  const steps: Step[] = [
    {
      icon: MessageSquareTextIcon,
      tone: 'bg-indigo-50 text-indigo-600',
      title: 'Thành viên hỏi',
      text: (
        <>
          Gõ <code className="rounded bg-muted px-1">/question</code> trong
          Discord và nhập câu hỏi vào ô <b>text</b> (tối đa{' '}
          {formatNumber(overview.maxQuestionLength)} ký tự).
        </>
      ),
    },
    {
      icon: ScrollTextIcon,
      tone: 'bg-amber-50 text-amber-700',
      title:
        overview.knowledgeMode === 'retrieval'
          ? 'Bot chọn đoạn liên quan'
          : 'Bot ghép chỉ dẫn',
      text:
        overview.knowledgeMode === 'retrieval' ? (
          <>
            Bot tìm trong {formatNumber(overview.passageCount)} đoạn của{' '}
            {overview.sources.length} nguồn kiến thức (ngay trên máy chủ, không
            tốn lượt) rồi chỉ gửi tổng quan game và các đoạn khớp nhất, tối đa{' '}
            {formatNumber(overview.contextBudget)} ký tự thay vì{' '}
            {formatNumber(overview.systemCharacters)}.
          </>
        ) : (
          <>
            Câu hỏi được gửi kèm vai trò của bot và toàn bộ{' '}
            {overview.sources.length} nguồn kiến thức bên dưới (
            {formatNumber(overview.systemCharacters)} ký tự
            {systemTokens !== null && ` ≈ ${formatNumber(systemTokens)} token`}
            ).
          </>
        ),
    },
    {
      icon: SparklesIcon,
      tone: 'bg-sky-50 text-sky-600',
      title: 'Gemini trả lời',
      text: (
        <>
          Model <b>{overview.model}</b> suy nghĩ rồi viết câu trả lời, tổng cộng
          tối đa {formatNumber(overview.maxOutputTokens)} token. Mỗi lượt được
          đếm ở tab Gemini API.
        </>
      ),
    },
    {
      icon: BotMessageSquareIcon,
      tone: 'bg-emerald-50 text-emerald-600',
      title: 'Bot đăng câu trả lời',
      text: 'Bot trả lời công khai ngay trong kênh; câu dài được chia thành nhiều tin nhắn (Discord giới hạn 2.000 ký tự mỗi tin).',
    },
  ];

  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle className="text-base">
          Lệnh /question hoạt động thế nào
        </CardTitle>
        <CardDescription>
          Bot không nhớ các câu hỏi trước: mỗi lần hỏi là độc lập. Đường HTTP
          POST /question trên máy chủ bị IIS chặn, nên chỉ dùng được qua
          Discord.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="grid gap-3 md:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex h-full flex-col gap-2 rounded-xl border bg-muted/30 p-4">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-lg',
                      step.tone,
                    )}
                  >
                    <step.icon className="size-4" />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    Bước {index + 1}
                  </span>
                </div>
                <div className="text-sm font-semibold">{step.title}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRightIcon
                  aria-hidden
                  className="absolute top-1/2 -right-3 z-10 hidden size-4 -translate-y-1/2 rounded-full bg-background text-muted-foreground md:block"
                />
              )}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

/** The assistant's role sentence and the answering rules added on top. */
export function PersonaCard({ overview }: { overview: AssistantOverview }) {
  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle className="text-base">Vai trò và cách trả lời</CardTitle>
        <CardDescription>
          Đầu chỉ dẫn gửi cho Gemini, trước phần kiến thức.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 text-sm leading-relaxed">
        <blockquote className="rounded-lg border-l-4 border-sky-300 bg-sky-50/60 px-4 py-3">
          {overview.persona}
        </blockquote>
        <blockquote className="rounded-lg border-l-4 border-zinc-300 bg-muted/50 px-4 py-3 text-muted-foreground">
          {overview.guidance}
        </blockquote>
        {overview.knowledgeMode === 'retrieval' && (
          <blockquote className="rounded-lg border-l-4 border-amber-300 bg-amber-50/60 px-4 py-3 text-muted-foreground">
            {overview.retrievalNote}
          </blockquote>
        )}
      </CardContent>
    </Card>
  );
}
