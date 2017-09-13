import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Body,
    Icon,
    Text,
    Button
} from 'native-base';
import { Image, Alert } from 'react-native';

class ProductionList extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const { productions, addItemToCart } = this.props;

        return (
            <Container>
                <Content>
                    <List >
                        {productions.map((production, i) => (<ListItem key={i} onPress={() => navigate('Production', { name: `${production.name}` })}>
                                    <Image style={{width: 100, height: 120}} source={{uri: `${production.poster}`}}/>
                                    <Body style={{flex: 1}}>
                                    <Text>{production.name}</Text>
                                    <Button iconLeft transparent primary>
                                        <Icon name='cart' onPress={() => {
                                            addItemToCart({
                                                production: production,
                                                count: 1
                                            })
                                            Alert.alert(
                                                '',
                                                'Add 1 《'+ production.name + '》 to shopping cart',
                                                [
                                                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                                                ],
                                                { cancelable: false }
                                            )
                                        }}/>
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

export default ProductionList;