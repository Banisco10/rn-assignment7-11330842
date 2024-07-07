import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './pages/HomeScreen'
import CartScreen from './pages/CartScreen'


const Drawer = createDrawerNavigator();

export default function SidebarDrawer() {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='HomeScreen' component={HomeScreen} />
    <Drawer.Screen name='CartScreen' component={CartScreen} />
   </Drawer.Navigator>
  )
}