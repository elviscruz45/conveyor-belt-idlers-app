import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { AddInformationScreen } from "../screens";
import { InformationScreen } from "../screens";
import { AddReviewInformationScreen } from "../screens";
import { styles } from "./Navigation.styles";

export function AddInformationStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        contentStyle: styles.globalStylesStack, // Set the background color for all screens
      }}
    >
      <Stack.Screen
        name={screen.addinformation.Information}
        component={InformationScreen}
        options={{ title: "Ingresar Data" }}
      />
      <Stack.Screen
        name={screen.addinformation.addInformation}
        component={AddInformationScreen}
        options={{ title: "Nuevo 1" }}
      />
      <Stack.Screen
        name={screen.addinformation.addReviewInformation}
        component={AddReviewInformationScreen}
        options={{ title: "Nuevo 2" }}
      />
    </Stack.Navigator>
  );
}
