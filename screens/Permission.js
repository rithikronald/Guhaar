import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Icon } from "react-native-elements";
import PermissionCard from "../Components/Permission";

import { useFonts } from "expo-font";

export default function Profile({ navigation }) {
  const [search, setSearch] = useState("");
  const window = Dimensions.get("window");

  const [fontsLoaded] = useFonts({
    Black: require("../assets/fonts/Gotham-Black.otf"),
    Bold: require("../assets/fonts/GothamBold.ttf"),
    Book: require("../assets/fonts/GothamBook.ttf"),
    Light: require("../assets/fonts/GothamLight.ttf"),
    Medium: require("../assets/fonts/GothamMedium.ttf"),
    Thin: require("../assets/fonts/Gotham-Thin.otf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View
        style={{
          backgroundColor: "#2a8ca7",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StatusBar style="auto" />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            margin: "12%",
          }}
        >
          <Text style={{ fontSize: 40, fontFamily: "Medium", color: "#fff" }}>
            Header
          </Text>
        </View>
        <ScrollView
          style={{ alignSelf: "center", marginTop: "4%" }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <PermissionCard title="STORAGE" Icon="folder" />
          <PermissionCard title="CAMERA" Icon="camera-retro" />
          <PermissionCard title="LOCATION" Icon="search-location" />
          <PermissionCard title="VOICE RECORDING" Icon="microphone-alt" />
        </ScrollView>
        <Icon
          name="chevron-right"
          size={30}
          type="font-awesome-5"
          containerStyle={{
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 100,
            bottom: "6%",
            alignSelf: "flex-end",
            right: "8%",
          }}
          onPress={() => {
            navigation.push("ChangeLanguage");
          }}
        />
      </View>
    );
  }
}
