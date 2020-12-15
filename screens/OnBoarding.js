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

export default function OnBoarding({ navigation }) {
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
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar style="auto" />
        <View
          style={{
            backgroundColor: "#1c549c",
            borderRadius: window.width,
            width: window.width * 2,
            height: window.width * 2,
            marginLeft: -(window.width / 2),
            position: "absolute",
            overflow: "hidden",
            bottom: "35%",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            margin: "3%",
            marginTop: "12%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flex: 3,
            }}
          >
            <Image
              style={{
                width: 34,
                height: 28,
                marginLeft: "5%",
                marginRight: "2%",
              }}
              source={require("../assets/images/logo-light.png")}
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
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            height: "50%",
            padding: "4%",
            width: "100%",
          }}
        >
          <Image
            source={data[page].photo}
            style={{
              width: 250,
              height: 250,
              alignSelf: "center",
            }}
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
              color: "#1c549c",
              lineHeight: 43,
            }}
          >
            {data[page].text}
          </Text>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
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
                  backgroundColor: "#1c549c",
                  borderRadius: 100,
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                  justifyContent: "center",
                  elevation: 8,
                }}
                disabled={page == 0 ? true : false}
                disabledStyle={{ backgroundColor: "transparent" }}
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
                  backgroundColor: "#1c549c",
                  borderRadius: 100,
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                  justifyContent: "center",
                  elevation: 8,
                }}
                onPress={() => {
                  page != 1 ? setPage(page + 1) : navigation.push("Permission");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
