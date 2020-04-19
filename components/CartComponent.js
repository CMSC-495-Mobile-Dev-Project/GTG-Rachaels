import React, { Component } from 'react';

import { Image, ScrollView, FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';

// import {Kittehs} from '../images/kittehs.jpg';



var { height } = Dimensions.get('window');



class Cart extends Component {



    static navigationOptions = {

        title: 'Cart'

    }



    constructor(props) {

        super(props);

        this.state = {

            modalVisible: false,

            userSelected: [],

            data: [

                { id: 1, name: "Eggs", quantity: 1, image: "https://www.incnow.com/wp-content/uploads/2013/03/egg-carton.jpg", },

                { id: 2, name: "Milk", quantity: 1, image: "https://shepherdminiatures.com/wp-content/uploads/2018/02/milk-red-small-copy.jpg", },

                { id: 3, name: "Bread", quantity: 1, image: "https://americacomesalive.com/i/Wonder-bread.png", },

                { id: 4, name: "Cheese", quantity: 1, image: "http://www.diningchicago.com/blog/wp-content/uploads/2012/10/Kraft-cheese.png", },

                { id: 5, name: "Potatoes", quantity: 1, image: "https://www.agric.wa.gov.au/sites/gateway/files/W07_0018_White_star_potato.JPG", },

                { id: 6, name: "Cheeese", quantity: 1, image: "http://www.diningchicago.com/blog/wp-content/uploads/2012/10/Kraft-cheese.png", }

            ]

        };

    }

    clickEventListener = (item) => {

        Alert.alert('Adjust Quantities', 'Item: ' + item.name,

            [{ text: '+1', onPress: () => this.setState({
                        [item.quantity]: item.quantity++ }) },

                { text: '-1', onPress: () => this.setState({
                        [item.quantity]: item.quantity-- }) },

                { text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel' }

            ],

            { cancelable: true });

    }





    render() {

        return (

            <
            View style = { styles.container } >

            <
            FlatList

            style = { styles.scrollStyle }

            columnWrapperStyle = { styles.listContainer }

            data = { this.state.data }

            keyExtractor = {
                (item) => {

                    return item.id;

                }
            }

            renderItem = {
                ({ item }) => {

                    return (

                        <
                        TouchableOpacity style = { styles.card }
                        onPress = {
                            () => { this.clickEventListener(item) } } >

                        <
                        Image style = { styles.image }
                        source = {
                            { uri: item.image } }
                        />

                        <
                        View style = { styles.cardContent } >

                        <
                        Text style = { styles.name } > { item.name } < /Text>

                        <
                        Text style = { styles.count } > { item.count } < /Text>

                        <
                        TouchableOpacity style = { styles.followButton }
                        onPress = {
                            () => this.clickEventListener(item) } >

                        <
                        Text style = { styles.followButtonText } > Quantity: { item.quantity } < /Text>  

                        <
                        /TouchableOpacity>

                        <
                        /View>

                        <
                        /TouchableOpacity>

                    )
                }
            }
            />                        

            <
            FlatList style = { styles.flatStyle } >

            <
            Text > test < /Text> 

            <
            /FlatList>

            <
            /View> 

        );

    }

}



const styles = StyleSheet.create({

    container: {

        flex: 1,

        flexDirection: 'row',

        height: height,

        marginLeft: 5,

        marginRight: 5,

        marginBottom: 5,

    },

    scrollStyle: {

        //flex: 5, 

        width: 600,

        backgroundColor: 'white'

    },

    flatStyle: {

        //flex: 10,

        width: 200,

        backgroundColor: 'gray'

    },

    contentList: {

        flex: 1,

    },

    cardContent: {

        marginLeft: 20,

        marginTop: 10

    },

    image: {

        width: 90,

        height: 90,

        borderRadius: 45,

        borderWidth: 2,

        borderColor: "#ebf0f7"

    },



    card: {

        shadowColor: '#00000021',

        shadowOffset: {

            width: 0,

            height: 6,

        },

        shadowOpacity: 0.37,

        shadowRadius: 7.49,

        elevation: 12,



        marginLeft: 20,

        marginRight: 20,

        marginTop: 20,

        backgroundColor: "white",

        padding: 10,

        flexDirection: 'row',

        borderRadius: 30,

    },



    name: {

        fontSize: 18,

        flex: 1,

        alignSelf: 'center',

        color: "#3399ff",

        fontWeight: 'bold'

    },

    count: {

        fontSize: 14,

        flex: 1,

        alignSelf: 'center',

        color: "#6666ff"

    },

    followButton: {

        marginTop: 10,

        height: 35,

        width: 100,

        padding: 10,

        flexDirection: 'row',

        justifyContent: 'center',

        alignItems: 'center',

        borderRadius: 30,

        backgroundColor: "white",

        borderWidth: 1,

        borderColor: "gray",

    },

    followButtonText: {

        color: "blue",

        fontSize: 12,

    }

})





function Cat(props) {

    return (

        <
        View >

        <
        Image

        source = { require('../assets/logo.png') }

        style = {
            { width: 200, height: 200 } }
        />

        <
        Text > Quantity: { props.quantity } < /Text>

        <
        /View>    

    );

}



export default Cart;