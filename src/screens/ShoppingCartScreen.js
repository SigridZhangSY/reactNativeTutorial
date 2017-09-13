import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Body,
    Icon,
    Text,
    CheckBox
} from 'native-base';
import {Image} from 'react-native';

const items = [
    {
        "name": "Schindler's List",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
        "name": "Pulp Fiction",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
]


class ShoppingCartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        items.map((item, i) => {
            this.state["checked" + i] = false ;
        });
    }
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
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Content>
                    <List >
                        {items.map((item, i) => (
                                <ListItem key={i} onPress={() => navigate('Production', {name: `${item.name}`})}>
                                    <CheckBox
                                        checked={this.state["checked" + i]}
                                        onPress={() => {
                                            let newState = {};
                                            newState["checked" + i] = !this.state["checked" + i];
                                            this.setState(newState);
                                        }}/>
                                    <Image style={{width: 100, height: 120, marginLeft: 10}}
                                           source={{uri: `${item.poster}`}}/>
                                    <Text>{item.name}</Text>
                                </ListItem>
                            )
                        )}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default ShoppingCartScreen;
