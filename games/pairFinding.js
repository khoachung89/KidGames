import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

function PairFinding(options) {
  return (
    <View style={styles.container}>
      <Text>You are inside of pairFinding. Your game screen is here.</Text>
    </View>
  );
}
export default PairFinding;
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
