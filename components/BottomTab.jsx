import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BottomTab() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
    <View style={styles.checkout}>
      <Image style={styles.image} source={require("../assets/shoppingBag.png")} />
      <Text style={styles.text}>CHECKOUT</Text>
    </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    checkout: {
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,    
        fontWeight: 'bold',
    },
    image: {
        width: 25,
        height: 25,
        tintColor: 'white',
    }

})