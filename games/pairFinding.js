import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import Card from "../components/card.js";
import characterImages from "../components/characterImages.js";
const row = 3,
  column = 2;
const sources = characterImages;
const available = sources.length; // number of images in assets.

function PairFinding(options) {
  // setting it up
  var total = Math.min(row * column, available * 2);
  var cards = new Array(total);
  for (let i = 0, j = 0; i < total; i += 2) {
    // cards[i] = <Card id={j} src={sources[j]}></Card>;
    cards[i] = { key: i, id: j };
    if (i & 1) j++;
  }
  return (
    <View style={styles.container}>
      {cards.map((c) => (
        <View style={styles.card} key={c.key}>
          <Card id={c.id}></Card>
        </View>
      ))}
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
  card: {
    width: "25%",
    height: "25%",
  },
});
