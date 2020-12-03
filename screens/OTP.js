import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

import { useFonts } from "expo-font";

export default function OTP({ navigation }) {
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
        <View
          style={{
            width: "100%",
            height: "20%",
            backgroundColor: "#19539C",
            padding: "4%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Book",
              fontSize: 18,
              lineHeight: 30,
            }}
          >
            We've send an OTP to your mobile number +91 9810116033
          </Text>
        </View>
        <Text style={{ fontFamily: "Medium", fontSize: 20, margin: "5%" }}>
          One Time Password :
        </Text>
        <View
          style={{
            padding: "10%",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>

        <Icon
          name="chevron-right"
          size={30}
          type="font-awesome-5"
          color="#fff"
          containerStyle={{
            backgroundColor: "#19539C",
            borderRadius: 100,
            width: 50,
            height: 50,
            alignSelf: "flex-end",
            justifyContent: "center",
            margin: "10%",
          }}
          onPress={() => {
            navigation.push("HomeDashboard");
          }}
        />
      </View>
    );
  }
}
