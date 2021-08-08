import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HistoryScreen } from "../screens";

const StackNavigator = createNativeStackNavigator();

export const Stack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="History" component={HistoryScreen} />
    </StackNavigator.Navigator>
  );
};
