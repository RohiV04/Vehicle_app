import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomSheet from './BottomSheet'
const RideRequest = () => {

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Book A Ride</Text>
      </TouchableOpacity>
      <BottomSheet />
    </View>
  )
}

export default RideRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#40A2E3'
  }
})