import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductDetailCard from './ProductDetailCard';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Product({navigation}) {
  const [DATA, setDATA] = useState([
    { id: '1', job_title: 'Office Wear', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress1.png')},
    { id: '2', job_title: 'Black', prize: '$120', companyName: 'reversible angora cardigan',  image: require('../assets/dress2.png')},
    { id: '3', job_title: 'Church Wear', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress3.png')},
    { id: '4', job_title: 'Lamerei', prize: '$120', companyName: 'reversible angora cardigan',  image: require('../assets/dress4.png')},
    { id: '5', job_title: '21WN', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress5.png')},
    { id: '6', job_title: 'Lopo', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress6.png')},
    { id: '7', job_title: '21WN', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress7.png')},
    { id: '8', job_title: 'lame', prize: '$120', companyName: 'reversible angora cardigan', image: require('../assets/dress3.png')},
  ]);
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle = {styles.contentContainer}
       showsVerticalScrollIndicator={false}
      >
        <ProductDetailCard 
        data={DATA}
        job_title={DATA.job_title}
        image={DATA.image}
        navigation={navigation}
        />
      </ScrollView>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '85%',
      justifyContent: 'space-between',
    },
    contentContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    total: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  textTotal:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    color: '#daa520'
  }
})