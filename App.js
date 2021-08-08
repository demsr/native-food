import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeStack,
  SettingsStack,
  HistoryStack,
  ShoppingListStack,
} from "./Stacks";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar barStyle="dark-content" />
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="HomeStack" component={HomeStack} />
          <Tab.Screen name="HistoryStack" component={HistoryStack} />
          <Tab.Screen name="ShoppingListStack" component={ShoppingListStack} />
          <Tab.Screen name="SettingsStack" component={SettingsStack} />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
