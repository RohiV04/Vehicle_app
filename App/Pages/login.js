import { View, Text, Image, StyleSheet, Pressable, StatusBar } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { AuthContext } from '../../App';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native-safe-area-context';

WebBrowser.maybeCompleteAuthSession();
export default function Login() {

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <SafeAreaView>
        <View style={styles.hero}>
          <Image style={styles.heroImg}
          source={require('./../Assets/Image/campus.jpg')} />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.welcomeTo}>Welcome</Text>
          <Text style = {styles.campusWheels}>To Campus Wheels</Text>
          <Text style = {styles.loginsignup}>Our Campus Transportation Companion</Text>
          <Pressable style = {styles.button} 
            onPress={onPress}>
            <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}} />
            <Text style={{
              color: 'white',
            }}>Sign In with Google</Text>
          </Pressable>
          <Pressable style = {styles.button1}
            onPress={onPress}>
            <FontAwesome6 name="user-large" size={24} color="white" style={{marginRight:10}}/>
            <Text style={{color: 'black'}}>New User?</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  heroImg:{
    width: 600,
    height: 400,
  },
  container:{
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeTo:{
    fontSize: 35,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center'
  },
  campusWheels:{
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4682B4',
    textAlign: 'center'
  },
  loginsignup: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#4682B4',
    padding: 10,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  button1: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: -20,
  },
})