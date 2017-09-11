import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Body, Icon, Text } from 'native-base';

class OrdersListScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Orders',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                theme={{ iconFamily: 'FontAwesome' }}
                name="list"
                style={[{fontSize:25}, {color: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Order List</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>
                        This is Content Section
                    </Text>
                </Content>
            </Container>
        );
    }
}

export default OrdersListScreen;
