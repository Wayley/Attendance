import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Pages/Home';
import Vlog from './Pages/Vlog';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile/Index';
import UserInfo from './Pages/Profile/UserInfo';
import Settings from './Pages/Profile/Settings';
import Curriculum from './Pages/Curriculum';
import PunchRecord from './Pages/PunchRecord';

import './Locales/Calendar';

const Tab = createMaterialBottomTabNavigator();
function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: 'home',
          tabBarColor: '#1F65FF',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: '消息',
          tabBarIcon: 'bell',
          tabBarColor: '#E56791',
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Vlog"
        component={Vlog}
        options={{
          tabBarLabel: '随记',
          tabBarIcon: 'image-album',
          tabBarColor: '#6518F4',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: true,
          tabBarLabel: '我的',
          tabBarIcon: 'account',
          tabBarColor: '#006D6A',
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const screenOptions = {
  headerTitleStyle: {fontSize: 16},
  headerTitleAlign: 'center',
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RootTabs"
        screenOptions={{
          headerBackImage: ({tintColor}) => (
            <Icon name="chevron-back-outline" size={22} color={tintColor} />
          ),
        }}>
        <Stack.Screen
          name="RootTabs"
          component={RootTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfo}
          options={{title: '个人信息', ...screenOptions}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{title: '设置', ...screenOptions}}
        />
        <Stack.Screen
          name="Curriculum"
          component={Curriculum}
          options={{title: '课程安排', ...screenOptions}}
        />
        <Stack.Screen
          name="PunchRecord"
          component={PunchRecord}
          options={{title: '打卡记录', ...screenOptions}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
