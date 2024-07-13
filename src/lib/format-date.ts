import dayjs from 'dayjs';

export function formatDate(dateString: string) {
  return dayjs(dateString).format('MMMM DD, YYYY');
}

export function formatDateShort(dateString: string) {
  return dayjs(dateString).format('MMM DD, YYYY').toLowerCase();
}
