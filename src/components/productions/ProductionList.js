import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Body,
    Icon,
    Text,
    Button,
    Right
} from 'native-base';
import {Image, Alert} from 'react-native';
import {View} from 'react-native';

import ProductionCard from './ProductionCard';

const Extension = ({production, addItemToCart}) => (
    <Right>
        <Button style={{paddingLeft: 0, paddingRight: 0}} iconLeft transparent primary>
            <Icon name='cart' onPress={() => {
                addItemToCart({
                    production: production,
                    count: 1
                })
                Alert.alert(
                    '',
                    'Add 1 《' + production.name + '》 to shopping cart',
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false}
                )
            }}/>
        </Button>
    </Right>
);

class ProductionList extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        const {productions, addItemToCart} = this.props;

        return (
            <Container>
                <Content>
                    <List >
                        {productions.map((production, i) => (
                                <ListItem key={i}>
                                    <ProductionCard
                                        production={production}
                                        extension={<Extension production={production} addItemToCart={addItemToCart}/>}
                                        navigation={this.props.navigation}/>
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