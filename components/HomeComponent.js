import React, { Component } from 'react';
import { Image, ScrollView, FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
console.disableYellowBox = true;

class Home extends Component {


    static navigationOptions = {
        title: 'Home'

    }

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            data: [
              {id:1,  name: "Eggs", quantity: 1, price: 1.00, image:"https://www.incnow.com/wp-content/uploads/2013/03/egg-carton.jpg"},              
              {id:3,  name: "Milk", quantity: 0, price: 1.50, image:"https://shepherdminiatures.com/wp-content/uploads/2018/02/milk-red-small-copy.jpg"},
              {id:5,  name: "Bread", quantity: 0, price: 1.62, image:"https://americacomesalive.com/i/Wonder-bread.png"} ,
              {id:7,  name: "Cheese", quantity: 0, price: 3.50, image:"http://www.diningchicago.com/blog/wp-content/uploads/2012/10/Kraft-cheese.png"} ,
              {id:9,  name: "Potatoes", quantity: 0, price: 2.50, image:"https://www.agric.wa.gov.au/sites/gateway/files/W07_0018_White_star_potato.JPG" },     
              {id:11,  name: "Butter", quantity: 0,price: 5.13,    image:"https://bmcontent.affino.com/AcuCustom/Sitename/DAM/162/DD4G6wuXUAAMMVf.png"} ,
              {id:12,  name: "Corn", quantity: 0, price: 4.75,  image:"http://www.pngall.com/wp-content/uploads/2016/05/Corn-PNG-File.png" } ,
              {id:13,  name: "Chips", quantity: 0, price: 1.99,   image:"https://i.pinimg.com/736x/84/6d/3e/846d3e71415c22c2238af6b927e6b473.jpg" } ,
              {id:14,  name: "Soda", quantity: 0, price:  1.22,  image:"http://pics.drugstore.com/prodimg/416899/900.jpg"   } ,
              {id:15, name: "Pizza", quantity: 0, price:7.99,   image:"http://www.cuginospizzas.com/wp-content/uploads/2016/03/Pepperoni-Pizza-PNG-Image.png"} ,
            ]
        };
    }

    clickEventListener = (item) => {
      Alert.alert('Adjust Quantities', 'Item: ' + item.name, [{ text: 'Add Coupon', onPress: () => this.check_quantities_adding(item) },
          { text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel' }
      ], { cancelable: true });
  }

  check_quantities_adding = (item) => {
      console.log(item.name + item.quantity);
      if (item.quantity > 0 && item.quantity < 50) {
          this.setState({
              [item.quantity]: item.quantity++ });
      } else if (item.quantity == 1) {
          Alert.alert("Sorry, you've reached the maximum limit.")
          console.log(item.quantity);

          //console.log(item.name + item.quantity);
      }
      onRemoveItem = id => {
          this.setState(state => {
              const data = state.data.filter(item => item.id !== id);
              console.log(data);
              return {
                  data,
              };
          });
      };
      calculateTotal = () => {
          var total = 0;
          var cartArray = this.state.data;
          var index = 0;
          for (index = 0; index < cartArray.length; index++) {
              total += (cartArray[index].quantity * cartArray[index].price);
          }
          return total.toFixed(2);
      }
      calculateItemTotal = (item) => {
          var itemTotal = item.quantity * item.price;
          return itemTotal.toFixed(2);
      }
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
                    <Text style={styles.followButtonText}>Add to Cart</Text>  
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}}/>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: "#ebf0f7"
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
  price: {
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
      backgroundColor: "#249924",
      borderWidth: 1,
      borderColor: "#249924",
  },
  followButtonText: {
      color: "white",
      fontSize: 12,
  },
});


export default Home;