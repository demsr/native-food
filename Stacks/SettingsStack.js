import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "../screens";

const StackNavigator = createNativeStackNavigator();

export const Stack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Settings" component={SettingsScreen} />
    </StackNavigator.Navigator>
  );
};
