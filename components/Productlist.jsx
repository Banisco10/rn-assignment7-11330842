import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductlistCard from './ProductlistCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';




export default function Productlist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)


  const fetchProduct = async() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setData(res.data);    
      console.log(data)
    })
  } 
  useEffect(() => {
    fetchProduct()
  }, [])



  const addToCart = async(product) => {
    let DATA = await AsyncStorage.getItem('DATA');
    DATA = DATA ? JSON.parse(DATA) : [];
    const uniqueProduct = {...product, id: Date.now().toString()};
    DATA.push(uniqueProduct);
    await AsyncStorage.setItem('DATA', JSON.stringify(DATA));
  };

  const productDetails = async(product) => {
    let DATA = await AsyncStorage.getItem('DATA');
    DATA = DATA ? JSON.parse(DATA) : [];

    const productExists = DATA.some(item => item.id === product.id);

    if (!productExists) {
      const uniqueProduct = {...product, id: Date.now().toString()};
      DATA.push(uniqueProduct);
      await AsyncStorage.setItem('DATA', JSON.stringify(DATA));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.productTitle}>
      <View style={styles.textTitle}>
      <Text style={styles.text}>Our Story</Text>
      </View>
      <View style={styles.subOptions}>
        <TouchableOpacity>
        <View style={styles.listView}>
          <Image style={styles.image} source={require("../assets/Listview.png")} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.filter}>
          <Image style={styles.image} source={require("../assets/Filter.png")} />
        </View>
        </TouchableOpacity>
      </View>
      </View>
      
      <ScrollView contentContainerStyle = {styles.contentContainer}
       showsVerticalScrollIndicator={false}
      >
        {data.map((item) => (
          <ProductlistCard
          data = {data}
          key={item.id}
          item = {item}
          addToCart={addToCart}
          productDetails={productDetails}
           /> 
           ))}         

      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
      marginTop: 30,
      marginLeft: 1,
      padding: 10
    },
    contentContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingBottom: 130
    },
    productTitle: {
      flexDirection: 'row',
      justifyContent:'space-between',
      marginBottom: 20
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    subOptions: {
      flexDirection: 'row',
      justifyContent:'space-between',
      columnGap: 5,
      right: 0
    },
    listView: {
      height: 42,
      width: 42,
      borderRadius: 25,
      backgroundColor: 'lightgray'
    },
    filter: {
      height: 42,
      width: 42,
      borderRadius: 25,
      backgroundColor: 'lightgray'
    },
    image: {
      marginTop: 12,
      marginLeft: 12
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})