import React, { useState, useContext } from "react";
// import TabNavigator from "./TabNavigator";
// import { app } from "../config/firebase";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text } from "react-native";
import { AppNavigation } from "./AppNavigation";
import { InitScreen } from "../screens/Init/InitScreen";

export function LoginNavigator(props) {
  const { loginValidation, login } = props;
  return (
    <>{loginValidation ? <AppNavigation /> : <InitScreen login={login} />}</>
  );
}
