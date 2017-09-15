import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Text,
    CheckBox,
    Button,
    Body
} from 'native-base';
import {Image, Alert} from 'react-native';

import NumberInput from './util/NumberInput';
import ProductionCard from './productions/ProductionCard';

const Extension = ({item, addItemToCart}) => (
    <NumberInput style={{position: 'absolute', bottom: 10}} defaultValue={item.count} onChange={(updateCount) => {
        addItemToCart({
            ...item,
            count: updateCount - item.count
        });
    }}/>
);

class CartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.items.map((item) => {
            this.state["checked" + item.production.id] = false;
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        const {items, addItemToCart} = this.props;

        return (
            <Container>
                <Content>
                    <List >
                        {items.map((item, i) => (
                                <ListItem
                                    key={i}
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <CheckBox
                                        checked={this.state["checked" + item.production.id]}
                                        onPress={() => {
                                            let newState = {};
                                            newState["checked" + item.production.id] = !this.state["checked" + item.production.id];
                                            this.setState(newState);
                                        }}/>
                                    <ProductionCard
                                        style={{position: 'relative', left: 10}}
                                        production={item.production}
                                        extension={<Extension item={item} addItemToCart={addItemToCart}/>}
                                        navigation={this.props.navigation}/>
                                </ListItem>
                            )
                        )}
                    </List>
                </Content>
                <Button primary style={{
                    marginTop: 10,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    borderRadius: 0,
                    backgroundColor: '#e91e63'
                }} onPress={() => {
                    let checkedList = items.filter(item => this.state["checked" + item.production.id]);
                    if (checkedList.length == 0)
                        Alert.alert(
                            '',
                            'select at least 1 production',
                            [
                                {text: 'OK'},
                            ],
                            {cancelable: false})
                    else
                        navigate('NewOrder', {orderItems: checkedList});
                }}>
                    <Text>check out</Text>
                </Button>
            </Container>
        );
    }
}

export default CartList;