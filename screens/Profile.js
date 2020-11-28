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
import { Avatar } from "react-native-elements";

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
      <View style={{ flex: 1, backgroundColor: "#ededed" }}>
        <StatusBar style="auto" />
        <BackGround />
        <Header />
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: "6%",
            borderRadius: 20,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            width: "86%",
            paddingVertical: "6%",
            marginTop: "6%",
            elevation: 8,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Avatar
              size="xlarge"
              title="MD"
              rounded
              containerStyle={{ backgroundColor: "#c1c1c1" }}
            />
          </View>
          <View
            style={{
              padding: "2%",
              marginLeft: "2%",
            }}
          >
            <Text
              style={{
                fontFamily: "Bold",
                fontSize: 20,
                marginVertical: "3%",
              }}
            >
              Himanshu Jain
            </Text>
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 11,
                marginVertical: "2%",
              }}
            >
              Phone Number
            </Text>
            <Text
              style={{
                fontFamily: "Light",
                fontSize: 14,
                marginVertical: "2%",
              }}
            >
              +91 9845522245
            </Text>
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 11,
                marginVertical: "2%",
              }}
            >
              Department
            </Text>
            <Text
              style={{
                fontFamily: "Light",
                fontSize: 14,
                marginVertical: "2%",
              }}
            >
              Complaint Register
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#19539a",
                borderRadius: 6,
                justifyContent: "center",
                alignItems: "center",
                width: 100,
                padding: "2%",
                marginTop: "4%",
              }}
              onPress={() => navigation.push("Dashboard")}
            >
              <Text style={{ color: "#fff", fontSize: 12, fontFamily: "Bold" }}>
                EDIT PROFILE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignSelf: "center",
            borderRadius: 20,
            elevation: 8,
            backgroundColor: "#fff",
            width: "86%",
            marginTop: "10%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                alignItems: "center",
                padding: "6%",
                margin: "4%",
                flexWrap: "wrap",
                flex: 1,
              }}
            >
              <Avatar
                size="large"
                title="1"
                rounded
                activeOpacity={1}
                containerStyle={{ backgroundColor: "#FF4848", margin: "2%" }}
              />
              <Text
                style={{
                  flexWrap: "wrap",
                  fontSize: 16,
                  textAlign: "center",
                  margin: "2%",
                }}
              >
                My Complaints
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                padding: "6%",
                margin: "4%",
                flexWrap: "wrap",
                flex: 1,
              }}
            >
              <Avatar
                size="large"
                title="0"
                rounded
                containerStyle={{ backgroundColor: "#4BCFFA", margin: "2%" }}
              />
              <Text style={{ fontSize: 16, textAlign: "center", margin: "2%" }}>
                My Pending Complaints
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                alignItems: "center",
                padding: "6%",
                margin: "4%",
                flexWrap: "wrap",
                flex: 1,
              }}
            >
              <Avatar
                size="large"
                title="1"
                rounded
                containerStyle={{ backgroundColor: "#badc57", margin: "2%" }}
              />
              <Text
                style={{
                  flexWrap: "wrap",
                  fontSize: 16,
                  textAlign: "center",
                  margin: "2%",
                }}
              >
                My Complaints
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                padding: "6%",
                margin: "4%",
                flexWrap: "wrap",
                flex: 1,
              }}
            >
              <Avatar
                size="large"
                title="0"
                rounded
                containerStyle={{ backgroundColor: "#F0DF87", margin: "2%" }}
              />
              <Text style={{ fontSize: 16, textAlign: "center", margin: "2%" }}>
                My Pending Complaints
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
