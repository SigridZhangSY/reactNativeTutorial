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

const mockData = [
    {
        production:{
            id: 6,
            name: "Schindler's List",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        },
        count: 1
    },
    {
        production: {
            id: 7,
            name: "Pulp Fiction",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        },
        count : 2
    }
]

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
                <Button primary style={{
                    marginTop: 10,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    borderRadius: 0,
                    backgroundColor: '#e91e63'
                }} onPress={() => navigate('NewOrder', {orderItems: items})}><Text>check out</Text></Button>
            </Container>
        );
    }
}

export default CartList;