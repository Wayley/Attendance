export function padNumber(n) {
  if (n < 10) {
    return '0' + n;
  }
  return n;
}
export function parseDate(d) {
  return (
    d.getFullYear() +
    '-' +
    padNumber(d.getMonth() + 1) +
    '-' +
    padNumber(d.getDate())
  );
}
