import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ComplaintDetails from "./screens/complaintDetails";
import EditProfile from "./screens/editProfile";
import DepartmentsList from "./screens/DepartmentsList";
import Profile from "./screens/Profile";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
