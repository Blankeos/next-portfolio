import dayjs from 'dayjs';

export function formatDate(dateString: string) {
  return dayjs(dateString).format('MMMM DD, YYYY');
}
