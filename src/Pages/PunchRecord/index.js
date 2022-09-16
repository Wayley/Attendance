//
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Punch Record!</Text>
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
