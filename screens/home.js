import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export function HomeScreen(options) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/screens/home/ball.png")}></Image>
    </View>
    // <Button
    //   title="Go to Jane's profile"
    //   onPress={() =>
    //     options.navigation.navigate("Profile", { name: "Janexxx" })
    //   }
    // />
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
