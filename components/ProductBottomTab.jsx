import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProductBottomTab() {
  return (
        <TouchableOpacity>
    <View style={styles.container}>
    <View style={styles.checkout}>
      <Image style={styles.image} source={require("../assets/Plus.png")} />
      <Text style={styles.text}>ADD TO BASKET</Text>
    </View>
    <View style={styles.heartImage}>
    <Image style={styles.image} source={require("../assets/Heart.png")} />
    </View>
    </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'

       
    },
    checkout: {
        flexDirection: 'row'
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