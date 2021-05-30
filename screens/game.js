import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import PairFinding from "../games/pairFinding.js";

// Layout for a game screen
export function GameScreen(options) {
  var navigation = options.navigation;
  var params = options.route.params;
  switch (params.id) {
    case 1:
      return <PairFinding></PairFinding>;
    default:
      // none
      navigation.navigate("Home");
      break;
  }
}
