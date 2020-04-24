import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableHighlight} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


class AboutUs extends Component {
 
    
    static navigationOptions = {
        title: 'AboutUs'
    }

  
    render(){
   
        
        return (
     
          <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/logosmall.png')} />
            <Text style={styles.title}>About Us </Text>
            <Text style = { styles.description } > Welcome to Grocery to Go your number one source
            for all thing’s groceries. We're dedicated to giving you the very best groceries; with a focus on quality, sustainability, and price.
            Grocery to Go has come a long way from its beginnings in CMSC 495. When Angel, Kaneka, Marilyn, and Rachael first started out, our passion
            for groceries drove us to do intense research and gave us the impetus to turn hard work and inspiration into to a booming online store.
            We now serve customers all over the US, and are thrilled to be a part of the eco - friendly wing of the grocery industry. Founded in 2020 
            by Angel, Kaneka, Marilyn, Rachael. We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, 
            please don't hesitate to contact us. { "\n" }
            Sincerely, { "\n" }
            Angel Vazquez, Kaneka Ky
            { "\n" }
             Marilyn McDonald, Rachael Harner 
            </Text> 
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigation('Home', { screen: Home })}>
            <Text style={styles.buttonText}>Return to Shopping</Text>
            </TouchableHighlight>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 50,
    },
    icon: {
        width: 250,
        height: 125,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 22,
        color: "#5F6D7A"
    },
    description: {
        marginTop: 20,
        textAlign: 'center',
        color: "#A9A9A9",
        fontSize: 16,
        margin: 40,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    homeButton: {
        backgroundColor: "#249924",
    },
    buttonText: {
        color: "#249924",
        fontSize: 20,
    }
});

export default AboutUs;