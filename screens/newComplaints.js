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
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-gesture-handler";

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
      <View style={styles.container}>
        <StatusBar style="auto" />
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
        <Text style={styles.blueFont}>Personal Information</Text>
        <View style={styles.centerContent}>
          <TextInput placeholder="Full Name" style={styles.inputStyle} />

          <View style={styles.rowInputs}>
            <TextInput
              placeholder="Age Group"
              style={{
                marginEnd: 4,
                marginVertical: "2%",
                width: "50%",
                fontSize: 18,
                textAlignVertical: "top",
                shadowColor: "#0000",
                backgroundColor: "white",
                borderRadius: 6,
                paddingHorizontal: "5%",
                paddingVertical: "2%",
                fontFamily: "Medium",
              }}
            />

            <TextInput
              placeholder="Male"
              style={{
                marginVertical: "2%",
                width: "30%",
                fontSize: 18,
                textAlignVertical: "top",
                shadowColor: "#0000",
                backgroundColor: "white",
                borderRadius: 6,
                paddingHorizontal: "5%",
                paddingVertical: "2%",
                fontFamily: "Medium",
              }}
            />
          </View>

          <TextInput placeholder="Mobile Number" style={styles.inputStyle} />

          <TextInput
            placeholder="Enter Your Address"
            multiline={true}
            numberOfLines={4}
            style={{
              marginVertical: "2%",
              width: "80%",
              fontSize: 18,
              textAlignVertical: "top",
              shadowColor: "#0000",
              backgroundColor: "white",
              borderRadius: 6,
              paddingHorizontal: "5%",
              paddingVertical: "2%",
              fontFamily: "Medium",
            }}
          />
          <TextInput placeholder="Occupation" style={styles.inputStyle} />

          <TextInput
            placeholder="Identification Method"
            style={styles.inputStyle}
          />
          <TextInput placeholder="ID Card Number" style={styles.inputStyle} />
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
            navigation.push("ChangeLanguage");
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
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontFamily: "Bold",
  },
  header: {
    alignSelf: "stretch",
    height: "20%",
    backgroundColor: "#19539C",
  },
  backBtn: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 50,
    margin: 24,
  },
  titleText: {
    fontSize: 26,
    color: "white",
    marginHorizontal: "8%",
    fontFamily: "Book",
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
    marginTop: "2%",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  blueFont: {
    color: "#19539C",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: "10%",
    paddingTop: 8,
    fontFamily: "Bold",
  },
  inputStyle: {
    marginVertical: "2%",
    width: "80%",
    fontSize: 18,
    shadowColor: "#0000",
    backgroundColor: "white",
    borderRadius: 6,
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    fontFamily: "Medium",
  },
  rowInputs: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
