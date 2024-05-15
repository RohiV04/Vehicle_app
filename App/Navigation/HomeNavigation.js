import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Pages/HomeScreen'
import RideRequest from '../Pages/RideRequest'
import TabNavigation from './TabNavigation'

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
               name = 'HomeScreen'
               component = {TabNavigation}
               options={{headerShown: false}}
            />
            <Stack.Screen
               name = 'RideRequest'
               component = {RideRequest}
               options={{headerShown: false}}
            />
        </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})