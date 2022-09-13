import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import {parseDate} from '../Utils';

const color = '#1F65FF';
export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [markedDates, setMarkedDates] = useState(null);
  const onPress = () => {
    if (selectedDate) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };
  useEffect(() => {
    if (selectedDate) {
      let o = {};
      o[selectedDate] = {selected: true, selectedColor: color};
      setMarkedDates(o);
    } else {
      setMarkedDates(null);
    }
  }, [selectedDate]);
  return (
    <View style={styles.container}>
      <Calendar
        maxDate={parseDate(new Date())}
        renderArrow={direction => (
          <Icon
            name={
              direction === 'left'
                ? 'chevron-back-outline'
                : 'chevron-forward-outline'
            }
            size={20}
            color={color}
          />
        )}
        onDayPress={day => {
          const {dateString} = day;
          setSelectedDate(selectedDate === dateString ? null : dateString);
        }}
        markedDates={markedDates}
      />
      <Button
        color={color}
        title={loading ? '打卡中...' : '打卡'}
        disabled={selectedDate === null}
        onPress={() => onPress()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
});
