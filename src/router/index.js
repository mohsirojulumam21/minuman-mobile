import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {home, splash, pesanan, akun} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const mainapp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={home} />
            <Tab.Screen name="pesanan" component={pesanan} />
            <Tab.Screen name="akun" component={akun} />

      </Tab.Navigator>
    )
  }

const router = () => {
  return (
    <Stack.Navigator initialroutername="splash">
    <Stack.Screen name="splash" component={splash}options={{headershown:false}} />
    <Stack.Screen name="mainapp" component={mainapp}options={{headershown:false}} />
    
  </Stack.Navigator>
  )
}

export default router

const styles = StyleSheet.create({})