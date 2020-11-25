import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { useLinkProps } from "@react-navigation/native";

export default function About(props) {
  const [fontsLoaded] = useFonts({
    "Gotham-Black": require("../assets/fonts/Gotham-Black.otf"),
    Bold: require("../assets/fonts/GothamBold.ttf"),
    GothamBook: require("../assets/fonts/GothamBook.ttf"),
    GothamLight: require("../assets/fonts/GothamLight.ttf"),
    GothamMedium: require("../assets/fonts/GothamMedium.ttf"),
    "Gotham-Thin": require("../assets/fonts/Gotham-Thin.otf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={{ marginTop: "3%", flex: 1 }}>
        <Text
          style={{
            fontSize: 8,
            color: "#4C4B4B",
            fontFamily: "Bold",
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#c1c1c1",
            fontFamily: "Medium",
          }}
        >
          {props.des}
        </Text>
      </View>
    );
  }
}
