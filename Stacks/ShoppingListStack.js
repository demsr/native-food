import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ShoppingListScreen } from "../screens";

const StackNavigator = createNativeStackNavigator();

export const Stack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Shoppinglist"
        component={ShoppingListScreen}
      />
    </StackNavigator.Navigator>
  );
};
