import React, {Component} from 'react';
import { Body, Text } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

class ProductionCard extends React.Component{
    render(){
        let { production, extension, style} = this.props;
        const {navigate} = this.props.navigation;

        return(
            <TouchableOpacity style={[{flex: 1, flexDirection: 'row'}, style]}onPress={() => navigate('Production', {name: `${production.name}`})}>
                <Image style={{width: 100, height: 120}} source={{uri: `${production.poster}`}}/>
                <Body style={{flex: 1, justifyContent: 'space-around', height:120}}>
                <View>
                    <Text>{production.name}</Text>
                    <Text style={{fontSize: 10, color: 'gray'}}>Release Date: {production.releaseDate}</Text>
                </View>
                <Text style={{fontSize: 13, color: '#e91e63'}}>$ {production.price}</Text>
                </Body>
                {extension}
            </TouchableOpacity>
        );
    }
}

export default ProductionCard;