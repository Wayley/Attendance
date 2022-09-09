import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from './Pages/Home';
import Vlog from './Pages/Vlog';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile/Index';
import UserInfo from './Pages/Profile/UserInfo';
import Settings from './Pages/Profile/Settings';

const Tab = createMaterialBottomTabNavigator();
function RootTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: 'home',
          tabBarColor: '#6518F4',
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
          tabBarColor: '#1F65FF',
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
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RootTabs">
        <Stack.Screen
          name="RootTabs"
          component={RootTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
