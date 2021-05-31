import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import characterImages from "../components/characterImages.js";

function Card(options) {
  var src = characterImages[options.id];
  return (
    <View style={styles.container}>
      <Image source={src}></Image>
      <Text>You are inside of card.</Text>
    </View>
  );
}
export default Card;
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
