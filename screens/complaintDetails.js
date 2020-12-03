import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import DetailsCard from "../Components/details";
//import Text from "../Components/CustomText";
import BackGround from "../Components/background";
import Header from "../Components/Header";

const DATA = [
  {
    title: "Application Name",
    description: "Himanshu Jain",
    key: 1,
  },
  {
    title: "Department",
    description: "State Issue",
    key: 2,
  },
  {
    title: "Location",
    description: "Raipur District",
    key: 3,
  },
  {
    title: "Phone Number",
    description: "+91 993033093",
    key: 4,
  },
  {
    title: "Identification Number",
    description: "Aadhar Card",
    key: 5,
  },
  {
    title: "ID Number",
    description: "4444 4444 4444",
    key: 6,
  },
  {
    title: "Address",
    description: "991, Stree xyz",
    key: 7,
  },
  {
    title: "Occupation",
    description: "Student",
    key: 8,
  },
  {
    title: "Age Group",
    description: "18-24 Years",
    key: 9,
  },
];

export default function ComplaintDetails({ navigation }) {
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
      <View
        style={{
          backgroundColor: "#ededed",
          flex: 1,
        }}
      >
        <StatusBar style="auto" />
        <BackGround />
        <Header />
        <View
          style={{
            elevation: 8,
            borderRadius: 20,
            marginTop: "4%",
            backgroundColor: "#fff",
            width: "90%",
            height: "auto",
            alignSelf: "center",
            padding: "4%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 65,
                height: 65,
                backgroundColor: "#2a8ca7",
                borderRadius: 10,
              }}
            ></View>
            <View style={{ marginLeft: "5%", alignSelf: "center" }}>
              <Text style={{ fontSize: 8, fontFamily: "Medium" }}>
                Complaint Number
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Bold",
                }}
              >
                SGV-1203
              </Text>
              <Text style={{ fontSize: 8, fontFamily: "Medium" }}>Date</Text>
              <Text style={{ fontSize: 16, fontFamily: "Bold" }}>
                12-03-2001
              </Text>
            </View>
          </View>

          <FlatList
            data={DATA}
            numColumns={3}
            renderItem={({ item }) => (
              <DetailsCard title={item.title} des={item.description} />
            )}
          />

          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 8,
              marginTop: "5%",
              color: "#4C4B4B",
            }}
          >
            Subject
          </Text>
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 13,
              color: "#c1c1c1",
            }}
          >
            Science
          </Text>

          <View style={{}}>
            <Text
              style={{
                fontFamily: "Bold",
                fontSize: 8,
                marginTop: "5%",
                color: "#4C4B4B",
              }}
            >
              Complaint
            </Text>
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 13,
                flexWrap: "wrap",
                color: "#c1c1c1",
              }}
            >
              A paragraph is a series of related sentences developing a central
              idea, called the topic. Try to think about paragraphs in terms of
              thematic unity
            </Text>
          </View>
          <View style={{ marginTop: "3%", flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Black",
                fontSize: 10,
                alignSelf: "center",
                color: "#4C4B4B",
              }}
            >
              DOWNLOAD
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: "#19539a",
                marginLeft: 8,
                alignItems: "center",
                justifyContent: "center",
                padding: "2%",
                flexDirection: "row",
              }}
              onPress={() => {
                alert("Hi");
              }}
            >
              <Icon
                name="camera"
                size={12}
                type="font-awesome-5"
                color="#fff"
              />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 12,
                  marginLeft: "5%",
                  fontFamily: "Bold",
                }}
              >
                IMAGE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: "2%",
                borderRadius: 20,
                backgroundColor: "#19539a",
                marginLeft: 8,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
              onPress={() => {
                alert("Hi");
              }}
            >
              <Icon
                name="file-alt"
                size={12}
                type="font-awesome-5"
                color="#fff"
              />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 12,
                  marginLeft: "5%",
                  fontFamily: "Bold",
                }}
              >
                FILES
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: "2%" }}>
            <View style={{ flexDirection: "row", flex: 3 }}>
              <Icon
                name="circle"
                color="#BA2F16"
                type="font-awesome"
                size={15}
                containerStyle={{ alignSelf: "center" }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 12,
                  fontFamily: "Black",
                  marginLeft: "2%",
                }}
              >
                REJECTED
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: "#19539a",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                padding: "5%",
              }}
              onPress={() => {
                navigation.push("DepartmentsList");
              }}
            >
              <Icon
                name="microphone-alt"
                size={12}
                type="font-awesome-5"
                color="#fff"
              />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 12,
                  marginLeft: "2%",
                  fontFamily: "Bold",
                }}
              >
                PLAY AUDIO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: "8%",
            marginTop: "3%",
          }}
        >
          <Text
            style={{
              color: "#19539a",
              fontSize: 18,
              marginTop: "5%",
              fontFamily: "Bold",
            }}
          >
            Updates
          </Text>
          <View
            style={{
              marginTop: "5%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                alignSelf: "center",
                alignContent: "center",
                paddingVertical: 16,
              }}
            >
              <Icon
                name="circle"
                color="#19539a"
                type="font-awesome"
                size={10}
              />
              <View
                style={{
                  backgroundColor: "#19539a",
                  width: 2,
                  flex: 1,
                  alignSelf: "center",
                }}
              ></View>
              <Icon
                name="circle"
                color="#19539a"
                type="font-awesome"
                size={10}
              />
            </View>
            <View style={{ marginLeft: "8%" }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#19539a",
                    fontFamily: "Bold",
                  }}
                >
                  23 April 2020 | 09:03:46 A.M
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#7B8788",
                    fontFamily: "Bold",
                  }}
                >
                  Request Processing
                </Text>
                <Text
                  style={{
                    fontFamily: "Medium",
                    fontSize: 13,
                    color: "#c1c1c1",
                  }}
                >
                  A paragraph is a series of related sentences developing a
                  central idea, called the topic
                </Text>
              </View>
              <View style={{ marginTop: "5%" }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#19539a",
                    fontFamily: "Bold",
                  }}
                >
                  23 April 2020 | 11:00:24 A.M
                </Text>
                <Text
                  style={{
                    fontFamily: "Bold",
                    fontSize: 13,
                    color: "#7B8788",
                  }}
                >
                  Request Processing
                </Text>
                <Text
                  style={{
                    fontFamily: "Medium",
                    fontSize: 13,
                    color: "#c1c1c1",
                  }}
                >
                  A paragraph is a series of related sentences developing a
                  central idea, called the topic
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
