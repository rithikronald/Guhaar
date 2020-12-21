import React,{useRef} from "react";
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
import { ScrollView, TextInput } from "react-native-gesture-handler";
import axios from 'axios'


export default function NewComplaint({ navigation }) {
  const window = Dimensions.get("window");

  const FullName = useRef("")
  const AgeGroup = useRef("")
  const Gender = useRef("")
  const MobileNumber = useRef("")
  const Address = useRef("")
  const Occupation = useRef("") 
  const IdentificationMethod = useRef("")
  const IDnumber = useRef("")

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
            backgroundColor: "#1c549c",
          }}
        >
          <Icon
            name="chevron-left"
            size={20}
            type="font-awesome-5"
            color="#1c549c"
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
        <ScrollView style={{alignSelf:"center",width:'100%'}} contentContainerStyle={{paddingHorizontal:"8%",paddingVertical:"4%"}}>
        <Text style={{fontSize:25,fontFamily:'Medium',color:"#1c549c",marginBottom:'3%'}}>Personal Information</Text>
          <TextInput placeholder="Full Name" onChangeText={(val)=>{
            FullName.current = val
          }} style={styles.inputStyle} />

          <View style={styles.rowInputs}>
            <TextInput
              placeholder="Age Group"
              onChangeText={(val)=>{
                AgeGroup.current = val
              }}
              style={{
                marginEnd: 4,
                marginVertical: "2%",
                fontSize: 18,
                backgroundColor: "white",
                borderRadius: 6,
                padding:10,
                fontFamily: "Medium",
                elevation: 8,
                flex:3
              }}
            />

            <TextInput
              placeholder="Gender"
              onChangeText={(val)=>{
                Gender.current = val
              }}
              style={{
                marginVertical: "2%",
                fontSize: 18,
                shadowColor: "#0000",
                backgroundColor: "white",
                borderRadius: 6,
                padding:10,
                fontFamily: "Medium",
                elevation: 8,
                flex:2
              }}
            />
          </View>

          <TextInput placeholder="Mobile Number" onChangeText={(val)=>{
                MobileNumber.current = val
              }} style={styles.inputStyle} />

          <TextInput
            placeholder="Enter Your Address"
            onChangeText={(val)=>{
              Address.current = val
            }}
            multiline={true}
            numberOfLines={4}
            style={{
              marginVertical: "2%",
              fontSize: 18,
              textAlignVertical: "top",
              backgroundColor: "white",
              borderRadius: 6,
              padding:10,
              fontFamily: "Medium",
              elevation: 8,
            }}
          />
          <TextInput placeholder="Occupation" onChangeText={(val)=>{
                Occupation.current = val
              }} style={styles.inputStyle} />

          <TextInput
            placeholder="Identification Method"
            onChangeText={(val)=>{
              IdentificationMethod.current = val
            }}
            style={styles.inputStyle}
          />
          <TextInput placeholder="ID Card Number" onChangeText={(val)=>{
                IDnumber.current = val
              }} style={styles.inputStyle} />
          <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            borderRadius: 25,
            padding: 8,
            alignItems: "center",
            backgroundColor: "#1c549c",
            justifyContent: "center",
            elevation: 8,
            marginTop:'6%'
            
          }}
          onPress={() => {
            navigation.push("LodgeComplaint2",{
              FullName:FullName.current,
              AgeGroup:AgeGroup.current,
              Gender:Gender.current,
              MobileNumber:MobileNumber.current,
              Address:Address.current,
              Occupation:Occupation.current,
              IdentificationMethod:IdentificationMethod.current,
              IDnumber:IDnumber.current
            });
           
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
        </ScrollView>
      
      </View>
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
  },
  header: {
    height: "20%",
    backgroundColor: "#1c549c",
  },
  inputStyle: {
    marginVertical: "2%",
    fontSize: 18,
    backgroundColor: "white",
    borderRadius: 6,
    padding:10,
    fontFamily: "Medium",
    elevation: 8,
  },
  rowInputs: {
    flexDirection: "row",
    justifyContent:'space-between'
  },
});
