// CustomDrawerContent.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={require('../assets/Close.png')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.text}>Baniba Godsway</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: -120
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -100
  },
});

export default CustomDrawerContent;
