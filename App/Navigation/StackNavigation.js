import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Pages/HomeScreen'
import RideRequest from '../Pages/RideRequest';


const Home = createNativeStackNavigator();

export function HomeStack(){
    return(
        <Home.Navigator>
            <Home.Screen 
               name = 'HomeScreen'
               component = {HomeScreen}
               options={{headerShown: false}}
            />
            <Home.Screen 
               name = 'RideRequest'
               component = {RideRequest}
               options={{headerShown: false}}
            />
        </Home.Navigator>
    )
}