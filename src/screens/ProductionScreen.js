import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Body, Icon, Text } from 'native-base';

class ProductionScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name
    });

    render(){
        const { params } = this.props.navigation.state;
        return (
            <Container>
                <Content>
                    <Text>
                        {params.name}
                    </Text>
                </Content>
            </Container>
        );
    }
}

export default ProductionScreen;