import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption<T extends string | number> {
  value: T;
  label: React.ReactNode;
  /** Text used for type-ahead; defaults to the label when it is a string. */
  textValue?: string;
  disabled?: boolean;
}

interface SelectProps<T extends string | number> {
  value: T;
  onValueChange: (value: T) => void;
  options: readonly SelectOption<T>[];
  id?: string;
  className?: string;
  disabled?: boolean;
  size?: 'default' | 'sm';
  'aria-label'?: string;
}

const LIST_GAP = 4;
const LIST_MAX_HEIGHT = 288;
/** Below this viewport width (Tailwind's sm) the list opens wider. */
const PHONE_WIDTH = 640;

/** Lower case without Vietnamese accents, for type-ahead. */
function plain(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

function optionText<T extends string | number>(option: SelectOption<T>) {
  if (option.textValue) return option.textValue;
  return typeof option.label === 'string' ? option.label : String(option.value);
}

/**
 * Dropdown styled like the other inputs. The list opens in the browser's top
 * layer (Popover API), so it is never clipped by a dialog or a scroll box and
 * it stays above an open <dialog>.
 */
function Select<T extends string | number>({
  value,
  onValueChange,
  options,
  id,
  className,
  disabled,
  size = 'default',
  'aria-label': ariaLabel,
}: SelectProps<T>) {
  const autoId = React.useId();
  const triggerId = id ?? `select-${autoId}`;
  const listId = `${triggerId}-list`;
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);
  const typed = React.useRef({ text: '', at: 0 });

  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(-1);
  const [placement, setPlacement] = React.useState<React.CSSProperties>({});

  const selectedIndex = options.findIndex((o) => o.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  const place = React.useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom - LIST_GAP - 8;
    const above = rect.top - LIST_GAP - 8;
    const openUp = below < Math.min(LIST_MAX_HEIGHT, 160) && above > below;
    const room = Math.max(
      120,
      Math.min(LIST_MAX_HEIGHT, openUp ? above : below),
    );
    // Phones get a wide list (shifted left to fit) so labels stay readable.
    const preferred = window.innerWidth < PHONE_WIDTH ? 288 : 160;
    const width = Math.min(
      Math.max(rect.width, preferred),
      window.innerWidth - 16,
    );
    const left = Math.max(
      8,
      Math.min(rect.left, window.innerWidth - width - 8),
    );
    setPlacement({
      left,
      minWidth: width,
      // Grow for long labels, but never past the right edge of the screen.
      maxWidth: Math.max(width, Math.min(360, window.innerWidth - left - 8)),
      maxHeight: room,
      ...(openUp
        ? { bottom: window.innerHeight - rect.top + LIST_GAP }
        : { top: rect.bottom + LIST_GAP }),
    });
  }, []);

  const openList = React.useCallback(
    (start?: number) => {
      if (disabled) return;
      place();
      setActive(start ?? (selectedIndex >= 0 ? selectedIndex : 0));
      setOpen(true);
    },
    [disabled, place, selectedIndex],
  );

  const close = React.useCallback((refocus = true) => {
    setOpen(false);
    if (refocus) triggerRef.current?.focus();
  }, []);

  const choose = (index: number) => {
    const option = options[index];
    if (!option || option.disabled) return;
    if (option.value !== value) onValueChange(option.value);
    close();
  };

  // Show/hide the list in the top layer.
  React.useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (open) {
      if (!list.matches(':popover-open')) list.showPopover();
      list.focus({ preventScroll: true });
    } else if (list.matches(':popover-open')) {
      list.hidePopover();
    }
  }, [open]);

  // Keep the list next to its trigger; close on outside clicks.
  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !listRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        close(false);
      }
    };
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    return () => {
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', place, true);
      document.removeEventListener('pointerdown', onPointerDown, true);
    };
  }, [open, place, close]);

  // Scroll the active option into view.
  React.useEffect(() => {
    if (!open || active < 0) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [open, active]);

  const step = (from: number, delta: number) => {
    for (let i = 1; i <= options.length; i++) {
      const next = (from + delta * i + options.length * i) % options.length;
      if (!options[next].disabled) return next;
    }
    return from;
  };

  const typeAhead = (key: string) => {
    const now = Date.now();
    typed.current.text =
      now - typed.current.at < 700 ? typed.current.text + key : key;
    typed.current.at = now;
    const query = plain(typed.current.text);
    const current = open ? active : selectedIndex;
    const start = current >= 0 ? current : 0;
    for (let i = 0; i < options.length; i++) {
      const index =
        (start + (typed.current.text.length > 1 ? 0 : 1) + i) % options.length;
      const option = options[index];
      if (!option.disabled && plain(optionText(option)).startsWith(query)) {
        return index;
      }
    }
    return -1;
  };

  const onTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
      event.preventDefault();
      openList(
        event.key === 'ArrowUp' && selectedIndex < 0
          ? options.length - 1
          : undefined,
      );
    } else if (event.key.length === 1 && /\S/.test(event.key)) {
      const index = typeAhead(event.key);
      if (index >= 0 && options[index].value !== value) {
        onValueChange(options[index].value);
      }
    }
  };

  const onListKeyDown = (event: React.KeyboardEvent) => {
    const handled = () => {
      event.preventDefault();
      event.stopPropagation();
    };
    switch (event.key) {
      case 'ArrowDown':
        handled();
        setActive((i) => step(i, 1));
        break;
      case 'ArrowUp':
        handled();
        setActive((i) => step(i, -1));
        break;
      case 'Home':
        handled();
        setActive(step(-1, 1));
        break;
      case 'End':
        handled();
        setActive(step(options.length, -1));
        break;
      case 'Enter':
      case ' ':
        handled();
        choose(active);
        break;
      case 'Escape':
        // Close only the list, not a surrounding <dialog>.
        handled();
        close();
        break;
      case 'Tab':
        close(false);
        break;
      default:
        if (event.key.length === 1 && /\S/.test(event.key)) {
          const index = typeAhead(event.key);
          if (index >= 0) setActive(index);
        }
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={ariaLabel}
        disabled={disabled}
        data-slot="select-trigger"
        data-state={open ? 'open' : 'closed'}
        onClick={() => (open ? close() : openList())}
        onKeyDown={onTriggerKeyDown}
        className={cn(
          'flex w-full min-w-0 cursor-pointer items-center justify-between gap-2 rounded-md border border-input bg-background text-left text-sm shadow-xs transition-[color,box-shadow] outline-none',
          'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          'data-[state=open]:border-ring data-[state=open]:ring-[3px] data-[state=open]:ring-ring/50',
          'disabled:cursor-not-allowed disabled:opacity-50',
          size === 'sm' ? 'h-8 pr-2 pl-2.5' : 'h-9 pr-2.5 pl-3',
          className,
        )}
      >
        <span className="truncate">{selected?.label ?? ''}</span>
        <ChevronDownIcon
          className={cn(
            'size-4 shrink-0 text-muted-foreground transition-transform duration-150',
            open && 'rotate-180',
          )}
        />
      </button>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        popover="manual"
        tabIndex={-1}
        aria-labelledby={triggerId}
        aria-activedescendant={
          open && active >= 0 ? `${listId}-${active}` : undefined
        }
        data-slot="select-content"
        onKeyDown={onListKeyDown}
        style={placement}
        className="fixed inset-auto m-0 overflow-y-auto rounded-lg border bg-background p-1 text-foreground shadow-lg outline-none"
      >
        {options.map((option, index) => {
          const isSelected = option.value === value;
          return (
            <li
              key={String(option.value)}
              id={`${listId}-${index}`}
              data-index={index}
              role="option"
              aria-selected={isSelected}
              aria-disabled={option.disabled || undefined}
              data-active={index === active || undefined}
              onPointerMove={() => !option.disabled && setActive(index)}
              onClick={() => choose(index)}
              className={cn(
                'relative flex cursor-pointer items-center gap-2 rounded-md py-1.5 pr-8 pl-2.5 text-sm select-none',
                'data-[active]:bg-accent data-[active]:text-accent-foreground',
                isSelected && 'font-medium',
                option.disabled && 'pointer-events-none opacity-50',
              )}
            >
              <span className="truncate">{option.label}</span>
              {isSelected && (
                <CheckIcon className="absolute right-2.5 size-4 text-primary" />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export { Select };
