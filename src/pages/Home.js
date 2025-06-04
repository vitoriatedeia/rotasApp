import React from "react";
import { View, Text } from "react-native";

// IMPORT STYLES
import { styles } from "../styles/styles";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
    </View>
  );
}
