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
import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function EditProfile({ navigation }) {
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
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#ededed" }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <StatusBar style="auto" />
        <BackGround />
        <Header />
        <View
          style={{
            height: 600,
            width: "90%",
            elevation: 8,
            borderRadius: 20,
            marginTop: "4%",
            padding: "8%",
            backgroundColor: "#fff",
            alignSelf: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Avatar
              size="xlarge"
              rounded
              title="MD"
              containerStyle={{ backgroundColor: "#c1c1c1" }}
            />
            <View
              style={{
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#19539a",
                  borderRadius: 10,
                  padding: "6%",
                  marginLeft: "8%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 12, fontFamily: "Bold" }}
                >
                  EDIT PICTURE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: "6%",
                  marginLeft: "8%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#19539a",
                    fontSize: 12,
                    fontFamily: "Bold",
                  }}
                >
                  REMOVE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: "5%",
              padding: "4%",
            }}
          >
            <Text
              style={{
                fontFamily: "Medium",
                marginTop: "4%",
                color: "#1a1a1a",
              }}
            >
              Name
            </Text>
            <TextInput
              placeholder="Himanchu jain"
              style={{
                borderBottomColor: "#c1c1c1",
                borderBottomWidth: 1,
                padding: "2%",
                fontSize: 18,
                fontFamily: "Light",
              }}
            />
            <Text style={{ fontFamily: "Medium", marginTop: "4%" }}>
              Phone Number
            </Text>
            <TextInput
              placeholder="9846152454"
              style={{
                borderBottomColor: "#c1c1c1",
                borderBottomWidth: 1,
                padding: "2%",
                fontSize: 18,
                fontFamily: "Light",
              }}
            />
            <Text style={{ fontFamily: "Medium", marginTop: "4%" }}>
              My Department
            </Text>
            <TextInput
              placeholder="Complaint Registration"
              style={{
                borderBottomColor: "#c1c1c1",
                borderBottomWidth: 1,
                padding: "2%",
                fontSize: 18,
                fontFamily: "Light",
              }}
            />
            <Text style={{ fontFamily: "Medium", marginTop: "4%" }}>
              Change Password
            </Text>
            <TextInput
              placeholder="Enter Your New Password"
              style={{
                borderBottomColor: "#c1c1c1",
                borderBottomWidth: 1,
                padding: "2%",
                fontSize: 18,
                fontFamily: "Light",
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#19539a",
              alignSelf: "center",
              padding: "3%",
              borderRadius: 20,
              width: "60%",
              marginTop: "6%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontFamily: "Light", color: "#fff" }}>
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
