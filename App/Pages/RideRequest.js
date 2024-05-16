import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import BottomSheet from './BottomSheet'
import axios from 'axios'
import { useUser } from "@clerk/clerk-expo";
const RideRequest = () => {
  const [status, setStatus] = React.useState(false);
  const { isSignedIn, user } = useUser();
  return(
    <View style={styles.container}>
      <View style={styles.hero}>
          <Image style={styles.heroImg}
          source={require('./../Assets/Image/ride1.png')} />
      </View>
      <TouchableOpacity style={styles.button}
        onPress={() => axios.put(```https://vehicle.adaptable.app/user/updateRequest/${user.emailAddresses[0].emailAddress}```)}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Book A Ride</Text>
      </TouchableOpacity>

      { status && <BottomSheet />}


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
  },
  heroImg: {
    width: 320,
    height: 170
  },
  hero:{
    marginBottom: 40
  }
})