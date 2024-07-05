import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';
import ProductDetailScreen from './pages/ProductDetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
 

  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='CartScreen' component={CartScreen} options={{headerShown: false}} />
        <Stack.Screen name = 'ProductDetailScreen' component={ProductDetailScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
    image: {
      width: 25,
      height: 25,
    }
});

