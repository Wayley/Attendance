import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default function Page({navigation}) {
  return (
    <View style={styles.container}>
      <Text>User Info!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Vlog" onPress={() => navigation.navigate('Vlog')} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to UserInfo"
        onPress={() => navigation.navigate('UserInfo')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
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
