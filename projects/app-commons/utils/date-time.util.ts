import { fromUnixTime, getUnixTime } from 'date-fns';

export function convertToTimestamp(date: Date): number | undefined {
  return date ? getUnixTime(date) : undefined;
}

export function convertToDate(timestamp: number): Date | undefined {
  return timestamp ? fromUnixTime(timestamp) : undefined;
}
