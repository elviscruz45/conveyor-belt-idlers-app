import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./GraphicScreen.styles";

export function GraphicScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../../assets/beltSmcv.png")}
          style={styles.image}
          resizeMode="contain"
        />
        {/* Dot overlay for color 1 */}
        <View
          style={[styles.dot, { top: 100, left: 200, backgroundColor: "red" }]}
        />
        {/* Dot overlay for color 2 */}
        <View
          style={[styles.dot, { top: 250, left: 350, backgroundColor: "blue" }]}
        />
        {/* Add more dot overlays as needed */}
      </View>
    </View>
  );
}
