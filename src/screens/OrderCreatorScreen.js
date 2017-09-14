import React, {Component} from 'react';
import { connect } from 'react-redux';

import OrderForm from '../components/OrderForm';

class OrderCreatorScreen extends React.Component {
    render(){
        return (
            <OrderForm {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps) (OrderCreatorScreen);


