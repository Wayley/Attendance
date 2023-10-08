import * as React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function NavItem({onPress, Icon, noBorder, children, ...props}) {
  return (
    <TouchableHighlight
      onPress={() => {
        onPress && onPress();
      }}
      {...props}>
      <View style={styles.profileItem}>
        {Icon && <Icon style={styles.profileItemIcon} />}
        <View
          style={[
            styles.profileItemMain,
            noBorder ? styles.profileItemMainNoBorder : null,
          ]}>
          <View style={styles.profileItemChild}>{children}</View>
          <Ionicon
            name="chevron-forward-outline"
            size={17}
            color="#1F65FF"
            style={styles.profileItemRightArrow}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  profileItem: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileItemIcon: {
    width: 40,
    textAlign: 'center',
  },
  profileItemMain: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  profileItemMainNoBorder: {
    borderBottomWidth: 0,
  },
  profileItemChild: {
    flex: 1,
  },
  profileItemRightArrow: {
    paddingRight: 10,
  },
});
