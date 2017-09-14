import React, {Component} from 'react';
import {
    Item,
    Input,
    Icon
} from 'native-base';
import {View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
    wrapper:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80
    },
    input:{
        width: 40,
        fontSize: 13,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: "center"
    },
    border:{
        height: 20,
        borderRadius: 5
    },
    subBorder: {
        height: 20,
        width: 40
    },
    icon:{
        fontSize: 17,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3
    }
});

class NumberInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            textInputValue: this.props.defaultValue
        };
        this._handleIncrease = this._handleIncrease.bind(this);
        this._handleDecrease = this._handleDecrease.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            textInputValue: nextProps.defaultValue
        });
    }

    _handleIncrease(){
        this.setState({
            textInputValue: this.state.textInputValue + 1
        });
        this.props.onChange(this.state.textInputValue + 1)
    }

    _handleDecrease() {
        if (this.state.textInputValue > 1) {
            this.setState({
                textInputValue: this.state.textInputValue - 1
            });
            this.props.onChange(this.state.textInputValue - 1)
        }
    }


    render() {
        let {onChange} = this.props;
        return (
            <View style={style.wrapper}>
                <Item regular style={style.border}>
                <Icon name="add" style={style.icon} onPress={this._handleIncrease}/>
                <Item regular style={style.subBorder}>
                    <Input style={style.input}
                           defaultValue={this.state.textInputValue.toString()}
                           keyboardType="numeric"
                           onChangeText={(text) => {
                               if (!!text) {
                                   this.setState({textInputValue: parseInt(text)});
                                   onChange(parseInt(text))
                               }
                           }
                           }
                    />
                </Item>
                <Icon name="remove" style={style.icon} onPress={this._handleDecrease}/>
                </Item>
            </View>
        );
    }
}

export default NumberInput;