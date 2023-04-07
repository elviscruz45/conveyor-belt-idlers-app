import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  globalStylesTab: {
    backgroundColor: "##F7F8FC",
  },
  globalStylesStack: {
    backgroundColor: "#F7F8FC",
  },
  content: {
    flex: 1,
  },
  btnContainer1: {
    position: "absolute",
    bottom: 80,
    right: 10,
  },
  btnContainer2: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  btnEditDelete: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "flex-end",
  },
  restaurant: {
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  name: {
    fontWeight: "bold",
  },
  info: {
    color: "#828282",
    paddingRight: 100,
    marginTop: 3,
  },
});
