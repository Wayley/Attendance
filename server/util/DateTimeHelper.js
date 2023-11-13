const locale = 'zh-CN';
const dateOption = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};
const dateTimeOption = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

function toLocaleString(date) {
  return date.toLocaleString(locale, { ...dateOption, ...dateTimeOption });
}

function toLocaleDateString(date) {
  return date.toLocaleDateString(locale, dateOption);
}

module.exports = { toLocaleString, toLocaleDateString };
