import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import OTPTextInput from "react-native-otp-textinput";
import axios from "axios";

import { useFonts } from "expo-font";

export default function OTP({ navigation, route }) {
  const otpInput = useRef(null);

  const [otp, setOtp] = useState(0);

  function post() {
    var data = new FormData();
    data.append("mobile", route.params.mobile);
    data.append("key", route.params.key);
    data.append("otp", otp);
    console.log(data);

    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/verify-otp", data)
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        response.data.flag == true
          ? navigation.push("HomeDashboard")
          : alert("OTP Not Verified");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

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
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar style="auto" />
        <View
          style={{
            width: "100%",
            height: "20%",
            backgroundColor: "#1c549c",
          }}
        >
          <Icon
            name="chevron-left"
            size={18}
            type="font-awesome-5"
            color="#1c549c"
            containerStyle={{
              backgroundColor: "#fff",
              borderRadius: 100,
              width: 25,
              height: 25,
              marginLeft: "5%",
              marginVertical: "6%",
              justifyContent: "center",
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontFamily: "Book",
              fontSize: 18,
              lineHeight: 30,
              marginLeft: "5%",
            }}
          >
            We've send an OTP to your mobile number +91 {route.params.mobile}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Medium",
            fontSize: 20,
            margin: "5%",
            marginTop: "8%",
          }}
        >
          One Time Password :
        </Text>
        <View
          style={{
            padding: "10%",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <OTPTextInput
            ref={(e) => (otpInput.current = e)}
            inputCount={6}
            handleTextChange={(text) => {
              setOtp(text);
            }}
          />
        </View>
        <Icon
          name="chevron-right"
          size={30}
          type="font-awesome-5"
          color="#fff"
          containerStyle={{
            backgroundColor: "#1c549c",
            borderRadius: 100,
            width: 50,
            height: 50,
            alignSelf: "flex-end",
            justifyContent: "center",
            margin: "10%",
            elevation: 8,
          }}
          onPress={() => {
            post();
          }}
        />
      </View>
    );
  }
}

{
  /*
<TextInput
            style={{
              width: 30,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 30,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 30,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 30,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 30,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
            ref={pin5Ref}
          />
          <TextInput
            style={{
              width: 30,
              height: 50,
              borderBottomColor: "#c1c1c1",
              borderBottomWidth: 4,
              fontFamily: "Bold",
              fontSize: 30,
              textAlign: "center",
            }}
            keyboardType="number-pad"
            maxLength={1}
          />
*/
}
