import React, { useEffect,useRef,useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import { TextInput,TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { TouchableOpacityBase } from "react-native";
import axios from 'axios'

export default function NewComplaint({ navigation ,route}) {
  const window = Dimensions.get("window");
  const [audioFile,setAudioFile] = useState()
  const [playing,setPlaying] = useState(false)
  const [recording, setRecording] = useState();
  const [document, setDocument] = useState()
  const [imageFile, setImageFile] = useState(null)
  const BlockName = useRef("")
  const ComplaintSub = useRef("")
  const Complaint = useRef("")

  function Submit(){

      var d = new Date()
      var data = new FormData();

      data.append("aadhar", "206624582266");
      data.append("uid", "4d25ec4aef06dd0a1d911ef63219b615");
      data.append("name", route.params.FullName);
      data.append("mobile", route.params.MobileNumber);
      data.append("block", BlockName.current);
      data.append("department", "");
      data.append("complaint", Complaint.current);
      data.append("date", d.getDate());
      data.append("month", d.getMonth()+1);
      data.append("year", d.getFullYear());
      data.append("image", imageFile);
      data.append("audioFile", audioFile);
      data.append("address", route.params.Address);
      data.append("age", route.params.AgeGroup);
      data.append("gender", route.params.Gender);
      data.append("occupation", route.params.Occupation);
      data.append("subject", ComplaintSub.current);
      data.append("identity",route.params.IdentificationMethod);
      data.append("fileONE", document);
      data.append("fileTWO", "");
      data.append("fileTHREE", "");
      data.append("fileFOUR", "");
      data.append("fileFIVE", "");
      

      axios
        .post("https://guhaar.online/GuhaarNewAPi/index.php/new-complaint",data)
        .then(function (response) {
          console.log("Request Success");
          console.log(JSON.stringify(response.data));
          
        })
        .catch(function (error) {
          console.log(error.message);
        });
    
  }

  async function PickDocument () {
    let result = await DocumentPicker.getDocumentAsync({});
    setDocument(result.uri);
    console.log(result);
  }


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageFile(result.uri);
    }
  };


  async function playAudio(){
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      { uri: audioFile },
      { shouldPlay: true }
    );
    console.log(playbackObject); 
    setPlaying(true)
  }

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync(); 
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setAudioFile(uri) 
    console.log('Recording stopped and stored at', uri);
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
        <View style={{ flex: 1, paddingHorizontal: "5%" }}>
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 25,
              marginVertical: "2%",
              color: "#1c549c",
            }}
          >
            Complaint Details
          </Text>
          <ScrollView
            style={{
              alignSelf: "center",
              width: "100%",
            }}
            contentContainerStyle={{ padding: "2%" }}
            showsVerticalScrollIndicator={false}
          >
            <TextInput
              placeholder="Block Name"
              style={{
                color: "#c1c1c1",
                height: 46,
                borderRadius: 10,
                backgroundColor: "#fff",
                fontSize: 20,
                fontFamily: "Medium",
                paddingLeft: 15,
                marginVertical: "2%",
                padding: 10,
                elevation: 8,
              }}
              onChangeText={(val)=>{
                BlockName.current = val
              }}
            />
            <TextInput
              placeholder="Subject of Complaint"
              style={{
                color: "#c1c1c1",
                height: 46,
                marginVertical: "2%",
                borderRadius: 10,
                backgroundColor: "#fff",
                fontSize: 20,
                fontFamily: "Medium",
                paddingLeft: 15,
                padding: 10,
                elevation: 8,
              }}
              onChangeText={(val)=>{
               ComplaintSub.current = val
              }}
            />
            <TextInput
              placeholder="Enter Your Complaint"
              style={{
                color: "#c1c1c1",
                height: 150,
                borderRadius: 10,
                backgroundColor: "#fff",
                fontSize: 20,
                fontFamily: "Medium",
                paddingLeft: 15,
                marginVertical: "2%",
                textAlignVertical: "top",
                padding: 10,
                elevation: 8,
              }}
              onChangeText={(val)=>{
                Complaint.current = val
              }}
            />
            <View
              style={{
                width: "96%",
                height: 50,
                borderRadius: 10,
                backgroundColor: "#1c549c",
                marginVertical: "3%",
                marginTop: "4%",
                elevation: 8,
              }}
            >
              <View
                style={{
                  flex: 13,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    paddingHorizontal: "2%",
                    borderRadius: 10,
                    flex: 5,
                  }}
                >
                  <Text
                    style={{ fontFamily: "Bold", fontSize: 20, color: "#fff" }}
                  >
                    {recording?"recording...":"Record Your Voice"}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    height: 60,
                    borderRadius: 100,
                    width: 60,
                    left: 10,
                    bottom:5
                  }}
                  onPress={recording ? stopRecording : startRecording}
                >
                  <Icon
                    name="microphone-alt"
                    type="font-awesome-5"
                    size={25}
                    color="#1c549c"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {audioFile?
            <View style={{   
              width: "85%",
              height: 50,
              borderRadius: 10,
              marginVertical:'2%',
              elevation:8,
              flexDirection:'row',
              padding:10,
              backgroundColor:"#fff",
              alignSelf:'center',
              justifyContent:"center",
              alignItems:"center",
              }}>
              <Icon name={playing?'pause':'play'} type="font-awesome-5" size={20} style={{flex:1}} onPress={playAudio} />
              <View style={{flex:3}}>
                <Text style={{fontFamily:"Medium",color:"#1c549c",fontSize:16,textAlign:"center"}}>{playing?'playing ....':'Audio1.mp3'}</Text> 
              </View>
          </View>:null
            }
            
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                elevation: 8,
                borderRadius: 10,
                backgroundColor: "#fff",
                marginVertical: "2%",
              }}
              onPress={pickImage}
            >
              <View
                style={{
                  flex: 13,
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 2, justifyContent: "center" }}>
                  <Icon
                    name="camera"
                    type="font-awesome-5"
                    size={30}
                    color="#1c549c"
                  />
                </View>
                <View
                  style={{
                    flex: 5,
                    justifyContent: "center",
                    backgroundColor: "#1c549c",
                    paddingHorizontal: "3%",
                    borderTopEndRadius: 10,
                    borderBottomEndRadius: 10,
                  }}
                >
                  <Text
                    style={{ fontFamily: "Bold", fontSize: 20, color: "#fff" }}
                  >
                    Upload Your Image
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {imageFile? 
            <View style={{width:220,height:250,backgroundColor:"#fff",elevation:8,alignItems:"center",alignSelf:"center",marginVertical:"5%",padding:'3%',borderTopStartRadius:16,borderTopEndRadius:16}}>
            <View style={{marginTop:'3%',flexDirection:'row'}}>
            <Text style={{fontSize:16,fontFamily:"Medium",flex:3}}>Sample Image</Text>
            <Icon name="times-circle" onPress={()=>setImageFile(null)} type="font-awesome-5" size={18} style={{alignSelf:"flex-end",flex:1}}/>
            </View>
            <Image source={{ uri: imageFile }} style={{ width: 200, height: 200,marginTop:"4%" }} />
            </View>
            :null}
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                elevation: 8,
                borderRadius: 10,
                backgroundColor: "#fff",
                marginVertical: "2%",
              }}
              onPress={PickDocument}
            >
              <View
                style={{
                  flex: 13,
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 2, justifyContent: "center" }}>
                  <Icon
                    name="file"
                    type="font-awesome-5"
                    size={30}
                    color="#1c549c"
                    
                  />
                </View>
                <View
                  style={{
                    flex: 5,
                    justifyContent: "center",
                    backgroundColor: "#1c549c",
                    paddingHorizontal: "3%",
                    borderTopEndRadius: 10,
                    borderBottomEndRadius: 10,
                  }}
                >
                  <Text
                    style={{ fontFamily: "Bold", fontSize: 20, color: "#fff" }}
                  >
                    Upload File
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {document?
               <View style={{   
                width: "85%",
                height: 50,
                borderRadius: 10,
                marginVertical:'2%',
                elevation:8,
                flexDirection:'row',
                padding:10,
                backgroundColor:"#fff",
                alignSelf:'center',
                justifyContent:"center",
                alignItems:"center",
                }}>
                 <Icon name="file-pdf" type="font-awesome-5" size={25} style={{flex:1}} style={{alignSelf:'center'}} color="#1c459c" />
              <View style={{flex:3}}>
                <Text style={{fontFamily:"Medium",color:"#1c549c",fontSize:16,textAlign:"center"}}>Sample File 1</Text> 
              </View>
              <Icon name="times-circle" onPress={()=>setImageFile(null)} type="font-awesome-5" size={18} color="red" style={{alignSelf:"flex-end",flex:1}} onPress={()=>setDocument(null)} />
               </View>
             :null}
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#26ae60",
                borderRadius: 10,
                marginVertical: "6%",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "flex-end",
                elevation: 8,
              }}
              onPress={Submit}
            >
              <Text style={{ color: "#fff", fontFamily: "Bold", fontSize: 20 }}>
                Submit
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
