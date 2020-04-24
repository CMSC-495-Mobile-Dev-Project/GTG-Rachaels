import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, Alert, ScrollView } from 'react-native';


class Home extends Component {

  
    static navigationOptions = {
        title: 'Home'
        
            }
        
            constructor(props) {
                super(props);
                this.state = {
                  modalVisible:false,
                  userSelected:[],
                  data: [
                    {id:1,  name: "Eggs",   image:"https://www.incnow.com/wp-content/uploads/2013/03/egg-carton.jpg", price:'$1.99' },
                    {id:2,  name: "Milk",    image:"https://shepherdminiatures.com/wp-content/uploads/2018/02/milk-red-small-copy.jpg", price:'$2.05'},
                    {id:3,  name: "Bread",       image:"https://americacomesalive.com/i/Wonder-bread.png", price:'$2.99'} ,
                    {id:4,  name: "Cheese",   image:"http://www.diningchicago.com/blog/wp-content/uploads/2012/10/Kraft-cheese.png",    price:'$3.75'} ,
                    {id:5,  name: "Potatoes",   image:"https://www.agric.wa.gov.au/sites/gateway/files/W07_0018_White_star_potato.JPG",    price:'$5.25'} ,
                    {id:6,  name: "Butter",   image:"https://bmcontent.affino.com/AcuCustom/Sitename/DAM/162/DD4G6wuXUAAMMVf.png",    price:'$5.13'} ,
                    {id:7,  name: "Corn",   image:"http://www.pngall.com/wp-content/uploads/2016/05/Corn-PNG-File.png",    price:'$4.75'} ,
                    {id:8,  name: "Chips",   image:"https://i.pinimg.com/736x/84/6d/3e/846d3e71415c22c2238af6b927e6b473.jpg",    price:'$1.99'} ,
                    {id:9,  name: "Soda",   image:"http://pics.drugstore.com/prodimg/416899/900.jpg",    price:1.22} ,
                    {id:10, name: "Pizza",   image:"http://www.cuginospizzas.com/wp-content/uploads/2016/03/Pepperoni-Pizza-PNG-Image.png",    price:'$7.99'} ,
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
                            <Text style={styles.price}>{item.price}</Text>
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
              price:{
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
                    


export default Home;