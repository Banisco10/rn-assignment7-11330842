import { View, Text,  StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import ProductDetailCard from './ProductDetailCard'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductDetail() {
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

      const productDetails = async(product) => {
        let DATA = await AsyncStorage.getItem('DATA');
        DATA = DATA ? JSON.parse(DATA) : [];
        const uniqueProduct = {...product, id: Date.now().toString()};
        DATA.push(uniqueProduct);
        await AsyncStorage.setItem('DATA', JSON.stringify(DATA));
      };
      const [selectedProductlist, setselectedProductlist] = useState(null);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle = {styles.contentContainer}
       showsVerticalScrollIndicator={false}
      >
        {DATA.map((item) => (
        <ProductDetailCard
          data = {DATA}
          key={item.id}
          item = {item}
          selectedProductlist={selectedProductlist}
        /> 
      ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})