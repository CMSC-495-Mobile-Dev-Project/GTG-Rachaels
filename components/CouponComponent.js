import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Coupon extends Component {

    static navigationOptions = {
        title: 'Coupon'
    }

    render() {
        return (
            <View>
                <Text>Coupon Screen</Text>
            </View>
        );
    }
}

export default Coupon;