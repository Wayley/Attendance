import {getPastDate, getFutureDates} from '../Utils';

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(2);
const futureDates = getFutureDates(3);
const dates = [fastDate, today].concat(futureDates);

export const DATA = [
  {
    title: dates[0],
    data: [
      {
        time: '10:00:00',
        notes:
          'Lorem ipsum dolor sit amet consectetur elit color yay Joy. Just like this moment.',
        id: 101,
      },
      {time: '14:30:00', notes: 'Jiummy Lyney', id: 102},
    ],
  },
  {
    title: dates[1],
    data: [{time: '10:00:00', notes: 'Vinyasa Yoga', id: 103}],
  },
  {
    title: dates[2],
    data: [{}],
  },
  {
    title: dates[3],
    data: [{time: '10:00:00', notes: 'Vinyasa Yoga', id: 104}],
  },
  {
    title: dates[4],
    data: [{time: '11:00:00', notes: 'Tina Roye', id: 105}],
  },
];

export default DATA;
