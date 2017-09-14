import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Text,
    CheckBox,
    Button
} from 'native-base';
import { Image, Alert } from 'react-native';

class CartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.items.map((item) => {
            this.state["checked" + item.production.id] = false ;
        });
    }


    render() {
        const {navigate} = this.props.navigation;
        const items = this.props.items;

        return (
            <Container>
                <Content>
                    <List >
                        {items.map((item, i) => (
                                <ListItem
                                    key={i}
                                    onPress={() => navigate('Production', {name: `${item.production.name}`})}
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
                                    <Image style={{width: 100, height: 120}}
                                           source={{uri: `${item.production.poster}`}}
                                    />
                                    <Text style={{width: 200}}>{item.production.name}</Text>
                                    <Text>x {item.count}</Text>
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
                            { cancelable: false })
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