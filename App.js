import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ComplaintDetails from "./screens/complaintDetails";
import EditProfile from "./screens/editProfile";
import DepartmentsList from "./screens/DepartmentsList";
import Profile from "./screens/Profile";
import Dashboard from "./screens/DashBoard";
import PublicService from "./screens/PublicService";
import NewComplaints from "./screens/newComplaints";
import ChangeLanguage from "./screens/ChangeLanguage";
import Permission from "./screens/Permission";
import About from "./screens/About";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EditProfile"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ComplaintDetails" component={ComplaintDetails} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="DepartmentsList" component={DepartmentsList} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PublicService" component={PublicService} />
        <Stack.Screen name="NewComplaints" component={NewComplaints} />
        <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
        <Stack.Screen name="Permission" component={Permission} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
