import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function TitleCart() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textTitle}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <View style={styles.optionsContainer}>
      <TouchableOpacity>
      <View style={styles.searchTitle}>
        <Image style={styles.image} source={require("../assets/Search.png")} />
      </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create ({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  textTitle: {
    alignItems: "center",
    marginLeft: 130,
  },
  optionsContainer: {
    flexDirection: "row",
    paddingLeft: 70
  },
  searchTitle: {
    height: 35,
    width: 35,
    borderRadius: 18,
    marginRight: 8,
    backgroundColor: 'rgb(235,235,235)'
  },
  image: {
    marginTop: 5,
    marginLeft: 5
  }
})