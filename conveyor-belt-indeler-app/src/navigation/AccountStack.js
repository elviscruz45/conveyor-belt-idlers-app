import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { AccountScreen } from "../screens/Account/AccountScreen";
import { LoginScreen } from "../screens/Account/LoginScreen/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen/RegisterScreen";

export function AccountStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name={screen.account.register}
        component={RegisterScreen}
        options={{ title: "Register" }}
      />
    </Stack.Navigator>
  );
}
