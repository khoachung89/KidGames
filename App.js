import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/home.js";

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
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <Button
        title="Next Profile"
        onPress={() =>
          navigation.navigate("Profile", { name: "Jane " + Math.random() })
        }
      />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
