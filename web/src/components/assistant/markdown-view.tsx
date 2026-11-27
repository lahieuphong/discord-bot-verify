import { Fragment, memo, useMemo } from 'react';
import {
  highlightParts,
  parseBlocks,
  parseInline,
  splitLabel,
  type Block,
} from '@/lib/markdown-lite';
import { cn } from '@/lib/utils';

/** Plain text with the search matches marked. */
function Highlighted({ text, query }: { text: string; query?: string }) {
  if (!query) return <>{text}</>;

  return (
    <>
      {highlightParts(text, query).map((part, index) =>
        part.match ? (
          <mark
            key={index}
            className="rounded-sm bg-amber-200/80 px-0.5 text-inherit"
          >
            {part.text}
          </mark>
        ) : (
          <Fragment key={index}>{part.text}</Fragment>
        ),
      )}
    </>
  );
}

/** One line of text: bold/italic/code spans, search matches marked. */
export function InlineText({ text, query }: { text: string; query?: string }) {
  return (
    <>
      {parseInline(text).map((part, index) => {
        const content = <Highlighted text={part.text} query={query} />;

        switch (part.kind) {
          case 'bold':
            return (
              <strong key={index} className="font-semibold text-foreground">
                {content}
              </strong>
            );
          case 'italic':
            return <em key={index}>{content}</em>;
          case 'code':
            return (
              <code
                key={index}
                className="rounded bg-muted px-1 font-mono text-[0.9em]"
              >
                {content}
              </code>
            );
          default:
            return <Fragment key={index}>{content}</Fragment>;
        }
      })}
    </>
  );
}

/** A line with an optional "Label: rest" prefix shown in bold. */
function LabelledText({ text, query }: { text: string; query?: string }) {
  const split = splitLabel(text);

  if (!split) return <InlineText text={text} query={query} />;

  return (
    <>
      <span className="font-semibold text-foreground">
        <InlineText text={split.label} query={query} />:
      </span>{' '}
      <InlineText text={split.rest} query={query} />
    </>
  );
}

// Real heading elements (the page title is h1, card titles sit above).
const HEADING_TAG = { 1: 'h3', 2: 'h4', 3: 'h5', 4: 'h6' } as const;
const HEADING_STYLE: Record<number, string> = {
  1: 'text-base font-semibold',
  2: 'mt-2 border-b pb-1 text-[15px] font-semibold',
  3: 'text-sm font-semibold text-sky-800',
  4: 'text-sm font-semibold text-foreground/90',
};

function BlockView({ block, query }: { block: Block; query?: string }) {
  switch (block.kind) {
    case 'heading': {
      const Tag = HEADING_TAG[block.level];
      return (
        <Tag className={cn('pt-1', HEADING_STYLE[block.level])}>
          <InlineText text={block.text} query={query} />
        </Tag>
      );
    }
    case 'rule':
      return <hr className="my-1 border-border" />;
    case 'quote':
      return (
        <blockquote className="border-l-4 border-zinc-300 pl-3 text-muted-foreground">
          {block.lines.map((line, index) => (
            <p key={index}>
              <InlineText text={line} query={query} />
            </p>
          ))}
        </blockquote>
      );
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul';
      return (
        // role="list": Safari drops list semantics on unstyled lists.
        <List role="list" className="flex flex-col gap-1">
          {block.items.map((item, index) => (
            <li
              key={index}
              className={cn('flex gap-2', item.depth > 0 && 'ml-6')}
            >
              <span
                className={cn(
                  'shrink-0 text-muted-foreground tabular-nums',
                  item.marker === '•'
                    ? 'w-3 text-center'
                    : 'min-w-6 text-right',
                )}
                aria-hidden
              >
                {item.marker}
              </span>
              <span className="min-w-0">
                <LabelledText text={item.text} query={query} />
              </span>
            </li>
          ))}
        </List>
      );
    }
    case 'paragraph':
      return (
        <div className="flex flex-col gap-1">
          {block.lines.map((line, index) => (
            <p key={index}>
              <LabelledText text={line} query={query} />
            </p>
          ))}
        </div>
      );
  }
}

/**
 * Markdown (or plain wiki text) rendered as headings, lists and paragraphs.
 * `plainHeadings`: treat short stand-alone lines as headings (the wiki).
 * Memoised: the whole wiki is ~15k elements, re-rendered only when its text
 * changes.
 */
export const MarkdownView = memo(function MarkdownView({
  text,
  query,
  plainHeadings = false,
  className,
}: {
  text: string;
  query?: string;
  plainHeadings?: boolean;
  className?: string;
}) {
  const blocks = useMemo(
    () => parseBlocks(text, { plainHeadings }),
    [text, plainHeadings],
  );

  return (
    <div
      className={cn('flex flex-col gap-2 text-sm leading-relaxed', className)}
    >
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} query={query} />
      ))}
    </div>
  );
});
