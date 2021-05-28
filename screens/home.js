import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const gameList = [{ id: 1, name: "pairFinding" }];

export function HomeScreen(options) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => options.navigation.navigate("Profile", gameList[0])} //TODO: passing 0 index
      >
        <Image
          style={styles.item}
          source={require("../assets/screens/home/ball.png")}
        ></Image>
      </TouchableWithoutFeedback>
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
  item: {
    width: 100,
    height: 100,
  },
});
