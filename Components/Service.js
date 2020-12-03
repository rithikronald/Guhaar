import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Icon } from "react-native-elements";

import { useFonts } from "expo-font";

import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function Profile(props, { navigation }) {
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
          width: "100%",
          height: 50,
          elevation: 8,
          borderRadius: 10,
          backgroundColor: "#fff",
          marginVertical: "3%",
        }}
      >
        <View
          style={{
            flex: 13,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Icon
              name={props.Icon}
              type="font-awesome-5"
              size={30}
              color="#2a8ca7"
            />
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: "center",
              backgroundColor: "#2a8ca7",
              paddingHorizontal: "3%",
              borderTopEndRadius: 10,
              borderBottomEndRadius: 10,
            }}
          >
            <Text style={{ fontFamily: "Bold", fontSize: 20, color: "#fff" }}>
              {props.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
