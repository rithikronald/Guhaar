import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import Header from "../../Components/Header";
import axios from 'axios'

export default function DeptLogin({ navigation }) {
  const [mobile,setMobile] = useState()
  const [password,setPassword] = useState()

  function post() {
    var data = new FormData();
    data.append("email", mobile);
    data.append('password',password)
    data.append('noti_token',null)
    data.append('app_version',"iGuhaar.01")

    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/employee-login", data)
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        navigation.push("DeptDashboard",{
          uid:response.data.emp_key
        });
      })
      .catch(function (error) {
        console.log(error);
        alert('Check your Number and Password')
      });
  }

  const [fontsLoaded] = useFonts({
    Black: require("../../assets/fonts/Gotham-Black.otf"),
    Bold: require("../../assets/fonts/GothamBold.ttf"),
    Book: require("../../assets/fonts/GothamBook.ttf"),
    Light: require("../../assets/fonts/GothamLight.ttf"),
    Medium: require("../../assets/fonts/GothamMedium.ttf"),
    Thin: require("../../assets/fonts/Gotham-Thin.otf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "#1c549c" }}>
        <StatusBar style="auto" />
        <Header />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Image
            source={require("../../assets/images/logo-light.png")}
            style={{
              width: 180,
              height: 120,
              marginVertical: "20%",
              marginHorizontal: "10%",
            }}
          />
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: "40%",
              padding: "6%",
            }}
          >
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 16,
              }}
            >
              Phone Number
            </Text>
            <TextInput
              placeholder="Enter Phone Number"
              style={{
                height: 40,
                width: "80%",
                borderBottomColor: "#c1c1c1",
                borderBottomWidth: 1,
                marginVertical: "3%",
                fontSize: 18,
                fontFamily: "Book",
              }}
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={(val)=>{
                setMobile(val)
              }}
            />
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 16,
              }}
            >
              Password
            </Text>
            <TextInput
              placeholder="Enter the password"
              style={{
                height: 40,
                width: "80%",
                borderBottomColor: "#c1c1c1",
                borderBottomWidth: 1,
                marginVertical: "3%",
                fontSize: 18,
                fontFamily: "Book",
              }}
              maxLength={10}
              onChangeText={(val)=>{
                setPassword(val)
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "#19359c", fontFamily: "Book" }}>
                  Forgot Your Password ?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
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
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  elevation: 8,
                  marginTop: "3%",
                }}
                onPress={post}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
