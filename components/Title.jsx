import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Title() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <View style={styles.menu}>
      <Image source={require("../assets/Menu.png")} />
      </View>
      </TouchableOpacity>
      <View style={styles.textTitle}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <View style={styles.optionsContainer}>
      <TouchableOpacity>
      <View style={styles.searchTitle}>
        <Image style={styles.image} source={require("../assets/Search.png")} />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('CartScreen');
      }}>
      <View style={styles.bagTitle}>
        <Image style={styles.image} source={require("../assets/shoppingBag.png")} />
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
    justifyContent: "space-between"
  },
  textTitle: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 50,
  },
  optionsContainer: {
    flexDirection: "row",
  },
  searchTitle: {
    height: 35,
    width: 35,
    borderRadius: 18,
    marginRight: 8,
     backgroundColor: 'rgb(235,235,235)'
  },
  bagTitle: {
    height: 35,
    width: 35,
    borderRadius: 18,
    marginRight: 15,
    backgroundColor: 'rgb(235,235,235)'
  },
  image: {
    marginTop: 5,
    marginLeft: 5
  },
  menu: {
    marginLeft: 10,
  },
})