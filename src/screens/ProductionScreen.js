import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

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