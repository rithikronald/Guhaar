import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import axios from "axios";

import { useFonts } from "expo-font";

import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function HomeDashboard({ navigation,route }) {
  const [search, setSearch] = useState("");
  const window = Dimensions.get("window");

  function departmentListpost() {
    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/get-department-list/")
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));

        navigation.push("DepartmentsList", {
          data: response.data.DepartmentList,
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function MyComplaints() {
    var data = new FormData();
    data.append("status", 0);
    data.append("uid", "4d25ec4aef06dd0a1d911ef63219b615");
    
    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/get-complaints-user",data)
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        response.data.flag ? navigation.navigate("MyComplaint") : navigation.navigate("NoComplaint");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function ClosedComplaints() {

    var data = new FormData();
    data.append("status", 2);
    data.append("uid", "4d25ec4aef06dd0a1d911ef63219b615");

    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/get-complaints-user",data)
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        response.data.flag ? navigation.navigate("DepartmentsList") : navigation.navigate("NoComplaint");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function RejectedComplaints() {

    var data = new FormData();
    data.append("status", 3);
    data.append("uid", "4d25ec4aef06dd0a1d911ef63219b615");

    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/get-complaints-user",data)
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        response.data.flag ? navigation.navigate("DepartmentsList") : navigation.navigate("NoComplaint");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function Services() {
    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/lok-seva-services")
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        navigation.navigate('PublicService',{
          data:response.data.seva
        })
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
      <View style={{ flex: 1, backgroundColor: "#ededed" }}>
        <StatusBar style="auto" />
        <BackGround />
        <Header name="bars" onPress={()=>{
          navigation.openDrawer()
        }} />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            margin: "4%",
            width: "70%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 55,
                fontFamily: "Medium",
                color: "#dddd",
              }}
            >
              01
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Book",
                textAlign: "center",
                color: "#fff",
                flexWrap: "wrap",
              }}
            >
              Open Complaints
            </Text>
          </View>
          <View
            style={{
              width: "0.5%",
              backgroundColor: "#dddd",
              alignSelf: "center",
              height: 90,
            }}
          />
          <View
            style={{
              alignItems: "center",
              flex: 1,
              marginLeft: "3%",
            }}
          >
            <Text
              style={{
                fontSize: 55,
                fontFamily: "Medium",
                color: "#dddd",
              }}
            >
              00
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Book",
                textAlign: "center",
                color: "#fff",
                flexWrap: "wrap",
              }}
            >
              Resolved Complaints
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "86%",
            elevation: 10,
            height: "60%",
            padding: "4%",
            borderRadius: 20,
            backgroundColor: "#fff",
            marginTop: "4%",
            alignSelf: "center",
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("LodgeComplaint1");
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={require("../assets/images/lodge-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                Lodge Complaint
              </Text>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={MyComplaints}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={require("../assets/images/my-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                My Complaint
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={ClosedComplaints}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={require("../assets/images/closed-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                Closed Complaint
              </Text>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={RejectedComplaints}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={require("../assets/images/rejected-complaint.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                Rejected Complaint
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={Services}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={require("../assets/images/public-service.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                Public Service
              </Text>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  departmentListpost();
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={require("../assets/images/all-departments.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                All Departments
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
