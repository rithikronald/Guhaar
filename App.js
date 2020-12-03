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
import OnBoarding from "./screens/OnBoarding";
import MyComplaint from "./screens/MyComplaints";
import Login from "./screens/Login";
import OTP from "./screens/OTP";
import NewService from "./screens/NewService";
import NewService2 from "./screens/NewService2";
import HomeDashboard from "./screens/HomeDashboard";
import ClosedComplaint from "./screens/ClosedComplaint";
import RejectedComplaint from "./screens/RejectedComplaint";

export default function App() {
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
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PublicService" component={PublicService} />
        <Stack.Screen name="NewComplaints" component={NewComplaints} />
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
        <Stack.Screen name="ClosedComplaint" component={ClosedComplaint} />
        <Stack.Screen name="RejectedComplaint" component={RejectedComplaint} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
