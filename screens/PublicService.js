import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, ActivityIndicator, Dimensions, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";

import { useFonts } from "expo-font";

import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function PublicService({ navigation }) {
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
            width: "86%",
            elevation: 8,
            height: "80%",
            padding: "4%",
            borderRadius: 20,
            backgroundColor: "#fff",
            marginTop: "4%",
            alignSelf: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontFamily: "Medium", padding: "3%", fontSize: 25 }}>
              Public Service
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: "#ddd",
                  borderRadius: 100,
                }}
                onPress={() => {
                  navigation.push("NewComplaints");
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/lodge-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Book",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                My Pending Complaint
              </Text>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: "#ddd",
                  borderRadius: 100,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/my-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Book",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                My Complaint
              </Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: "#ddd",
                  borderRadius: 100,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/lodge-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Book",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                My Pending Complaint
              </Text>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: "#ddd",
                  borderRadius: 100,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/my-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Book",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                My Complaint
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: "#ddd",
                  borderRadius: 100,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/closed-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Book",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                Closed Complaint
              </Text>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: "#ddd",
                  borderRadius: 100,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/rejected-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Book",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                Rejected Complaint
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: "#ddd",
                  borderRadius: 100,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/public-service.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Book",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                Public Service
              </Text>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: "#ddd",
                  borderRadius: 100,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/all-departments.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Book",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                All Departments
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
