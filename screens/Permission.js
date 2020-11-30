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
      <View
        style={{
          backgroundColor: "#19539C",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StatusBar style="auto" />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            margin: "12%",
          }}
        >
          <Text style={{ fontSize: 40, fontFamily: "Medium", color: "#fff" }}>
            Header
          </Text>
        </View>
        <ScrollView
          style={{ alignSelf: "center", marginTop: "4%" }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              width: 300,
              height: 460,
              elevation: 8,
              borderRadius: 20,
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
              <Avatar
                title="SE"
                size={200}
                containerStyle={{
                  backgroundColor: "#c1c1c1",
                }}
                rounded
              />
              <View style={{ width: "80%" }}>
                <Text
                  style={{
                    fontFamily: "Bold",
                    fontSize: 24,
                    textAlign: "center",
                  }}
                >
                  STORAGE
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
                  backgroundColor: "#19539C",
                }}
              >
                <Text style={{ color: "#fff", fontFamily: "Medium" }}>
                  Allow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 300,
              height: 460,
              elevation: 8,
              borderRadius: 20,
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
              <Avatar
                title="SE"
                size={200}
                containerStyle={{
                  backgroundColor: "#c1c1c1",
                }}
                rounded
              />
              <View style={{ width: "80%" }}>
                <Text
                  style={{
                    fontFamily: "Bold",
                    fontSize: 24,
                    textAlign: "center",
                  }}
                >
                  STORAGE
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
                  backgroundColor: "#19539C",
                }}
              >
                <Text style={{ color: "#fff", fontFamily: "Medium" }}>
                  Allow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 300,
              height: 460,
              elevation: 8,
              borderRadius: 20,
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
              <Avatar
                title="SE"
                size={200}
                containerStyle={{
                  backgroundColor: "#c1c1c1",
                }}
                rounded
              />
              <View style={{ width: "80%" }}>
                <Text
                  style={{
                    fontFamily: "Bold",
                    fontSize: 24,
                    textAlign: "center",
                  }}
                >
                  STORAGE
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
                  backgroundColor: "#19539C",
                }}
              >
                <Text style={{ color: "#fff", fontFamily: "Medium" }}>
                  Allow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Icon
          name="chevron-right"
          size={30}
          type="font-awesome-5"
          containerStyle={{
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 100,
            bottom: "6%",
            alignSelf: "flex-end",
            right: "8%",
          }}
          onPress={() => {
            navigation.push("About");
          }}
        />
      </View>
    );
  }
}
