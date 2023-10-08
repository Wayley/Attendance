import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Vlog() {
  return (
    <View style={styles.container}>
      <Text>Vlog!</Text>
      <Icon name="rocket" size={20} color="#900" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
