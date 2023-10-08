export function padNumber(n) {
  return n < 10 ? '0' + n : n;
}
export function parseDate(date, conjunction = '-') {
  const y = date.getFullYear();
  const m = padNumber(date.getMonth() + 1);
  const d = padNumber(date.getDate());
  return y + conjunction + m + conjunction + d;
}

// 864e5 == 86400000 == 24*60*60*1000
export function getFutureDates(numberOfDays) {
  const array = [];
  for (let i = 1; i <= numberOfDays; i++) {
    let now = Date.now();
    if (i > 8) {
      // set dates on the next month
      const newMonth = new Date(now).getMonth() + 1;
      now = new Date(now).setMonth(newMonth);
    }
    const date = new Date(now + 864e5 * i);
    array.push(date.toISOString().split('T')[0]);
  }
  return array;
}
export function getPastDate(gapOfDays) {
  return new Date(Date.now() - 864e5 * gapOfDays).toISOString().split('T')[0];
}
