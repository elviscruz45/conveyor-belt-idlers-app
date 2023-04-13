import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  content: {
    marginHorizontal: 5,
  },
  image: {
    resizeMode: "contain",
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 20,
  },
  btnStyle: {
    backgroundColor: "#FA4A0C",
  },
  radioCard: {
    margin: 3,
    // fontFamily: "DM Sans",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    gap: 2,
    width: windowWidth,
    backgroundColor: "#FFFFFF",
    shadowColor: "#384967",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.05,
    borderRadius: 16,
    flex: 0,
    order: 2,
    alignSelf: "stretch",
    flexGrow: 0,
  },
  radioCard: {
    margin: 3,
    // fontFamily: "DM Sans",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    gap: 2,
    width: windowWidth - 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "#384967",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.05,
    borderRadius: 16,
    flex: 0,
    order: 2,
    alignSelf: "stretch",
    flexGrow: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    alignItems: "center",
    // opacity: 0.4,
  },
  container: {
    flex: 1, // Use flex: 1 to make the container fill the entire screen
  },
});
