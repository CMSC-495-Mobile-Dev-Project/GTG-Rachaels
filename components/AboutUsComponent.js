import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AboutUs extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        return (
            <View>
                <Text>About Us</Text>
            </View>
        );
    }
}

export default AboutUs;