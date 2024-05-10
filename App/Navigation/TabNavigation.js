import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../Utils/Colors';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import HomeScreen from '../Pages/HomeScreen';
import ProfileScreen from '../Pages/ProfileScreen';
import CampusScreen from '../Pages/CampusScreen';
import EditProfileScreen from '../Pages/EditProfileScreen';
import { Icon } from 'react-native-paper';

const HomeStack = createStackNavigator();
const CampusStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
      <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tab.Screen name='HomeScreen' component={HomeStackScreen} options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="home" size={24} color={color} />
        ),
        tabBarLabel: ({color})=>(
          <Text style={{color:color}}>Home</Text>
        )
      }}/>
      <Tab.Screen name='CampusScreen' component={CampusStackScreen} options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="images" size={24} color={color} />
        ),
        tabBarLabel: ({color})=>(
          <Text style={{color:color}}>CampusTour</Text>
        )
      }}/>
      <Tab.Screen name='ProfileScreen' component={ProfileStackScreen} options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="person-sharp" size={24} color={color} />
        ),
        tabBarLabel: ({color})=>(
          <Text style={{color:color}}>Profile</Text>
        )
      }}/>
    </Tab.Navigator>
    
  )
}

const HomeStackScreen = ({navigation}) => {
  return(
    <HomeStack.Navigator 
     screenOptions={{
      headerStyle: {
        backgroundColor: '#4682B4',
        elevation: 0,
      }
     }}
    >
    <HomeStack.Screen
     name='Profile'
     component={HomeScreen}
     options={{
      title: '',
      headerLeft: () => (
        <View style={{marginLeft: 10}} >
          <Ionicons name="menu-outline" size={40} color="black"  
           onPress={() => navigation.openDrawer()}
          />
        </View>
      ),
      headerRight: () => (
        <View style={{marginRight: 18}}>
          <FontAwesome6 
            name="map-location-dot" 
            size={24} 
            color="black"
            onPress={() => navigation.navigate('EditProfile')} />
        </View>
      )
     }}
    />
    <HomeStack.Screen 
     name='EditProfile'
     options={{
      title: 'Edit Profile'
     }}
     component={EditProfileScreen}
    />
      
    </HomeStack.Navigator>
  )
}


const CampusStackScreen =({navigation}) => {
  return(
    <CampusStack.Navigator
     screenOptions={{
      headerStyle: {
        backgroundColor: '#4682B4',
        elevation: 0,
      }
     }}
    >
      <CampusStack.Screen 
       name='Campus'
       component={CampusScreen}
       options={{
        title: '',
        headerLeft: () => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="menu-outline" size={40} color="black"  
           onPress={() => navigation.openDrawer()}
          />
          </View>
        ),
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <MaterialCommunityIcons 
              name="account-edit" 
              size={36} 
              color="black"
              onPress={() => navigation.navigate('EditProfile')} />
          </View>
        )
       }}
      />
      <ProfileStack.Screen 
     name='EditProfile'
     options={{
      title: 'Edit Profile'
     }}
     component={EditProfileScreen}
    />

    </CampusStack.Navigator>
  )
}




const ProfileStackScreen = ({navigation}) => {
  return(
    <ProfileStack.Navigator 
     screenOptions={{
      headerStyle: {
        backgroundColor: '#4682B4',
        elevation: 0,
      }
     }}
    >
    <ProfileStack.Screen
     name='Profile'
     component={ProfileScreen}
     options={{
      title: '',
      headerLeft: () => (
        <View style={{marginLeft: 10}} >
          <Ionicons name="menu-outline" size={40} color="black"  
           onPress={() => navigation.openDrawer()}
          />
        </View>
      ),
      headerRight: () => (
        <View style={{marginRight: 10}}>
          <MaterialCommunityIcons 
            name="account-edit" 
            size={36} 
            color="black"
            onPress={() => navigation.navigate('EditProfile')} />
        </View>
      )
     }}
    />
    <ProfileStack.Screen 
     name='EditProfile'
     options={{
      title: 'Edit Profile'
     }}
     component={EditProfileScreen}
    />
      
    </ProfileStack.Navigator>
  )
}