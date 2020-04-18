import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, Alert, ScrollView } from 'react-native';

class Coupon extends Component {
    static navigationOptions = {
        title: 'Coupon'
    }

    constructor(props) {
        super(props);
        this.state = {
          modalVisible:false,
          userSelected:[],
          data: [
            {id:1,  name: "Eggs",   image:"https://www.incnow.com/wp-content/uploads/2013/03/egg-carton.jpg",    },
            {id:2,  name: "Milk",    image:"https://shepherdminiatures.com/wp-content/uploads/2018/02/milk-red-small-copy.jpg",      },
            {id:3,  name: "Bread",       image:"https://americacomesalive.com/i/Wonder-bread.png", } ,
            {id:4,  name: "Cheese",   image:"http://www.diningchicago.com/blog/wp-content/uploads/2012/10/Kraft-cheese.png",    } ,
            {id:5,  name: "Potatoes",   image:"https://www.agric.wa.gov.au/sites/gateway/files/W07_0018_White_star_potato.JPG",    } ,
            
        ]
        };
      }
    
      clickEventListener = (item) => {
        Alert.alert('Message', 'Item clicked. '+item.name);
      }
    render() {
        return (

            <View style={styles.container}>
            <FlatList 
              style={styles.contentList}
              columnWrapperStyle={styles.listContainer}
              data={this.state.data}
              keyExtractor= {(item) => {
                return item.id;
              }}
              renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                  <Image style={styles.image} source={{uri: item.image}}/>
                  <View style={styles.cardContent}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.count}>{item.count}</Text>
                    <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Add Coupon</Text>  
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}}/>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container:{
        flex:1,
        marginTop:20,
        backgroundColor:"#ebf0f7"
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
        borderColor:"#dcdcdc",
      },
      followButtonText:{
        color: "#dcdcdc",
        fontSize:12,
      },
    });  
            
export default Coupon;