import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { mapStyle } from "../Utils/mapStyle";
import * as Location from "expo-location";
import { cars } from "../Utils/data";
import { Marker } from "react-native-maps";
import { Button, TouchableRipple } from "react-native-paper";
import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
  const navigation = useNavigation();
  const [latlng, setLatLng] = useState({});
  const { isSignedIn, user } = useUser();
  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return true;
  };

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude });
    } catch (err) {}
  };

  const _map = useRef(1);

  useEffect(() => {
    checkPermission();
    getLocation(),
      // console.log(latlng)
      [];
  });


useEffect(() => {
  axios.post("https://vehicle.adaptable.app/user/create", {
    Email: user.emailAddresses[0].emailAddress,
    Password: "test",
    Name: user.fullName,
    // Mobile: "0123456789",
    // Regdno: "123456789"
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
}, []);


  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style={styles.text1}>Campus Wheels</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>
                Your Campus Transportation Companion
              </Text>
              <View style={styles.editProfile}>
                <Button
                  mode="elevated"
                  onPress={() => {navigation.navigate('RideRequest')}}
                  style={{
                  borderRadius: 10,
                  borderColor: "#4682B4",
                  backgroundColor: 'black'
                  }}
                  rippleColor={"#f0ffff"}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.bookaride}>Book A Ride</Text>
                  </View>
               </Button>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('RideRequest')}}>
          <View style={styles.view3}>
            <Text style={styles.whereto}>Where to ?</Text>
            <View style={styles.view4}>
              <FontAwesome6 name="clock-four" size={24} color="black" />
              <Text style={{ marginLeft: 5 }}>Now</Text>
              <Entypo name="chevron-down" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.view5}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={22}
                color="black"
              />
            </View>
            <View>
              <Text style={styles.loc}>Arjuna Sports Complex</Text>
              <Text style={styles.loc1}>IIITDM Kancheepuram</Text>
            </View>
          </View>
          <View>
            <Entypo name="chevron-right" size={26} color="black" />
          </View>
        </View>

        <View style={{ ...styles.view5, borderBottomWidth: 0 }}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={22}
                color="black"
              />
            </View>
            <View>
              <Text style={styles.loc}>Laboratory Block</Text>
              <Text style={styles.loc1}>IIITDM Kancheepuram</Text>
            </View>
          </View>
          <View>
            <Entypo name="chevron-right" size={26} color="black" />
          </View>
        </View>

        <Text style={styles.text4}>Around You</Text>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <MapView
            ref={_map}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            showsUserLocation = {true}
            followsUserLocation = {true}
          >
            {cars.map((cars,index)=> (
              <Marker key={index} coordinate={cars} onPress={() => onMarkerSelected(cars)}>
                <Image source={require('../Assets/Image/carMarker.png')} style={styles.carsAround} resizeMode = "cover" />
              </Marker>
            )
            )}
          </MapView>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#4682B4" translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#4682B4",
    paddingTop: 40,
    paddingLeft: 20,
    height: 100,
    alignItems: "flex-start",
  },
  home: {
    backgroundColor: "#4682B4",
    paddingLeft: 20,
  },
  text1: {
    color: "white",
    fontSize: 25,
    paddingBottom: 20,
    paddingTop: 20,
  },
  text2: {
    color: "white",
    fontSize: 18,
  },
  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },
  view8: {
    marginTop: -25,
    paddingBottom: 20,
  },
  button1: {
    height: 40,
    width: 150,
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button1text: {
    color: "white",
    fontSize: 17,
  },
  view3: {
    flexDirection: "row",
    marginTop: 5,
    height: 50,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  whereto: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 17,
  },
  view5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 25,
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flex: 1,
  },
  view6: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
  },
  view7: {
    backgroundColor: "#f2f2f2",
    height: 40,
    width: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  loc: {
    fontSize: 18,
    color: "#0B0C0C",
  },
  loc1: {
    color: "#D3D3D3",
  },
  text4: {
    fontSize: 20,
    color: "#0B0C0C",
    marginLeft: 20,
    marginTop: -10,
  },
  map: {
    height: 190,
    marginVertical: 10,
    width: 350,
  },
  carsAround: {
    width: 50,
    height: 25
  },
  editProfile:{
    height: 40,
    width: 150,
    backgroundColor: "black",
    borderRadius: 20,
    marginTop: 20,
  },
  bookaride: {
    fontSize: 18,
    color: "#fffff0",
    justifyContent: 'center',
    marginBottom: 5
  }
});
