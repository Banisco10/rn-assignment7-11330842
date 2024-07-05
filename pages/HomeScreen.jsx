import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Productlist from '../components/Productlist'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title />
      <Productlist />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      paddingTop: 50,
    }
})