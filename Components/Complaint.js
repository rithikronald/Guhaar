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
import { Icon } from "react-native-elements";

import { useFonts } from "expo-font";

export default function Profile(props, { navigation }) {
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
          width: "90%",
          height: 200,
          borderRadius: 20,
          backgroundColor: "#fff",
          elevation: 8,
          padding: "4%",
          marginTop: "4%",
        }}
      >
        <Text style={{ fontFamily: "Bold", color: "#c1c1c1", fontSize: 16 }}>
          General Request
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: "3%",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontFamily: "Bold", fontSize: 10 }}>
              Complaint Number
            </Text>
            <Text style={{ fontFamily: "Medium", fontSize: 18 }}>SGV-263</Text>
          </View>
          <View style={{}}>
            <Text style={{ fontFamily: "Bold", fontSize: 10 }}>Date</Text>
            <Text style={{ fontFamily: "Medium", fontSize: 18 }}>
              20-08-2020
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: "2%",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontFamily: "Bold", fontSize: 10 }}>
              Applicant's Name
            </Text>
            <Text
              style={{
                fontFamily: "Light",
                fontSize: 16,
                flexWrap: "wrap",
              }}
            >
              Himanshu Jain
            </Text>
          </View>
          <View>
            <Text style={{ fontFamily: "Bold", fontSize: 10 }}>Department</Text>
            <Text
              style={{
                fontFamily: "Light",
                fontSize: 16,
                flexWrap: "wrap",
              }}
            >
              State Issue
            </Text>
          </View>
          <View>
            <Text style={{ fontFamily: "Bold", fontSize: 10 }}>Location</Text>
            <Text
              style={{
                fontFamily: "Light",
                fontSize: 16,
                flexWrap: "wrap",
              }}
            >
              Chennai
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: "2%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="circle"
              color="#BA2F16"
              type="font-awesome"
              size={15}
              containerStyle={{ alignSelf: "center" }}
            />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 12,
                fontFamily: "Black",
                marginLeft: "2%",
              }}
            >
              REJECTED
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#2a8ca7",
              borderRadius: 20,
            }}
            onPress={props.onPress}
          >
            <Text style={{ color: "#fff" }}>Open</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
