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
import { Image } from 'react-native';

class ProductionList extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const productions = this.props.productions;

        return (
            <Container>
                <Content>
                    <List >
                        {productions.items.map((item, i) => (<ListItem key={i} onPress={() => navigate('Production', { name: `${item.name}` })}>
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

export default ProductionList;