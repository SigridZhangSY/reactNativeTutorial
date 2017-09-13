import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import OrdersListScreen from './screens/OrdersListScreen';
import ProductionScreen from './screens/ProductionScreen';

export const MainScreenNavigator = TabNavigator({
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

const Navigator = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Production: { screen: ProductionScreen },
});

export default Navigator;