import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import ProductionListScreen from './screens/ProductionListScreen';
import OrdersListScreen from './screens/OrdersListScreen';
import ProductionScreen from './screens/ProductionScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';
import OrderCreatorScreen from './screens/OrderCreatorScreen';

export const MainScreenNavigator = TabNavigator({
    Home: {
        screen: ProductionListScreen,
    },
    Cart: {
        screen: ShoppingCartScreen,
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
            fontSize: 10,
        },
    },
});

const Navigator = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Production: { screen: ProductionScreen },
    NewOrder: { screen: OrderCreatorScreen}
});

export default Navigator;