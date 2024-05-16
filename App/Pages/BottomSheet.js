import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';

const BottomSheet = () => {

    const slide = React.useRef(new Animated.Value(300)).current;

    const slideUp = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(slide, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }).start();
      };
    
      const slideDown = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(slide, {
          toValue: -300,
          duration: 800,
          useNativeDriver: true,
        }).start();
      };

      React.useEffect(() => {
        slideUp()
      }, [])

  return(
        <View style={styles.backdrop}>
            <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slide}]}]}>
               <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#4682b4' }}>Book A Ride</Text>
               <View style={{marginTop: 25}}>
                <KeyboardAvoidingView>
                  <Autocomplete
                    data={DATA}
                    displayKey="name"
                    placeholder={'PICK UP'}
                    onSelect={value => console.log('value', value)}
                    maxHeight={300}
                    textInputStyle={styles.input}
                  />
                  <Autocomplete
                    data={DATA}
                    displayKey="name"
                    placeholder={'DROP-OFF'}
                    onSelect={value => console.log('value', value)}
                    maxHeight={300}
                    textInputStyle={styles.input}
                  />
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Confirm</Text>
                </TouchableOpacity>
               </View>
            </Animated.View>
        </View>
    )
}

const DATA = [
  {code: 'As', name: 'Ashwatha Hostel'},
  {code: 'Ar', name: 'Arjuna Sports Complex'},
  {code: 'Ja', name: 'Jasmine Hostel'},
  {code: 'Ad', name: 'Admin Block'},
  {code: 'Fa', name: 'Faculty Quarters'},
  {code: 'Ac', name: 'Academic Block'},
  {code: 'Ak', name: 'Akshaya Mess'},
  {code: 'Ja', name: 'Jasmine Hostel'},
  {code: 'Ga', name: 'Main Gate'},
];

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
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#40A2E3',
        alignItems: 'center',
        marginTop: 20,
        width: '50%',
        marginLeft: 80
      }
})