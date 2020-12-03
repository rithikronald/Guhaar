import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-gesture-handler";

export default function ChangeLanguage({ navigation }) {
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
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            height: "20%",
            backgroundColor: "#19539C",
          }}
        >
          <Icon
            name="chevron-left"
            size={20}
            type="font-awesome-5"
            color="#19539C"
            containerStyle={{
              backgroundColor: "#fff",
              borderRadius: 100,
              width: 30,
              height: 30,
              justifyContent: "center",
              marginLeft: "5%",
              marginVertical: "8%",
            }}
          />
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 25,
              color: "#fff",
              marginLeft: "5%",
            }}
          >
            Change Language
          </Text>
        </View>

        <View style={styles.centerContent}>
          <Image
            source={require("../assets/images/language.png")}
            style={{ width: 200, height: 200 }}
          />
          <View style={styles.roundedBtnBlue}>
            <Text style={styles.titleText}>English</Text>
          </View>
          <View style={styles.roundedBtnWhite}>
            <Text style={styles.blueFont}>Hindi</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            bottom: "5%",
            alignSelf: "flex-end",
            borderRadius: 25,
            padding: 8,
            alignItems: "center",
            backgroundColor: "#19539C",
            justifyContent: "center",
            right: "3%",
          }}
          onPress={() => {
            navigation.push("Login");
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              marginHorizontal: "8%",
              fontFamily: "Bold",
            }}
          >
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    alignSelf: "stretch",
    height: 160,
    backgroundColor: "#19539C",
  },
  backBtn: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 50,
    margin: 24,
  },
  titleText: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    marginHorizontal: "8%",
  },
  roundedBtnBlue: {
    width: 260,
    marginTop: 16,
    borderRadius: 48,
    elevation: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#19539C",
  },
  roundedBtnWhite: {
    width: 260,
    marginTop: 8,
    borderRadius: 48,
    elevation: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  centerContent: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  saveBtn: {
    width: 120,
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    marginBottom: 6,
    marginEnd: 6,
    borderRadius: 48,
    elevation: 10,
    padding: 6,
    alignItems: "center",
    backgroundColor: "#19539C",
  },
  blueFont: {
    color: "#19539C",
    fontSize: 26,

    fontWeight: "bold",
    marginHorizontal: "8%",
  },
});
