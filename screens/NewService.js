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
  ScrollView,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-gesture-handler";

export default function NewService({ navigation }) {
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
              marginVertical: "9.5%",
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

        <ScrollView style={{ width: "100%", alignSelf: "center" }}>
          <View style={styles.centerContent}>
            <TextInput placeholder="Tehsil" style={styles.inputStyle} />
            <View style={styles.rowInputs}>
              <TextInput
                placeholder="Center"
                style={{
                  marginEnd: 4,
                  marginVertical: "2%",
                  width: "50%",
                  fontSize: 18,
                  textAlignVertical: "top",
                  shadowColor: "#0000",
                  backgroundColor: "white",
                  shadowOffset: {
                    width: 10,
                    height: 10,
                  },
                  elevation: 1,
                  shadowOpacity: 100.0,
                  shadowRadius: 60,
                  borderRadius: 6,
                  paddingHorizontal: "5%",
                  paddingVertical: "2%",
                  fontFamily: "Medium",
                }}
              />

              <TextInput
                placeholder="MALE"
                style={{
                  marginVertical: "2%",
                  width: "30%",
                  fontSize: 18,
                  textAlignVertical: "top",
                  shadowColor: "#0000",
                  backgroundColor: "white",
                  shadowOffset: {
                    width: 10,
                    height: 10,
                  },
                  elevation: 1,
                  shadowOpacity: 100.0,
                  shadowRadius: 60,
                  borderRadius: 6,
                  paddingHorizontal: "5%",
                  paddingVertical: "2%",
                  fontFamily: "Medium",
                }}
              />
            </View>

            <TextInput
              placeholder="Name of Applicant"
              style={styles.inputStyle}
            />

            <TextInput
              placeholder="Benificial's Name"
              style={styles.inputStyle}
            />

            <TextInput placeholder="Father's Name" style={styles.inputStyle} />

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
                shadowOffset: {
                  width: 10,
                  height: 10,
                },
                elevation: 1,
                shadowOpacity: 100.0,
                shadowRadius: 60,
                borderRadius: 6,
                paddingHorizontal: "5%",
                paddingVertical: "2%",
                lineHeight: 24,
                fontFamily: "Medium",
              }}
            />

            <View style={styles.rowInputs}>
              <TextInput
                placeholder="Caste"
                style={{
                  marginEnd: 4,
                  marginVertical: "2%",
                  width: "40%",
                  fontSize: 18,
                  textAlignVertical: "top",
                  shadowColor: "#0000",
                  backgroundColor: "white",
                  shadowOffset: {
                    width: 10,
                    height: 10,
                  },
                  elevation: 1,
                  shadowOpacity: 100.0,
                  shadowRadius: 60,
                  borderRadius: 6,
                  paddingHorizontal: "5%",
                  paddingVertical: "2%",
                  fontFamily: "Medium",
                }}
              />

              <TextInput
                placeholder="Category"
                style={{
                  marginVertical: "2%",
                  width: "40%",
                  fontSize: 18,
                  textAlignVertical: "top",
                  shadowColor: "#0000",
                  backgroundColor: "white",
                  shadowOffset: {
                    width: 10,
                    height: 10,
                  },
                  elevation: 1,
                  shadowOpacity: 100.0,
                  shadowRadius: 60,
                  borderRadius: 6,
                  paddingHorizontal: "5%",
                  paddingVertical: "2%",
                  fontFamily: "Medium",
                }}
              />
            </View>

            <TextInput placeholder="Occupation" style={styles.inputStyle} />
            <TextInput placeholder="Mobile Number" style={styles.inputStyle} />
          </View>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => {
              navigation.push("NewService2");
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginHorizontal: "8%",
                fontFamily: "Bold",
              }}
            >
              NEXT
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
    height: "22%",
    backgroundColor: "#2a8ca7",
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
    margin: "6%",
  },
  titleText: {
    fontSize: 26,
    color: "white",

    marginHorizontal: "8%",
    fontFamily: "Medium",
  },
  roundedBtnBlue: {
    width: "60%",
    marginTop: "8%",
    borderRadius: 48,
    elevation: 10,
    padding: "8%",
    alignItems: "center",
    backgroundColor: "#2a8ca7",
  },
  roundedBtnWhite: {
    width: "60%",
    marginTop: "8%",
    borderRadius: 48,
    elevation: 10,
    padding: "8%",
    alignItems: "center",
    backgroundColor: "white",
  },
  centerContent: {
    marginTop: "2%",
    flex: 1,
    alignItems: "center",
  },
  saveBtn: {
    width: "28%",
    alignSelf: "flex-end",
    borderRadius: 10,
    padding: "3%",
    alignItems: "center",
    backgroundColor: "#2a8ca7",
    margin: "6%",
  },
  blueFont: {
    color: "#2a8ca7",
    fontSize: 24,
    marginHorizontal: "10%",
    marginVertical: "3%",
    fontFamily: "Medium",
  },
  inputStyle: {
    marginVertical: "2%",
    width: "80%",
    fontSize: 18,
    shadowColor: "#0000",
    backgroundColor: "white",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 1,
    shadowOpacity: 100.0,
    shadowRadius: 60,
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
