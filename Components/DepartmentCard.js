import React, { useState } from "react";
import { View, ActivityIndicator, Dimensions, Text } from "react-native";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";

export default function DepartmentCard(props, { navigation }) {
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
          borderRadius: 20,
          width: "90%",
          padding: "4%",
          flexDirection: "row",
          borderWidth: 2,
          borderColor: "#DAE0E2",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: "2%",
          paddingVertical: "6%",
        }}
      >
        <View style={{ flex: 4 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 20 }}>
            {props.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: "Light", color: "#c1c1c1" }}>
              {props.sub_1}
            </Text>
            <Text style={{ fontFamily: "Light", color: "#c1c1c1" }}>/</Text>
            <Text style={{ fontFamily: "Light", color: "#c1c1c1" }}>
              {props.sub_2}
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.5 }}>
          <Icon
            name="chevron-circle-right"
            type="font-awesome-5"
            style={{}}
            size={25}
            onPress={props.onPress}
          />
        </View>
      </View>
    );
  }
}
