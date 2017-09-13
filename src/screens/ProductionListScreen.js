import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import ProductionList from '../components/ProductionList';
import { readProductions } from '../actions/production';

class ProductionListScreen extends React.Component {
    componentWillMount() {
        this.props.loadProductions();
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="home"
                style={[{fontSize: 20}, {color: tintColor}]}
            />
        ),
        title: 'Production List'
    };

    render() {
        return (
            <ProductionList {...this.props}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        productions: state.productionList.data,
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadProductions: () => {
        dispatch(readProductions());
    }
});
export default connect(mapStateToProps, mapDispatchToProps) (ProductionListScreen);
