import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Cart extends Component {

    static navigationOptions = {
        title: 'Cart'
    }

    render() {
        return (
            <View>
                <Text>Cart Screen</Text>
            </View>
        );
    }
}

export default Cart;