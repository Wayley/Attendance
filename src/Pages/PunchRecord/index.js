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

import sections from '../../mocks/punchRecord';

function AgendaItem({item}) {
  if (isEmpty(item)) {
    return (
      <View style={styles.item}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }
  const {id, time, notes} = item;

  const GoDetail = () => {
    // TODO:
    Alert.alert('', `id: ${id}`);
  };
  return (
    <TouchableOpacity
      onPress={() => Alert.alert(time, notes)}
      style={styles.item}>
      <View style={styles.itemMain}>
        <Text style={styles.itemTitle}>{time}</Text>
        <Text style={styles.itemNotes} numberOfLines={1}>
          {notes}
        </Text>
      </View>
      <Button title="Edit Record" onPress={GoDetail} />
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
        renderItem={({item, index}) => <AgendaItem item={item} key={index} />}
        sectionStyle={styles.section}
      />
    </CalendarProvider>
  );
}

const styles = StyleSheet.create({
  section: {color: 'grey'},
  item: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemMain: {flex: 1},
  itemTitle: {
    color: '#000',
    fontWeight: '400',
    fontSize: 16,
  },
  itemNotes: {
    color: '#777',
    fontSize: 14,
    marginTop: 4,
    marginLeft: 4,
  },
  emptyItemText: {
    color: '#aeaeae',
    fontSize: 14,
  },
});
