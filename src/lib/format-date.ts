import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export function formatDate(dateString: string | Date) {
  return dayjs(dateString).format('MMMM DD, YYYY');
}

export function formatDateShort(
  dateString: string | Date,
  opts?: { lower: boolean }
) {
  if (opts?.lower)
    return dayjs(dateString).format('MMM DD, YYYY').toLowerCase();

  return dayjs(dateString).format('MMM DD, YYYY');
}

export function formatDateMonthOnly(
  dateString: string | Date,
  opts?: { lower: boolean }
) {
  if (opts?.lower) return dayjs(dateString).format('MMM YYYY').toLowerCase();

  return dayjs(dateString).format('MMM YYYY');
}

export function formatDateRange(
  dates: [string | Date, (string | Date) | 'Present'] | [string | Date],
  opts?: { lower: boolean }
) {
  const defaultOpts = { lower: false, ...opts };
  if (dates.length === 1) {
    return formatDateMonthOnly(dates[0], { lower: defaultOpts.lower });
  }

  if (dates[1] === 'Present') {
    return (
      formatDateMonthOnly(dates[0], { lower: defaultOpts.lower }) + ' - Present'
    );
  }

  return (
    formatDateMonthOnly(dates[0], { lower: defaultOpts.lower }) +
    ' - ' +
    formatDateMonthOnly(dates[1], { lower: defaultOpts.lower })
  );
}

export function formatDateRangeWithDuration(
  dates: [string | Date, (string | Date) | 'Present'] | [string | Date],
  opts?: { lower: boolean }
) {
  const defaultOpts = { lower: false, ...opts };

  // 1. Calculate duration.
  const duration = (() => {
    if (dates.length === 1) {
      return 1;
    }

    if (dates[1] === 'Present') {
      return Math.ceil(dayjs().diff(dayjs(dates[0]), 'month', true));
    }

    return Math.ceil(dayjs(dates[1]).diff(dayjs(dates[0]), 'month', true));
  })();

  return (
    formatDateRange(dates, { lower: defaultOpts.lower }) +
    ` (${duration} mo${duration > 1 ? 's' : ''})`
  );
}
