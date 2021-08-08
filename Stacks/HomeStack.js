import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens";

const StackNavigator = createNativeStackNavigator();

export const Stack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Home" component={HomeScreen} />
    </StackNavigator.Navigator>
  );
};
