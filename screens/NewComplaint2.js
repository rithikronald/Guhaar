import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-gesture-handler";
import ServiceCard from "../Components/Service";

export default function NewComplaint({ navigation }) {
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
            backgroundColor: "#2a8ca7",
          }}
        >
          <Icon
            name="chevron-left"
            size={20}
            type="font-awesome-5"
            color="#2a8ca7"
            containerStyle={{
              backgroundColor: "#fff",
              borderRadius: 100,
              width: 30,
              height: 30,
              justifyContent: "center",
              marginLeft: "5%",
              marginVertical: "9%",
            }}
          />
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 25,
              color: "#fff",
              marginLeft: "5%",
              flex: 1,
            }}
          >
            Lodge New Complaints
          </Text>
        </View>
        <View style={{ flex: 1, paddingHorizontal: "6%" }}>
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 25,
              marginVertical: "4%",
              color: "#2a8ca7",
            }}
          >
            Complaint Details
          </Text>
          <ScrollView
            style={{
              alignSelf: "center",
              width: "100%",
              marginVertical: "2%",
            }}
            showsVerticalScrollIndicator={false}
          >
            <TextInput
              placeholder="Block Name"
              style={{
                color: "#c1c1c1",
                height: 50,
                borderRadius: 10,
                backgroundColor: "#fff",
                fontSize: 20,
                fontFamily: "Bold",
                paddingLeft: 15,
                marginVertical: "3%",
                padding: 10,
              }}
            />
            <TextInput
              placeholder="Subject of Complaint"
              style={{
                color: "#c1c1c1",
                height: 50,
                marginVertical: "3%",
                borderRadius: 10,
                backgroundColor: "#fff",
                fontSize: 20,
                fontFamily: "Bold",
                paddingLeft: 15,
                padding: 10,
              }}
            />
            <TextInput
              placeholder="Block Name"
              style={{
                color: "#c1c1c1",
                height: 150,
                borderRadius: 10,
                backgroundColor: "#fff",
                fontSize: 20,
                fontFamily: "Bold",
                paddingLeft: 15,
                marginVertical: "2%",
                textAlignVertical: "top",
                padding: 10,
              }}
            />
            <View
              style={{
                width: "96%",
                height: 50,
                borderRadius: 10,
                backgroundColor: "#2a8ca7",
                marginVertical: "3%",
              }}
            >
              <View
                style={{
                  flex: 13,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    paddingHorizontal: "3%",
                    borderRadius: 10,
                    flex: 5,
                  }}
                >
                  <Text
                    style={{ fontFamily: "Bold", fontSize: 20, color: "#fff" }}
                  >
                    Record Your Voice
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    height: 60,
                    borderRadius: 100,
                    width: 60,
                    alignSelf: "center",
                    left: 10,
                    elevation: 4,
                  }}
                >
                  <Icon
                    name="microphone-alt"
                    type="font-awesome-5"
                    size={25}
                    color="#2a8ca7"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 50,

                borderRadius: 10,
                backgroundColor: "#fff",
                marginVertical: "3%",
              }}
            >
              <View
                style={{
                  flex: 13,
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 2, justifyContent: "center" }}>
                  <Icon
                    name="camera"
                    type="font-awesome-5"
                    size={30}
                    color="#2a8ca7"
                  />
                </View>
                <View
                  style={{
                    flex: 5,
                    justifyContent: "center",
                    backgroundColor: "#2a8ca7",
                    paddingHorizontal: "3%",
                    borderTopEndRadius: 10,
                    borderBottomEndRadius: 10,
                  }}
                >
                  <Text
                    style={{ fontFamily: "Bold", fontSize: 20, color: "#fff" }}
                  >
                    Upload Your Image
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 50,

                borderRadius: 10,
                backgroundColor: "#fff",
                marginVertical: "3%",
              }}
            >
              <View
                style={{
                  flex: 13,
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 2, justifyContent: "center" }}>
                  <Icon
                    name="file"
                    type="font-awesome-5"
                    size={30}
                    color="#2a8ca7"
                  />
                </View>
                <View
                  style={{
                    flex: 5,
                    justifyContent: "center",
                    backgroundColor: "#2a8ca7",
                    paddingHorizontal: "3%",
                    borderTopEndRadius: 10,
                    borderBottomEndRadius: 10,
                  }}
                >
                  <Text
                    style={{ fontFamily: "Bold", fontSize: 20, color: "#fff" }}
                  >
                    Upload File
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#26ae60",
                borderRadius: 10,
                marginVertical: "6%",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "Bold", fontSize: 20 }}>
                Submit
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
