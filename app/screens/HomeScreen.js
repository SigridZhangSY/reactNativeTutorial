import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('OrderList')}
                title="Go to Orders List"
            />
        );
    }
}

export default HomeScreen;
