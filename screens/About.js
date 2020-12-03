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

export default function About({ navigation }) {
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
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>About Guhaar</Text>
        </View>

        <View style={styles.textRow}>
          <Text style={styles.boldText}>App version :</Text>
          <Text style={styles.normalText}> 1.5</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.boldText}>Build Number :</Text>
          <Text style={styles.normalText}>011.4050520</Text>
        </View>
        <Text style={styles.descripText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Text>
        <View style={styles.textRow}>
          <Text style={styles.footerText}>MADE WITH ❤ IN RETCON</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a8ca7",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: "10%",
  },

  titleContainer: {
    width: 260,
    marginTop: 50,
    borderRadius: 8,
    elevation: 10,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  titleText: {
    color: "#2a8ca7",
    fontSize: 22,
    fontWeight: "bold",
  },
  boldText: {
    color: "white",
    fontWeight: "bold",
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    flexDirection: "row",
  },
  normalText: {
    color: "white",
  },
  textRow: {
    padding: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  descripText: {
    color: "white",
    margin: 8,
    alignItems: "center",
  },
});
