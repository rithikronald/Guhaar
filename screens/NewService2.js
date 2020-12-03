import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ActivityIndicator, Dimensions } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import ServiceCard from "../Components/Service";

export default function NewService2({ navigation }) {
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
            New Service Request
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", padding: "8%" }}>
          <ServiceCard Icon="camera" name="Beneficial's Photo" />
          <ServiceCard Icon="stamp" name="Patwari's Stamp" />
          <ServiceCard Icon="id-card" name="Aadhar Card" />
          <ServiceCard Icon="file-alt" name="Caste Certificate" />
        </View>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: "#26ae60",
            borderRadius: 10,
            margin: "6%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end",
          }}
        >
          <Text style={{ color: "#fff", fontFamily: "Bold", fontSize: 20 }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
