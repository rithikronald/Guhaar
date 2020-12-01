import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Icon } from "react-native-elements";

import { useFonts } from "expo-font";

import BackGround from "../Components/background";
import Header from "../Components/Header";

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
      <View style={{ flex: 1, backgroundColor: "#19539C" }}>
        <StatusBar style="auto" />
        <Header />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: "30%",
              padding: "6%",
            }}
          >
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 16,
              }}
            >
              Phone Number
            </Text>
            <TextInput
              placeholder="Enter Phone Number"
              style={{
                height: 50,
                width: "80%",
                borderBottomColor: "#c1c1c1",
                borderBottomWidth: 1,
                marginVertical: "4%",
                fontSize: 18,
                fontFamily: "Book",
              }}
              keyboardType="number-pad"
              maxlength={10}
            />
            <View style={{ flex: 1 }}>
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
                  justifyContent: "center",
                  alignSelf: "flex-end",
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
