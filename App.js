import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/home.js";
import { GameScreen } from "./screens/game.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    //TODO: trying navigation :(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => undefined }} //TODO: tricky removing header :D
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ header: () => undefined }} //TODO: tricky removing header :D
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
