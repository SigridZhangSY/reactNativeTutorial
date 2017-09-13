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
import { Image } from 'react-native';

class CartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.items.map((item, i) => {
            this.state["checked" + i] = false ;
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
                                        checked={this.state["checked" + i]}
                                        onPress={() => {
                                            let newState = {};
                                            newState["checked" + i] = !this.state["checked" + i];
                                            this.setState(newState);
                                        }}/>
                                    <Image style={{width: 100, height: 120}}
                                           source={{uri: `${item.production.poster}`}}
                                    />
                                    <Text style={{width: 200}}>{item.production.name}</Text>
                                    <Text>{item.count}</Text>
                                </ListItem>
                            )
                        )}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default CartList;