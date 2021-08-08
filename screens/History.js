import React from "react";
import { NativeBaseProvider, Box, Text, FlatList } from "native-base";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
export const Screen = ({ navigation }) => {
  return (
    <Box p={4} m={4} mb={[4, 5]} bg="primary.400" rounded="lg">
      <Text color="white">Hey There!</Text>
    </Box>
  );
};
