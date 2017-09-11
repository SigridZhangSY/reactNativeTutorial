import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

class OrdersListScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Orders',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Home')}
                title="Go to Home"
            />
        );
    }
}

export default OrdersListScreen;
