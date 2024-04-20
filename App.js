import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/login';
import { createContext, useEffect, useState } from 'react';
import TabNavigation from './App/Navigation/TabNavigation';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './App/Pages/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './App/Pages/ProfileScreen';
import CampusScreen from './App/Pages/CampusScreen';


export default function App() {

  return (
    <ClerkProvider publishableKey='pk_test_YW1hemVkLW1hc3RpZmYtNjIuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container} >
      <StatusBar style='auto' />
      <SignedIn>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});