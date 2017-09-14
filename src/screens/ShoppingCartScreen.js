import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { View } from 'react-native'

import CartList from '../components/CartList';
import Badge from '../containers/Badge';

class ShoppingCartScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
        tabBarLabel: 'Cart',
        tabBarIcon: ({tintColor}) => (
            <View>
                <Badge tintColor={tintColor}/>
                <Icon
                    name="cart"
                    style={[{fontSize: 20}, {color: tintColor}]}
                />
            </View>
        ),
        title: 'Shopping Cart'
    }};

    render() {
        return (
            <CartList {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.items,
    }
};

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps) (ShoppingCartScreen);

