import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { characterImages, doorImage } from "../components/staticAssets.js";

function Card(options) {
  const [isShowing, setIsShowing] = useState(false);
  var src = characterImages[options.id];

  const [imageSource, setImageSource] = useState(doorImage);
  // flip = function () {
  //   if (isShowing) {
  //     setIsShowing(false);
  //     setImageSource(doorImage);
  //   } else {
  //     setIsShowing(true);
  //     setImageSource(characterImages[options.id]);
  //   }
  // };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (isShowing) {
            setIsShowing(false);
            setImageSource(doorImage);
          } else {
            setIsShowing(true);
            setImageSource(characterImages[options.id]);
          }
        }}
      >
        <Image source={imageSource} style={styles.cardItem}></Image>
      </TouchableWithoutFeedback>
    </View>
  );
}
export default Card;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  cardItem: {
    width: "75%",
    height: "75%",
    resizeMode: "stretch",
  },
});
