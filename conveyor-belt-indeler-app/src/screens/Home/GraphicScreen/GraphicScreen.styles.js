import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center the image vertically
    alignItems: "center", // Center the image horizontally
  },
  image: {
    width: "100%", // Set width to 100% to scale image horizontally
    height: "100%", // Set height to 100% to scale image vertically
    transform: [{ rotate: "90deg" }],
  },
  imageContainer: {
    width: Dimensions.get("window").height * 0.77, // Set width to screen width
    height: Dimensions.get("window").height, // Set height to screen height
    justifyContent: "center", // Center the image vertically within its container
    alignItems: "center", // Center the image horizontally within its container
  },
  dot: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
