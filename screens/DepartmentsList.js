import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SearchBar, Icon } from "react-native-elements";
import DepartmentCard from "../Components/DepartmentCard";
import DataList from "../data/DepartmenList";

import { useFonts } from "expo-font";

import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function DepartmentsList({ navigation }) {
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
        <View style={{ flex: 1, alignItems: "center", padding: "2%" }}>
          <SearchBar
            placeholder="Search..."
            onChangeText={(val) => {
              setSearch(val);
            }}
            value={search}
            containerStyle={{
              width: "86%",
              marginTop: "10%",
              borderRadius: 20,
              backgroundColor: "#fff",
            }}
            inputContainerStyle={{ borderRadius: 40, backgroundColor: "#fff" }}
            round
            lightTheme
          />
          <FlatList
            style={{ flex: 1, width: "100%", marginTop: "6%" }}
            data={DataList}
            renderItem={({ item }) => (
              <DepartmentCard
                name={item.department}
                sub_1={item.sub_1}
                sub_2={item.sub_2}
                onPress={() => {
                  navigation.push("Profile");
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
