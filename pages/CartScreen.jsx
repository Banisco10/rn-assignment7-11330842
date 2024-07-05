import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TitleCart from '../components/TitleCart'
import Product from '../components/Product'
import BottomTab from '../components/BottomTab'
import SubTitleCart from '../components/SubTitleCart'

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <TitleCart />
      <SubTitleCart />
      <Product />
      <BottomTab />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
  }
})