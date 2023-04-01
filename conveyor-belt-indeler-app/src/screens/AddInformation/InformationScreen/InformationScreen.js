import { View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { styles } from "./InformationScreen.styles";
import { screen } from "../../../utils";

export function InformationScreen(props) {
  const { navigation } = props;
  const goToInformation = () => {
    navigation.navigate(screen.addinformation.addInformation);
  };
  return (
    <Icon
      reverse
      type="material-community"
      name="plus"
      color="#FA4A0C"
      containerStyle={styles.btnContainer}
      onPress={goToInformation}
    />
  );
}
