import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Icon } from 'native-base';

import CartList from '../components/CartList';

class ShoppingCartScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Cart',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="cart"
                style={[{fontSize: 20}, {color: tintColor}]}
            />
        ),
        title: 'Shopping Cart'
    };

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

