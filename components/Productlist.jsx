import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProductlistCard from './ProductlistCard';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Productlist() {
  const DATA = [
    { id: '1', job_title: 'Office Wear', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress1.png')},
    { id: '2', job_title: 'Black', prize: '$120', companyName: 'reversible angora cardigan',  image: require('../assets/dress2.png')},
    { id: '3', job_title: 'Church Wear', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress3.png')},
    { id: '4', job_title: 'Lamerei', prize: '$120', companyName: 'reversible angora cardigan',  image: require('../assets/dress4.png')},
    { id: '5', job_title: '21WN', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress5.png')},
    { id: '6', job_title: 'Lopo', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress6.png')},
    { id: '7', job_title: '21WN', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress7.png')},
    { id: '8', job_title: 'lame', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress3.png')},
  ];
  
  const addToCart = async(product) => {
    let DATA = await AsyncStorage.getItem('DATA');
    DATA = DATA ? JSON.parse(DATA) : [];
    const uniqueProduct = {...product, id: Date.now().toString()};
    DATA.push(uniqueProduct);
    await AsyncStorage.setItem('DATA', JSON.stringify(DATA));
  };
  const [selectedProductlist, setselectedProductlist] = useState(null);
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
        {DATA.map((item) => (
          <ProductlistCard
          data = {DATA}
          key={item.id}
          item = {item}
          addToCart={addToCart}
          selectedProductlist={selectedProductlist}
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
})