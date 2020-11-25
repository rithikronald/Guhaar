import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Pressable,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-gesture-handler";

export default function Header({ navigation }) {
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
          flexDirection: "row",
          justifyContent: "center",
          margin: "3%",
          marginTop: "12%",
        }}
      >
        <Icon
          name="arrow-back"
          size={25}
          color="#fff"
          style={{ flex: 1, marginLeft: "5%" }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 3,
          }}
        >
          <Avatar
            rounded
            size={30}
            source={require("../assets/logo.png")}
            containerStyle={{ marginHorizontal: "5%" }}
          />
          <View style={{ borderLeftColor: "#fff", borderLeftWidth: 1 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                paddingHorizontal: 15,
                fontFamily: "Light",
              }}
            >
              Guhaar App
            </Text>
            <Text
              style={{
                fontSize: 8,
                marginLeft: 10,
                color: "#fff",
                fontFamily: "Light",
              }}
            >
              Baster Districk Administration , Chattisgarh
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
