import React from "react";
import { View, Text, Button } from "react-native";

// IMPORT STYLES
import { styles } from "../styles/styles";

// Quando importamos o useNavigation ele nos retorna um instância de navegação
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>

      <Button title="S O B R E" onPress={() => navigation.navigate("Sobre")} />
    </View>
  );
}
