import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Caption, Title, TouchableRipple } from 'react-native-paper'

export default function CampusScreen() {
  return (
    <View>
      <ScrollView bounces={false}>
        <View style={styles.title}>
          <Title style={{fontSize: 30}}>Campus Tour</Title>
        </View>
        <View style={{marginTop: 10}}>
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Image source={require('../Assets/Image/arjuna.webp')} style={styles.campusImage}></Image>
            <TouchableRipple onPress={() => {}}>
              <Text style={styles.imageLabel}>Qwerty Sports Complex</Text>
            </TouchableRipple>
          </View>
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Image source={require('../Assets/Image/mess.webp')} style={styles.campusImage}></Image>
            <Text style={styles.imageLabel}>Jasmine Mess</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Image source={require('../Assets/Image/library.jpeg')} style={{height:200, width:400}}></Image>
            <Text style={styles.imageLabel}>Library</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Image source={require('../Assets/Image/hostel.webp')} style={{height:200, width:400}}></Image>
            <Text style={styles.imageLabel}>Ashwatha Hostel</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Image source={require('../Assets/Image/campus.jpg')} style={{height:200, width:400}}></Image>
            <Text style={styles.imageLabel}>Academic Block</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  campusImage: {
    height: 300,
    width: 400
  },
  imageLabel:{
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10
  }
  
  
})