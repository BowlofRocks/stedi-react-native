import {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Counter from './Counter.js';
import Login from './Login.js';
import SettingsScreen from './SettingsScreen.js';
import Home from './Home.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import Icons from "./Icons";
const Tab = createMaterialBottomTabNavigator();

export default function App() {
const [userLoggedIn, setUserLoggedIn] = useState(false);

if (userLoggedIn){
  return(
    <NavigationContainer>...
    </NavigationContainer>
  )
} else {

  return(
    <Login/>
  )

}
}


const styles = StyleSheet.create({
  
});
