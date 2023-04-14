import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { LogBox } from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { app } from "./src/utils";
import { LoginNavigator } from "./src/navigation/LoginNavigator";
import { MyContext } from "./context/ThemeContext";
LogBox.ignoreAllLogs();

export default function App() {
  const [loginValidation, setLoginValidation] = useState();
  const [getdataFirestore, setgetdataFirestore] = useState();

  const login = (item) => {
    setLoginValidation(item);
  };
  return (
    <MyContext.Provider
      value={{ loginValidation, getdataFirestore, setgetdataFirestore }}
    >
      <NavigationContainer>
        {/* <LoginNavigator loginValidation={loginValidation} login={login} /> */}
        <AppNavigation />
      </NavigationContainer>
    </MyContext.Provider>
  );
}
