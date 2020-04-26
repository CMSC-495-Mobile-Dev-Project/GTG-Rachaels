import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

var {height} = Dimensions.get('window');

class Checkout extends Component {

    static navigationOptions = {
        title: 'Checkout'
    }

    render() {
        return (
            <View>
                <Text>Checkout Component</Text>
            </View>
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
        width: 600,
        backgroundColor: 'white'
    },    
    flatStyle: {
        textAlign: 'center',
        width: 120,
        backgroundColor: 'white'
    },
    contentList:{
        flex:1,
      },
      cardContent: {
        marginLeft:20,
        marginTop:10
      },
      image:{
        width:90,
        height:90,
        borderRadius:45,
        borderWidth:2,
        borderColor:"#ebf0f7"
      },
    
      card:{
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
        marginTop:20,
        backgroundColor:"white",
        padding: 10,
        flexDirection:'row',
        borderRadius:30,
      },
    
      name:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#3399ff",
        fontWeight:'bold'
      },
      count:{
        fontSize:14,
        flex:1,
        alignSelf:'center',
        color:"#6666ff"
      },
      followButton: {
        marginTop:10,
        height:35,
        width:100,
        padding:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "white",
        borderWidth:1,
        borderColor:"gray",
      },
      followButtonText:{
        color: "blue",
        fontSize:12,
      }
})

export default Checkout;