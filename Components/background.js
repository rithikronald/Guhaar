import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export default function Background({ navigation }) {
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
          borderRadius: window.width,
          width: window.width * 2,
          height: window.width * 2,
          marginLeft: -(window.width / 2),
          position: "absolute",
          overflow: "hidden",
          bottom: "70%",
        }}
      />
    );
  }
}
