import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Item, Input, Container, Content, Button, Text, Card, CardItem, Icon, Left, Thumbnail} from 'native-base';

const validate = values => {
    const errors = {};
    if (!values.address) {
        errors.address = 'address is required'
    }
    if (!values.fullName) {
        errors.fullName = 'fullName is required'
    }
    return errors
};

const field = ({input, label, type, meta: {touched, error, warning}}) => (
    <Item>
        <Input style={{marginTop: 10}} {...input} multiline={true}/>
    </Item>
);

class OrderForm extends React.Component {

    render() {

        let orderItems = this.props.navigation.state.params.orderItems;
        return (
            <Container>
                <Content padder>
                    <Text> Address: </Text>
                    <Field name="fullName" component={field}/>
                    <Text style={{marginTop: 10}}> Full Name: </Text>
                    <Field name="address" component={field}/>

                    <Card style={{marginTop: 10}}>
                        <CardItem header>
                            <Text>Order Items</Text>
                        </CardItem>
                        {
                            orderItems.map((item, i) => (
                                <CardItem key={i}>
                                    <Left>
                                        <Thumbnail source={{uri: `${item.production.poster}`}} />
                                    </Left>
                                    <Text>{item.production.name}</Text>
                                </CardItem>
                            ))
                        }
                    </Card>


                    <Button block primary style={{
                        marginTop: 10,
                        borderRadius: 0,
                        backgroundColor: '#e91e63'
                    }}>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default reduxForm({
    form: 'order',
    validate
})(OrderForm);

