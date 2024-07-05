import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SubTitleCart() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>CHECKOUT</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 20,
    },
})