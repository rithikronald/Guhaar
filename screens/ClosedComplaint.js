import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";

import { useFonts } from "expo-font";

import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function ClosedComplaint({ navigation }) {
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
      <View style={{ flex: 1, backgroundColor: "#ededed" }}>
        <StatusBar style="auto" />
        <BackGround />
        <Header />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30%",
          }}
        >
          <Image
            source={require("../assets/images/no-complaints-found.png")}
            style={{ width: 300, height: 200 }}
          />
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 25,
              color: "#c1c1c1",
              margin: "2%",
            }}
          >
            No Complaints
          </Text>
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 18,
              color: "#ddd",
            }}
          >
            Found Here
          </Text>
          <TouchableOpacity
            style={{
              width: 150,
              height: 40,
              backgroundColor: "#1c549c",
              alignItems: "center",
              justifyContent: "center",
              margin: "3%",
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.pop();
            }}
          >
            <Text style={{ fontFamily: "Medium", fontSize: 14, color: "#fff" }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
