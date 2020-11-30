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
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Icon
              size={24}
              name="chevron-left"
              type="font-awesome-5"
              style={{ marginBottom: 4, marginRight: 2 }}
              color="#19539C"
            />
          </TouchableOpacity>

          <Text style={styles.titleText}>Change Language</Text>
        </View>

        <View style={styles.centerContent}>
          <Text style={styles.titleText}>Here comes image</Text>
          <View style={styles.roundedBtnBlue}>
            <Text style={styles.titleText}>English</Text>
          </View>
          <View style={styles.roundedBtnWhite}>
            <Text style={styles.blueFont}>Hindi</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => {
            navigation.push("Permission");
          }}
        >
          <Text style={styles.titleText}>Save →</Text>
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
