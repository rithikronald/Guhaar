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
import ComplaintCard from "../Components/Complaint";

import { useFonts } from "expo-font";

import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function Profile({ navigation }) {
  const window = Dimensions.get("window");
  const SECTIONS = [
    {
      title: "First",
      content: "Lorem ipsum...",
    },
    {
      title: "Second",
      content: "Lorem ipsum...",
    },
  ];
  const [activeSection, setActiveSection] = useState([]);

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
        <View style={{ flex: 1, alignItems: "center", marginTop: "4%" }}>
          <ComplaintCard
            onPress={() => {
              navigation.push("ComplaintDetails");
            }}
          />
          <ComplaintCard
            onPress={() => {
              navigation.push("ComplaintDetails");
            }}
          />
        </View>
      </View>
    );
  }
}
