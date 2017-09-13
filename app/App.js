import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import logger from 'redux-logger';

import Navigator, {MainScreenNavigator} from './Navigator';

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator navigation={this.props.navigation}/>
            </Provider>
        );
    }
}
App.router = MainScreenNavigator.router;

AppRegistry.registerComponent('reactTutorialApp', () => App);
