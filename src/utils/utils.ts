import { formatDistanceToNow } from 'date-fns';

export function getTimeAgo(date: number): string {
  const dateObj = new Date(date * 1000); // convert Unix timestamp to Date object
  return formatDistanceToNow(dateObj, { addSuffix: true });
}

export function getDomainFromLink(link: string): string {
  try {
    const url = new URL(link);
    return url.hostname;
  } catch (error) {
    console.error(error);
    return 'Source is unknown';
  }
}
