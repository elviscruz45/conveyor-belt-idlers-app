import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { LogBox } from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { app } from "./src/utils";
import { LoginNavigator } from "./src/navigation/LoginNavigator";
LogBox.ignoreAllLogs();
export const MyContext = React.createContext();

export default function App() {
  const [loginValidation, setLoginValidation] = useState();
  const login = (item) => {
    setLoginValidation(item);
  };
  return (
    <MyContext.Provider value={loginValidation}>
      <NavigationContainer>
        <LoginNavigator loginValidation={loginValidation} login={login} />
      </NavigationContainer>
    </MyContext.Provider>
  );
}
