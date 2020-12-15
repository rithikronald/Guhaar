import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ComplaintDetails from "../screens/ComplaintDetails";
import EditProfile from "../screens/EditProfile";
import DepartmentsList from "../screens/DepartmentsList";
import Profile from "../screens/Profile";
import DeptDashboard from "../screens/DeptDashboard";
import PublicService from "../screens/PublicService";
import LodgeComplaint1 from "../screens/LodgeComplaint1";
import LodgeComplaint2 from "../screens/LodgeComplaint2";
import ChangeLanguage from "../screens/ChangeLanguage";
import Permission from "../screens/Permission";
import About from "../screens/About";
import OnBoarding from "../screens/OnBoarding";
import MyComplaint from "../screens/MyComplaints";
import Login from "../screens/Login";
import OTP from "../screens/OTP";
import NewService from "../screens/NewService";
import NewService2 from "..screens/NewService2";
import HomeDashboard from "../screens/HomeDashboard";
import NoComplaint from "../screens/NoComplaint";
import RejectedComplaint from "../screens/RejectedComplaint";
import DeptLogin from "../screens/DeptLogin";

export default function HomeStack() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ComplaintDetails" component={ComplaintDetails} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="DepartmentsList" component={DepartmentsList} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DeptDashboard" component={DeptDashboard} />
        <Stack.Screen name="PublicService" component={PublicService} />
        <Stack.Screen name="LodgeComplaint1" component={LodgeComplaint1} />
        <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
        <Stack.Screen name="Permission" component={Permission} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="MyComplaint" component={MyComplaint} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="NewService" component={NewService} />
        <Stack.Screen name="HomeDashboard" component={HomeDashboard} />
        <Stack.Screen name="NewService2" component={NewService2} />
        <Stack.Screen name="NoComplaint" component={NoComplaint} />
        <Stack.Screen name="RejectedComplaint" component={RejectedComplaint} />
        <Stack.Screen name="LodgeComplaint2" component={LodgeComplaint2} />
        <Stack.Screen name="DeptLogin" component={DeptLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
