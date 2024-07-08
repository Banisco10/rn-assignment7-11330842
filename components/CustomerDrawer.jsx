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
        <Text style={styles.text}>BANIBA GODSWAY</Text>

        <View style={styles.options}>
          <View style={styles.line} />
        </View>
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
    marginLeft: -130
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -90
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: -90,
    marginTop: 6,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#daa520',
    marginHorizontal: 110,
  },
});

export default CustomDrawerContent;
