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
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Icon } from "react-native-elements";
import axios from "axios";

import { useFonts } from "expo-font";

import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function Profile({ navigation }) {
  const [mobile, setMobile] = useState("");

  function post() {
    var data = new FormData();
    data.append("mobile", mobile);

    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/send-otp", data)
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        navigation.push("OTP", {
          mobile: mobile,
          key: response.data.key,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
      <View style={{ flex: 1, backgroundColor: "#1c549c" }}>
        <StatusBar style="auto" />
        <Header />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Image
            source={require("../assets/images/logo-light.png")}
            style={{
              width: 180,
              height: 120,
              marginVertical: "20%",
              marginHorizontal: "10%",
            }}
          />
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
              maxLength={10}
              onChangeText={(txt) => {
                setMobile(txt);
              }}
            />
            <View style={{ flex: 1 }}>
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
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  elevation: 8,
                }}
                onPress={() => {
                  post();
                  //console.log(mobile);
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Book" }}>Department Login</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("DeptLogin");
                }}
              >
                <Text
                  style={{
                    color: "#19359c",
                    fontFamily: "Medium",
                    marginLeft: "3%",
                  }}
                >
                  Click here!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
