const { toLocaleString, toLocaleDateString } = require('./util/DateTimeHelper');

const today = new Date();
const createAt = toLocaleString(today);
const todayDateStr = toLocaleDateString(today);

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowDateStr = toLocaleDateString(tomorrow);

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayDateStr = toLocaleDateString(yesterday);

const specificDay = new Date(2023, 8, 8, 7, 30, 0);
const specificDayDateStr = toLocaleDateString(specificDay);

let courses = [
  {
    id: 0,
    createAt,
    startTime: `${specificDayDateStr} 08:00:00`,
    endTime: `${specificDayDateStr} 08:40:00`,
    type: 2, // 1/2
    status: 12, // 10 已创建 11 已过期/未上  12 课程已上 13 已取消
  },
  {
    id: 1,
    createAt,
    startTime: `${yesterdayDateStr} 08:00:00`,
    endTime: `${yesterdayDateStr} 08:40:00`,
    type: 1,
    status: 11,
  },
  {
    id: 2,
    createAt,
    startTime: `${yesterdayDateStr} 15:00:00`,
    endTime: `${yesterdayDateStr} 15:40:00`,
    type: 2,
    status: 12,
  },
  {
    id: 3,
    createAt,
    startTime: `${todayDateStr} 08:00:00`,
    endTime: `${todayDateStr} 08:40:00`,
    type: 1,
    status: 13,
  },
  {
    id: 4,
    createAt,
    startTime: `${tomorrowDateStr} 08:00:00`,
    endTime: `${tomorrowDateStr} 08:40:00`,
    type: 2,
    status: 10,
  },
];

module.exports = { courses };
