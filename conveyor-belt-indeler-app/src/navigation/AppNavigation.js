import { View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen } from "../utils";
import { HomeStack } from "./HomeStack";
import { AddInformationStack } from "./AddInformationStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";
import { styles } from "./Navigation.styles";
export function AppNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#FA4A0C",
        tabBarInactiveTintColor: "black",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
        tabBarStyle: styles.globalStylesTab,
      })}
    >
      <Tab.Screen
        name={screen.homestack.tab}
        component={HomeStack}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name={screen.addinformation.tab}
        component={AddInformationStack}
        options={{ title: "Insertar" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screen.homestack.tab) {
    iconName = "home-outline";
  }

  if (route.name === screen.addinformation.tab) {
    iconName = "plus-circle-outline";
  }

  if (route.name === screen.search.tab) {
    iconName = "magnify";
  }

  if (route.name === screen.account.tab) {
    iconName = "account-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
