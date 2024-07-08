import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';
import StoreScreen from './pages/StoreScreen';
import LocationsScreen from './pages/LocationsScreen';
import BlogScreen from './pages/BlogScreen';
import JeweleryScreen from './pages/JeweleryScreen';
import ElectronicScreen from './pages/ElectronicScreen';
import ClothingScreen from './pages/ClothingScreen';
import ProductDetailScreen from './pages/ProductDetailScreen';
import 'react-native-gesture-handler';


const StackNav=()=> {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='CartScreen' component={CartScreen} options={{headerShown: false}} />
        <Stack.Screen name = 'ProductDetailScreen' component={ProductDetailScreen} options={{headerShown: false}} />
      </Stack.Navigator>
  );

}

const DrawerNav=()=> {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={StackNav} options={{headerShown: false}} />
        <Drawer.Screen name='Store' component={StoreScreen}/>
        <Drawer.Screen name='Locations' component={LocationsScreen}  />
        <Drawer.Screen name='Blog' component={BlogScreen} />
        <Drawer.Screen name='Jewelery' component={JeweleryScreen} />
        <Drawer.Screen name='Electronic' component={ElectronicScreen}/>
        <Drawer.Screen name='Clothing' component={ClothingScreen} />
      </Drawer.Navigator>

  )

}

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home"> 
      <DrawerNav />
    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
    image: {
      width: 25,
      height: 25,
    }
});

