/**
 * Gemini API daily quotas reset at midnight Pacific time, so "today" for
 * usage counting is a Pacific calendar day, not a Vietnamese one.
 */
export const QUOTA_TIME_ZONE = 'America/Los_Angeles';

const HOUR_MS = 60 * 60 * 1000;

function wallClockParts(instant: number, timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(new Date(instant));
  const get = (type: string) =>
    Number(parts.find((part) => part.type === type)?.value);

  return {
    year: get('year'),
    month: get('month'),
    day: get('day'),
    hour: get('hour'),
    minute: get('minute'),
    second: get('second'),
  };
}

/** Offset of `timeZone` from UTC at `instant`, in ms (PST = -8 h). */
function offsetAt(instant: number, timeZone: string): number {
  const p = wallClockParts(instant, timeZone);
  const asUtc = Date.UTC(
    p.year,
    p.month - 1,
    p.day,
    p.hour,
    p.minute,
    p.second,
  );
  return asUtc - Math.floor(instant / 1000) * 1000;
}

/** "YYYY-MM-DD" of the quota day containing `instant`. */
export function quotaDayKey(instant: Date, timeZone = QUOTA_TIME_ZONE): string {
  const p = wallClockParts(instant.getTime(), timeZone);
  return `${p.year}-${String(p.month).padStart(2, '0')}-${String(p.day).padStart(2, '0')}`;
}

/** Start (midnight in `timeZone`) of the quota day containing `instant`. */
export function quotaDayStart(instant: Date, timeZone = QUOTA_TIME_ZONE): Date {
  const p = wallClockParts(instant.getTime(), timeZone);
  const guess = Date.UTC(p.year, p.month - 1, p.day);
  let start = guess - offsetAt(guess, timeZone);
  // Re-check with the offset at the found instant (DST changes at 2 am).
  start = guess - offsetAt(start, timeZone);
  return new Date(start);
}

/** When the current quota day ends (the next reset). */
export function nextQuotaReset(
  instant: Date,
  timeZone = QUOTA_TIME_ZONE,
): Date {
  const start = quotaDayStart(instant, timeZone).getTime();
  // 36 h later is always inside the next day, even across DST changes.
  return quotaDayStart(new Date(start + 36 * HOUR_MS), timeZone);
}
