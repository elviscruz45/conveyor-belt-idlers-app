import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Keyboard,
  Alert,
} from "react-native";

const App = () => {
  const [number, setNumber] = React.useState("");

  const onChanged = (text) => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        alert("please enter numbers only");
      }
    }
    setNumber(newText);
  };

  const onPress = () => {
    if (number.length !== 0) {
      Alert.alert("Confirm Number", number, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },

        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
      setNumber("");
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        onChangeText={(text) => onChanged(text)}
        value={number}
        style={styles.input}
        placeholder="Number"
        maxLength={10}
      />
      <View style={styles.buttonContainer}>
        <Button title="submit" onPress={() => onPress()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    borderColor: "#c7c3c3",
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    width: "80%",
  },
});

export default App;
