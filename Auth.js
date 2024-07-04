import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import {  NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from"react-native-vector-icons/MaterialIcons";
import SigninScreen from './src/screens/SignInScreen';
import SignupScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import MailScreen from './src/screens/MailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainTabs(){
  return(
  <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarStyle: {
            height: 65,
            backgroundColor: "white",
            borderTopWidth: 1,
            // borderBottomWidth:5,
            borderTopColor:""
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#34a8eb",
          headerStyle:{
            backgroundColor:"white",
            // borderBottomColor:"black"
          }
        }}
      >
      <Tab.Screen
      name="home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={size} color={color} />
        ),
      }}
    />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        />
        
        <Tab.Screen
          name="notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="bell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="mail"
          component={MailScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="mail-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
);
}


function Auth(props) {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={MainTabs} />
    <Stack.Screen name="Signin" component={SigninScreen} options={{ headerBackTitleVisible: false,headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} />
     
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Auth;