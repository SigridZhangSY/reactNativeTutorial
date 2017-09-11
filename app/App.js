import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import OrdersListScreen from './screens/OrdersListScreen';

const MyApp = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  OrderList: {
    screen: OrdersListScreen,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 15,
    },
  },
});

AppRegistry.registerComponent('reactTutorialApp', () => MyApp);
