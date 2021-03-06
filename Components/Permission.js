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

import { useFonts } from "expo-font";

export default function Permission(props, { navigation }) {
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
          width: 280,
          height: "90%",
          elevation: 10,
          borderRadius: 50,
          backgroundColor: "#fff",
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: "4%",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              height: 160,
              width: 160,
              padding: "4%",
              borderRadius: 100,
              backgroundColor: "#ffd54f",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name={props.Icon}
              type="font-awesome-5"
              size={80}
              color="#fff"
              containerStyle={{}}
            />
          </View>
          <View style={{ width: "80%" }}>
            <Text
              style={{
                fontFamily: "Bold",
                fontSize: 24,
                textAlign: "center",
              }}
            >
              {props.title}
            </Text>
            <Text
              style={{
                fontFamily: "Book",
                fontSize: 18,
                flexWrap: "wrap",
                width: "60%",
                textAlign: "center",
                alignSelf: "center",
                marginVertical: "4%",
                color: "#c1c1c1",
              }}
            >
              Once upon a time there live a Ghost... And the name is Vikram
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 150,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1c549c",
              elevation: 8,
            }}
          >
            <Text style={{ color: "#fff", fontFamily: "Medium" }}>Allow</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
