import * as React from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Image} from 'react-native';
import NavItem from '../../Components/NavItem';
import Ionicon from 'react-native-vector-icons/Ionicons';
import avatar from '../../Assets/avatar.jpg';
const color = '#1F65FF';
const titleProps = {numberOfLines: 1, ellipsizeMode: 'tail'};
const Icon = props => <Ionicon size={16} color={color} {...props} />;

export default function Profile({navigation}) {
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <NavItem noBorder onPress={() => navigate('UserInfo')}>
          <View style={styles.userInfoMain}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.userInfoWrapper}>
              <Text style={[styles.fontSize18]}>ROBBEN WADLEY</Text>
              <TouchableHighlight>
                <View style={styles.userStatus}>
                  <Ionicon name="add-outline" size={16} color="#ccc" />
                  <Text style={[styles.fontSize12]}>状态</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </NavItem>
      </View>
      <NavItem
        Icon={props => <Icon name="business-outline" {...props} />}
        onPress={() => navigate('Curriculum')}>
        <Text {...titleProps}>课程安排</Text>
      </NavItem>
      <NavItem
        Icon={props => <Icon name="calendar-outline" {...props} />}
        onPress={() => navigate('PunchRecord')}>
        <Text {...titleProps}>打卡记录</Text>
      </NavItem>
      <NavItem
        Icon={props => <Icon name="settings-outline" {...props} />}
        onPress={() => navigate('Settings')}
        noBorder>
        <Text {...titleProps}>设置</Text>
      </NavItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  userInfo: {
    marginBottom: 20,
    paddingTop: 25,
    backgroundColor: '#fff',
  },
  userInfoMain: {
    flexDirection: 'row',
  },
  userInfoWrapper: {
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  userStatus: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    width: 60,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 2,
    marginLeft: 20,
  },
  fontSize12: {
    fontSize: 12,
  },
  fontSize18: {
    fontSize: 18,
  },
});
