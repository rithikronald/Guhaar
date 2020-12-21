import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import About from "../screens/About";
import DepartmentsList from "../screens/DepartmentsList";
import Profile from "../screens/Profile";
import DrawerStyle from '../Components/drawerstyle'

export default function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerStyle {...props} />}>  
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Profile" component={Profile}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
