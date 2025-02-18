import { format, parseISO } from 'date-fns';

// convert RFC3339 timestamp ( '2021-03-21T00:00:00Z' ) to date object, optionally format
export const parseAPITimestamp = (timestamp, style) => {
  if (!timestamp) return;
  let date = parseISO(timestamp.split('T')[0]);
  if (!style) return date;
  return format(date, style);
};

// convert ISO timestamp '2021-03-21T00:00:00Z' to ['2021', 2]
// (e.g. 2021 March, month is zero indexed) (used by calendar widget)
export const parseRFC3339 = (timestamp) => {
  if (Array.isArray(timestamp)) {
    // return if already formatted correctly
    return timestamp;
  }
  let date = parseAPITimestamp(timestamp);
  return date ? [`${date.getFullYear()}`, date.getMonth()] : null;
};
