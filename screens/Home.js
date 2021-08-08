import React from "react";
import { StyleSheet, View, Button, Pressable } from "react-native";
import { NativeBaseProvider, Box, Text, FlatList } from "native-base";

export const Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "1", name: "Frischkäse" },
          { key: "2", name: "Frischkäse" },
        ]}
        renderItem={({ item }) => (
          <Box key={item.key} p={4} my={1} bg="white">
            <Text>{item.name}</Text>
          </Box>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
