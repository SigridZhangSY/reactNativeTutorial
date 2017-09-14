import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';



const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -5,
        right: -13,
        height: 16,
        width: 16,
        borderRadius: 8,
    },
    badgeText: {
        fontSize: 10,
        color: 'white',
        width: 6,
        position: 'absolute',
        top: 2,
        left: 5
    }
});

class Badge extends React.Component{
    render(){
        return (
            <View style={[
                styles.badge,{backgroundColor: this.props.tintColor}]
            }>
                <Text style={styles.badgeText}>{this.props.itemsCount
                }</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemsCount: state.shoppingCart.items.length,
    }
};

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps) (Badge);
