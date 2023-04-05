import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import ThemeContext from "./context/ThemeContext";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { app } from "./src/utils";
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <ThemeContext.Provider value="red">
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ThemeContext.Provider>
    </>
  );
}
