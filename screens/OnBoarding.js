import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  Image,
  FlatList,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Icon } from "react-native-elements";

import { useFonts } from "expo-font";

import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function Profile({ navigation }) {
  const data = [
    {
      text: "India's First BlockChain Grieviance App",
      photo: require("../assets/images/blockchain.png"),
    },
    {
      text: "Welcome To Bastar's Own Grieviance App",
      photo: require("../assets/images/grievance-app.png"),
    },
  ];
  const [page, setPage] = useState(0);

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
            backgroundColor: "#19539C",
            borderRadius: window.width,
            width: window.width * 2,
            height: window.width * 2,
            marginLeft: -(window.width / 2),
            position: "absolute",
            overflow: "hidden",
            bottom: "35%",
          }}
        />
        <Header />
        <View
          style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}
        >
          <Image
            source={data[page].photo}
            style={{ width: 300, height: 300 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "Book",
              fontSize: 40,
              flexWrap: "wrap",
              margin: "6%",
              color: "#19539C",
            }}
          >
            {data[page].text}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <View
              style={{
                margin: "6%",
              }}
            >
              <Icon
                name="chevron-left"
                size={30}
                type="font-awesome-5"
                color="#fff"
                containerStyle={{
                  backgroundColor: "#19539C",
                  borderRadius: 100,
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setPage(page - 1);
                }}
              />
            </View>
            <View
              style={{
                margin: "6%",
              }}
            >
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
                  alignSelf: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  console.log(page);
                  console.log(`"${data[page].photo}"`);
                  setPage(page + 1);
                  console.log(page);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
