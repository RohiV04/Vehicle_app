import { View, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Avatar,
  Title,
  Text,
  Caption,
  TouchableRipple,
} from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import EditProfileScreen from "./EditProfileScreen";

export default function ProfileScreen() {
  const { isSignedIn, user } = useUser();
  console.log(user);
  const { isLoaded, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image source={{ uri: user.imageUrl }} size={80} />
            <View style={{ marginLeft: 20 }}>
              <Title style={styles.title}>{user.lastName}</Title>
              <Caption style={styles.caption}>{user.fullName}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Entypo name="location" size={20} color="#777777" />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              Vijayawada, India
            </Text>
          </View>
          <View style={styles.row}>
            <FontAwesome6 name="phone" size={20} color="#777777" />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              +91 9999999999
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialIcons name="email" size={20} color="#777777" />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {user.emailAddresses[0].emailAddress}
            </Text>
          </View>
        </View>

        <View style={styles.editProfile}>
          <Button
            mode="elevated"
            onPress={() => {}}
            style={{
              borderRadius: 10,
              borderStyle: "dashed",
              borderColor: "#4682B4",
            }}
            rippleColor={"#4682B4"}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather name="edit" size={20} color="black" />
              <Text style={{ marginLeft: 10 }}>Edit Profile</Text>
            </View>
          </Button>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox}>
            <Title>
              <FontAwesome name="rupee" size={18} color="black" />
              100
            </Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>11</Title>
            <Caption>Rides</Caption>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <MaterialIcons name="favorite-border" size={22} color="#4682B4" />
              <Text style={styles.menuItemText}>Your Favourites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <MaterialIcons name="payment" size={24} color="#4682B4" />
              <Text style={styles.menuItemText}>Payments</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <FontAwesome name="share" size={24} color="#4682B4" />
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Feather name="settings" size={24} color="#4682B4" />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={signOut}>
            <View style={styles.menuItem}>
              <FontAwesome name="sign-out" size={24} color="#4682B4" />
              <Text style={styles.menuItemText}>Sign Out</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  editProfile: {
    flexDirection: "row",
    justifyContent: "center",
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    marginTop: 15,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "#dddddd",
    borderRightWidth: 1,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
