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
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Icon
              name="chevron-left"
              size={18}
              type="font-awesome-5"
              color="#19539C"
            />
          </TouchableOpacity>

          <Text style={styles.titleText}>New Service Request</Text>
        </View>

        <View style={styles.centerContent}>
          {/* Custom Button Code start*/}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "black",
              borderRadius: 12,
              elevation: 10,
              margin: "4%",
              width: "100%",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Icon
              name="camera"
              size={28}
              type="font-awesome-5"
              color="#19539C"
              style={{
                width: "60%",
                backgroundColor: "white",
                padding: "6%",
                alignSelf: "center",
              }}
            />

            <Text
              style={{
                fontSize: 26,
                color: "white",
                fontFamily: "Medium",
                backgroundColor: "#19539C",
                width: "81%",
                alignSelf: "stretch",
                padding: "5%",
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                marginEnd: "8%",
              }}
            >
              Beneficial's Photo
            </Text>
          </View>
          {/* Custom Button Code end */}
          {/* Custom Button Code start*/}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "black",
              borderRadius: 12,
              elevation: 10,
              margin: "4%",
              width: "100%",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Icon
              name="pen"
              size={28}
              type="font-awesome-5"
              color="#19539C"
              style={{
                width: "60%",
                backgroundColor: "white",
                padding: "6%",
                alignSelf: "center",
              }}
            />

            <Text
              style={{
                fontSize: 26,
                color: "white",
                fontFamily: "Medium",
                backgroundColor: "#19539C",
                width: "81%",
                alignSelf: "stretch",
                padding: "5%",
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                marginEnd: "8%",
              }}
            >
              Patwari's Photo
            </Text>
          </View>
          {/* Custom Button Code end */}

          {/* Custom Button Code start*/}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "black",
              borderRadius: 12,
              elevation: 10,
              margin: "4%",
              width: "100%",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Icon
              name="camera"
              size={28}
              type="font-awesome-5"
              color="#19539C"
              style={{
                width: "60%",
                backgroundColor: "white",
                padding: "6%",
                alignSelf: "center",
              }}
            />

            <Text
              style={{
                fontSize: 26,
                color: "white",
                fontFamily: "Medium",
                backgroundColor: "#19539C",
                width: "81%",
                alignSelf: "stretch",
                padding: "5%",
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                marginEnd: "8%",
              }}
            >
              Caste Certificate
            </Text>
          </View>
          {/* Custom Button Code end */}
          {/* Custom Button Code start*/}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "black",
              borderRadius: 12,
              elevation: 10,
              margin: "4%",
              width: "100%",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Icon
              name="pen"
              size={28}
              type="font-awesome-5"
              color="#19539C"
              style={{
                width: "60%",
                backgroundColor: "white",
                padding: "6%",
                alignSelf: "center",
              }}
            />

            <Text
              style={{
                fontSize: 26,
                color: "white",
                fontFamily: "Medium",
                backgroundColor: "#19539C",
                width: "81%",
                alignSelf: "stretch",
                padding: "5%",
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                marginEnd: "8%",
              }}
            >
              Aadhar Card
            </Text>
          </View>
          {/* Custom Button Code end */}
        </View>
        {/* centerContent end */}

        <View
          style={{
            flex: 4,
            flexDirection: "column",
            flexGrow: 1,
            borderRadius: 12,
            elevation: 10,
            margin: "4%",
            width: "90%",
            height: "10%",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginHorizontal: "8%",
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "grey",
                fontFamily: "Medium",
                padding: "4%",
              }}
            >
              img01.jpg
            </Text>

            <View
              style={{
                width: "40%",
                padding: "4%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Icon
                name="redo"
                size={18}
                type="font-awesome-5"
                color="grey"
                style={{ marginHorizontal: "4%" }}
              />

              <Icon
                name="times"
                size={18}
                type="font-awesome-5"
                color="grey"
                style={{ marginHorizontal: "4%" }}
              />
            </View>
          </View>
          {/* ROW END */}

          {/* IMAGE CONTAINER */}

          <View
            style={{
              width: "100%",
              height: "40%",
            }}
          ></View>
        </View>
        {/* COLUMN END */}

        <View style={styles.saveBtn}>
          <Text
            style={{
              fontSize: 16,
              color: "white",

              marginHorizontal: "8%",
              fontFamily: "Bold",
            }}
          >
            SUBMIT →
          </Text>
        </View>
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
    margin: "6%",
  },
  titleText: {
    fontSize: 26,
    color: "white",
    marginHorizontal: "8%",
    fontFamily: "Medium",
  },

  centerContent: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  saveBtn: {
    width: "28%",
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    marginBottom: "2%",
    marginEnd: "2%",
    borderRadius: 48,
    elevation: 10,
    padding: "6%",
    alignItems: "center",
    backgroundColor: "#009345",
    textAlign: "center",
  },
  rowInputs: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginHorizontal: "8%",
  },
});
