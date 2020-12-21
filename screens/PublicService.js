import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { View, ActivityIndicator, Dimensions, Text, Image,FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import BackGround from "../Components/background";
import Header from "../Components/Header";

export default function PublicService({ navigation,route }) {

  const data = route.params.data  

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
        <Header />
        <View
          style={{
            width: "86%",
            elevation: 8,
            paddingBottom:"8%",
            padding: "4%",
            borderRadius: 20,
            backgroundColor: "#fff",
            marginTop: "4%",
            alignSelf: "center",
           
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontFamily: "Medium", padding: "3%", fontSize: 25 }}>
              Public Service
            </Text>
          </View>
         <FlatList 
          data = {data}
          keyExtractor={(item)=>{
            item.id
          }}
          style={{alignSelf:"center"}}
          contentContainerStyle={{alignItems:"center"}}
          numColumns={2}
          renderItem={({item})=>(
            <TouchableOpacity style={{ flex: 1, alignItems: "center",width:150,marginTop:"5%", padding:10}}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={{uri:item.icon}}
                />
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  textAlign: "center",
                  flexWrap:'wrap',
                  marginTop:10
                }}
              >
                {item.slug}
              </Text>
            </TouchableOpacity>
          )}
         />
        </View>
      </View>
    );
  }
}

