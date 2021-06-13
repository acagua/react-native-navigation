import React from "react";
// import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "./components/MainScreen";
import { DetailScreen } from "./components/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} title={{title:'Overview'}}/>
        <Stack.Screen name="Detail" component={DetailScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
