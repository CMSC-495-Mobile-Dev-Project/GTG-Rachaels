import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Help extends Component {

    static navigationOptions = {
        title: 'Help'
    }

    render() {
        return (
            <View>
                <Text>Help Screen</Text>
            </View>
        );
    }
}

export default Help;