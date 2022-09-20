export function padNumber(n) {
  return n < 10 ? '0' + n : n;
}
export function parseDate(date, conjunction = '-') {
  const y = date.getFullYear();
  const m = padNumber(date.getMonth() + 1);
  const d = padNumber(date.getDate());
  return y + conjunction + m + conjunction + d;
}
