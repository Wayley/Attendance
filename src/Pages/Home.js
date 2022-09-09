import * as React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
const color = '#1F65FF';
export default function Home() {
  return (
    <View style={styles.container}>
      <Calendar
        disableMonthChange={true}
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
      />

      <Button
        color={color}
        title="打卡"
        onPress={() => console.log('UserInfo')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
