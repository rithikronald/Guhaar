import React from 'react'
import {View,Text,Image,TouchableOpacity,ActivityIndicator} from 'react-native'
import {DrawerItem,DrawerContent} from '@react-navigation/drawer'
import {Icon} from 'react-native-elements'
import { Avatar } from 'react-native-paper'
import { TouchableOpacityBase } from 'react-native'
import { useFonts } from "expo-font";


export default function drawerStyle(props,{navigation}){
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
    return(
        <View style={{flex:1,backgroundColor:"#eeeeee"}}>
            <View style={{backgroundColor:'#fff'}}>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:"10%"}}>
                    <Text style={{textAlign:'center',fontSize:16,fontFamily:'Medium'}}>Guhaar App</Text>
                    <Text style={{textAlign:'center',fontSize:6,fontFamily:'Book'}}>Baster Distriution Administration,Chattisgarh</Text>
                </View>
                <View style={{margin:'5%',alignItems:'center',justifyContent:'center'}}>
                <Image source={require('../assets/images/guhaar_logo_splash.png')} style={{width:100,height:100,borderRadius:100}} />
                <Text style={{margin:10,fontSize:18,letterSpacing:1,fontFamily:"Medium"}}>Himanshu Jain</Text>
                </View>
            </View>
            <View style={{marginTop:'10%',flex:1}}>
            <DrawerItem
            style={{backgroundColor:"#fff",marginVertical:'2%'}}
            label="Home"
            labelStyle={{fontSize:16,fontFamily:'Medium'}}
            icon={()=>(
                <Icon name="home" color="#1c549c" size={25} type="font-awesome-5" />
            )}
            onPress={()=>{
             props.navigation.navigate('HomeDashboard')
            }}
            />
            <DrawerItem
            style={{backgroundColor:"#fff",marginVertical:'2%'}}
            label="About"
            labelStyle={{fontSize:16,fontFamily:'Medium'}}
            icon={()=>(
                <Icon name="address-card" color="#1c549c" size={25} type="font-awesome-5"/>
            )}
            onPress={()=>{
                props.navigation.navigate('About')
               }}
            />
            <DrawerItem
            style={{backgroundColor:"#fff",marginVertical:'2%'}}
            label="Profile"
            labelStyle={{fontSize:16,fontFamily:'Medium'}}
            icon={()=>(
                <Icon name="user-circle" color="#1c549c" size={25} type="font-awesome-5"/>
            )}
            onPress={()=>{
                props.navigation.navigate('Profile')
               }}
            />   
            <DrawerItem
            style={{backgroundColor:"#fff",marginVertical:'2%'}}
            label="Share App"
            labelStyle={{fontSize:16,fontFamily:'Medium'}}
            icon={()=>(
                <Icon name="share" color="#1c549c" size={25} type="font-awesome-5"/>
            )}
            
            />    
            <View style={{alignItems:'center',marginTop:'15%'}}>
                <Text style={{fontSize:20,color:'#494949',fontFamily:'Medium'}}>Change Language</Text>
                <View style={{flexDirection:'row',marginTop:'4%'}}>
                <TouchableOpacity style={{justifyContent:"center",alignItems:'center',backgroundColor:"#1c549c",width:120,height:40,borderTopStartRadius:10,borderBottomStartRadius:10}}>
                    <Text style={{color:'#fff',fontFamily:'Medium'}}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:"center",alignItems:'center',backgroundColor:"#fff",width:120,height:40,borderTopEndRadius:10,borderBottomEndRadius:10}}>
                    <Text style={{color:'#1c549c',fontFamily:'Medium'}}>Hindi</Text>
                </TouchableOpacity>
                </View>
            </View>                         
            </View>
            <TouchableOpacity style={{margin:"10%",justifyContent:"center",alignItems:'center',backgroundColor:"#fff",width:200,height:40,borderRadius:10,alignSelf:'center'}}>
                    <Text style={{color:'#1c549c',fontFamily:'Medium'}}>Logout</Text>
            </TouchableOpacity> 
        </View>
    )
}
}