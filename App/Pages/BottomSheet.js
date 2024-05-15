import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const BottomSheet = () => {

  return(
        <View style={styles.backdrop}>
            <View style={styles.bottomSheet}>
               <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#4682b4' }}>Book A Ride</Text>
               <View style={{marginTop: 20}}>
                <TextInput 
                  placeholder='PICK UP'
                  style={styles.input}
                />
                <TextInput 
                  placeholder='DROP-OFF'
                  style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Confirm</Text>
                </TouchableOpacity>
               </View>
            </View>
        </View>
    )
}

export default BottomSheet;

const styles = StyleSheet.create({
    backdrop:{
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    bottomSheet: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    input: {
        width: '100%',
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 15,
        marginBottom: 10
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#40A2E3',
        alignItems: 'center',
        marginTop: 15,
        width: '50%',
        marginLeft: 80
      }
})