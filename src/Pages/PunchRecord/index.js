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

function AgendaItem({item}) {
  const {title, hour, duration} = item;
  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => Alert.alert(title)}
      style={styles.item}
      testID="item">
      <View>
        <Text style={styles.itemHourText}>{hour}</Text>
        <Text style={styles.itemDurationText}>{duration}</Text>
      </View>
      <Text style={styles.itemTitleText}>{title}</Text>
      <View style={styles.itemButtonContainer}>
        <Button
          color={'grey'}
          title="INFo"
          onPress={() => Alert.alert('Show me more2')}
        />
      </View>
    </TouchableOpacity>
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
    title: '2022-09-12',
    data: [{hour: '12am', duration: '1h', title: 'F222irst Yoga'}],
  },
  {
    title: '2022-09-16',
    data: [
      {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
      {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'},
    ],
  },
  {
    title: '2022-09-17',
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'},
    ],
  },
  {
    title: '2022-09-18',
    data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}],
  },
  {
    title: '2022-09-13',
    data: [],
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
      date="2022-09-16"
      showTodayButton
      disabledOpacity={0.6}
      theme={{todayButtonTextColor: '#00AAAF'}}>
      <ExpandableCalendar
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
