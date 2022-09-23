import React from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import isEmpty from 'lodash/isEmpty';
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import {parseDate} from '../../Utils';

function AgendaItem({item}) {
  const {date, time, notes} = item;
  return (
    <View>
      <Text>{date}</Text>
      <Text>{time}</Text>
      <Text>{notes}</Text>
    </View>
  );
}

const theme = {
  arrowColor: 'black',
  arrowStyle: {padding: 0},
  dayTextColor: '#00AAAF',
  disabledDotColor: 'grey',
  dotColor: '#00AAAF',
  dotStyle: {marginTop: -2},
  expandableKnobColor: '#00AAAF',
  monthTextColor: 'black',
  selectedDayBackgroundColor: '#00AAAF',
  selectedDayTextColor: 'white',
  selectedDotColor: 'white',
  textDayFontFamily: 'HelveticaNeue',
  textDayFontSize: 18,
  textDayFontWeight: '500',
  textDayHeaderFontFamily: 'HelveticaNeue',
  textDayHeaderFontSize: 12,
  textDayHeaderFontWeight: 'normal',
  textDayStyle: {marginTop: 2},
  textDisabledColor: 'grey',
  textMonthFontFamily: 'HelveticaNeue',
  textMonthFontSize: 16,
  textMonthFontWeight: 'bold',
  textSectionTitleColor: 'black',
  todayTextColor: '#af0078',
};
const sections = [
  {
    title: '2022-09-23',
    data: [
      {
        date: '2022-09-23',
        time: '11:30:00',
        notes: '2nd Record',
        updateAt: '2022-09-22 15:41:05',
      },
    ],
  },
  {
    title: '2022-09-20',
    data: [
      {
        date: '2022-09-23',
        time: '11:30:00',
        notes: '2nd Record',
        updateAt: '2022-09-22 15:41:05',
      },
    ],
  },
];

function getMarkedDates(s) {
  const marked = {};
  s.forEach(item => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = {marked: true};
    } else {
      marked[item.title] = {disabled: true};
    }
  });
  return marked;
}
export default function Page() {
  return (
    <CalendarProvider
      date={parseDate(new Date())}
      showTodayButton
      disabledOpacity={0.6}
      theme={{todayButtonTextColor: '#00AAAF'}}>
      <ExpandableCalendar
        initialPosition="open"
        testID="expandableCalendar"
        theme={theme}
        firstDay={1}
        markedDates={getMarkedDates(sections)}
        renderArrow={direction => (
          <Icon
            name={
              direction === 'left'
                ? 'chevron-back-outline'
                : 'chevron-forward-outline'
            }
            size={20}
            color="#1F65FF"
          />
        )}
      />
      <AgendaList
        sections={sections}
        renderItem={({item}) => <AgendaItem item={item} />}
        sectionStyle={styles.section}
      />
    </CalendarProvider>
  );
}

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  section: {
    backgroundColor: '#f2f7f7',
    color: 'grey',
    textTransform: 'capitalize',
  },
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
  },
  itemHourText: {
    color: 'black',
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14,
  },
});
