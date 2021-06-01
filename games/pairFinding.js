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
// import characterImages from "../components/characterImages.js";
import { characterImages } from "../components/staticAssets.js";
const row = 3,
  column = 4;
const sources = characterImages;
const available = sources.length; // number of images in assets.

function PairFinding(options) {
  // setting it up
  var total = Math.min(row * column, available * 2);
  // total = 4;
  var cards = new Array(total);
  for (let i = 0, j = 0; i < total; i++) {
    // cards[i] = <Card id={j} src={sources[j]}></Card>;
    cards[i] = { key: i, id: j }; // key for RC key, id for matching.
    if (i & 1) j++;
  }
  // dynamic style base on number of item if need.
  var myStyle = StyleSheet.create({
    myCard: { width: "25%", height: "33.33%" },
  });
  //==
  return (
    <View style={styles.container}>
      {cards.map((c) => (
        <View style={styles.cardPlace} key={c.key}>
          <Card id={c.id}></Card>
        </View>
      ))}
      {/* <Text>You are inside of pairFinding. Your game screen is here.</Text> */}
    </View>
  );
}
export default PairFinding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    // justifyContent: "space-around",
    justifyContent: "center",
  },
  cardPlace: {
    width: "25%",
    height: "33.33%",
    padding: "1%",
  },
});
