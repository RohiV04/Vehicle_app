import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
      <Button 
       title='Click Here'
       onPress={() => alert('Button Clicked')}
      />
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})