import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import ProductDetail from '../components/ProductDetail'
import ProductBottomTab from '../components/ProductBottomTab'

export default function ProductDetailScreen() {
  return (
    <View style={styles.container}>
      <Title />
      <ProductDetail />
      <ProductBottomTab />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      paddingTop: 50,
    }
})