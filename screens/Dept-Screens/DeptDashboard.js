import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  Text,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import BackGround from "../../Components/background";
import Header from "../../Components/Header";
import axios from 'axios'

export default function Profile({ navigation,route }) {
  const [search, setSearch] = useState("");
  const window = Dimensions.get("window");

  function Pending() {
    var data = new FormData();
    data.append("status", 1);
    data.append('uid',route.params.uid)
    
    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/employee-assigned-complaints", data)
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        console.log(route.params.uid)
        response.data.flag ?
        navigation.push("MyComplaint",{
          data:response.data.Complaints
        }):navigation.push('NoComplaint')
      })
      .catch(function (error) {
        console.log(error);
        alert('Check your Number and Password')
      });
  }
  
  function Resolved() {
    var data = new FormData();
    data.append("status", 2);
    data.append('uid',route.params.uid)
    
    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/employee-assigned-complaints", data)
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        response.data.flag ?
        navigation.navigate("MyComplaint",{
          data:response.data.Complaints
        }):navigation.push('NoComplaint')
      })
      .catch(function (error) {
        console.log(error);
        alert('Check your Number and Password')
      });
  }

  function Rejected() {
    var data = new FormData();
    data.append("status", 3);
    data.append('uid',route.params.uid)
    
    axios
      .post("https://guhaar.online/GuhaarNewAPi/index.php/employee-assigned-complaints", data)
      .then(function (response) {
        console.log("Request Success");
        console.log(JSON.stringify(response.data));
        response.data.flag ?
        navigation.navigate("MyComplaint",{
          data:response.data.Complaints
        }):navigation.push('NoComplaint')
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
      <View style={{ flex: 1, backgroundColor: "#ededed" }}>
        <StatusBar style="auto" />
        <BackGround />
        <Header name="bars" />
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
              98
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Book",
                textAlign: "center",
                color: "#fff",
                flexWrap: "wrap",
              }}
            >
              Total Loged Complaints
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
              211
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Book",
                textAlign: "center",
                color: "#fff",
                flexWrap: "wrap",
              }}
            >
              Total Loged Complaints
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "86%",
            elevation: 8,
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
                onPress={Pending}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    alignSelf: "center",
                  }}
                  source={require("../../assets/images/lodge-complaint.png")}
                />

                <Text
                  style={{
                    fontFamily: "Book",
                    fontSize: 12,
                    textAlign: "center",
                    paddingVertical: 10,
                    lineHeight: 14,
                  }}
                >
                  My Pending Complaint
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={Resolved}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    alignSelf: "center",
                  }}
                  source={require("../../assets/images/my-complaint.png")}
                />
                <Text
                  style={{
                    fontFamily: "Book",
                    fontSize: 12,
                    textAlign: "center",
                    paddingVertical: 10,
                    lineHeight: 14,
                  }}
                >
                  My Resolved Complaints
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("NoComplaint");
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    alignSelf: "center",
                  }}
                  source={require("../../assets/images/closed-complaint.png")}
                />

                <Text
                  style={{
                    fontFamily: "Book",
                    fontSize: 12,
                    textAlign: "center",
                    paddingVertical: 10,
                    lineHeight: 14,
                  }}
                >
                  Closed Complaint
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={Rejected}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    alignSelf: "center",
                  }}
                  source={require("../../assets/images/rejected-complaint.png")}
                />

                <Text
                  style={{
                    fontFamily: "Book",
                    fontSize: 12,
                    textAlign: "center",
                    paddingVertical: 10,
                    lineHeight: 14,
                  }}
                >
                  Rejected Complaint
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("PublicService");
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    alignSelf: "center",
                  }}
                  source={require("../../assets/images/public-service.png")}
                />

                <Text
                  style={{
                    fontFamily: "Book",
                    fontSize: 12,
                    textAlign: "center",
                    paddingVertical: 10,
                    lineHeight: 14,
                  }}
                >
                  Public Service
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, padding: "6%", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("DepartmentsList");
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    alignSelf: "center",
                  }}
                  source={require("../../assets/images/all-departments.png")}
                />

                <Text
                  style={{
                    fontFamily: "Book",
                    fontSize: 12,
                    textAlign: "center",
                    paddingVertical: 10,
                    lineHeight: 14,
                  }}
                >
                  All Departments
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
