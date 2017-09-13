import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    List,
    ListItem,
    Body,
    Icon,
    Text,
    Footer,
    Button
} from 'native-base';
import {Image} from 'react-native';

const items = [
    {
        "name": "The Shawshank Redemption",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
    },
    {
        "name": "The Godfather",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg",
    },
    {
        "name": "The Godfather: Part II",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg",
    },
    {
        "name": "The Dark Night",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
        "name": "12 Angry Men",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzNlNWRmNjgtYWZlOS00MTQ1LTk5MjItODFmNThjNzM1MTM5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
        "name": "Schindler's List",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
        "name":"Pulp Fiction",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
]


class HomeScreen extends React.Component {
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
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
                    <List >
                        {items.map((item, i) => (<ListItem key={i} onPress={() => navigate('Production', { name: `${item.name}` })}>
                                    <Image style={{width: 100, height: 120}} source={{uri: `${item.poster}`}}/>
                                    <Body style={{flex: 1}}>
                                        <Text>{item.name}</Text>
                                        <Button iconLeft transparent primary>
                                            <Icon name='cart'/>
                                        </Button>
                                    </Body>
                                </ListItem>
                            )
                        )}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;
