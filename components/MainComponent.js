import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Coupon from './CouponComponent';
import Cart from './CartComponent';
import Help from './HelpComponent';
const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#249924'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});
const AboutUsNavigator = createStackNavigator({
    AboutUs: { screen: AboutUs }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#249924'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});
const CouponNavigator = createStackNavigator({
    Coupon: { screen: Coupon }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#249924'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});
const CartNavigator = createStackNavigator({
    Cart: { screen: Cart }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#249924'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});
const HelpNavigator = createStackNavigator({
    Help: { screen: Help }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#249924'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});
const MainNavigator = createDrawerNavigator({
    Home: { screen: HomeNavigator },
    AboutUs: { screen: AboutUsNavigator },
    Coupon: { screen: CouponNavigator },
    Cart: { screen: CartNavigator },
    Help: { screen: HelpNavigator }
});

class Main extends Component {
    render() {
        return ( <
            View style = {
                {
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }
            } >
            <
            MainNavigator / >
            <
            /View>
        );
    }
}

export default Main;