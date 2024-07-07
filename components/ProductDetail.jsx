import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductDetailCard from './ProductDetailCard';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Product() {
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle = {styles.contentContainer}
       showsVerticalScrollIndicator={false}
      >
          <ProductDetailCard />           
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