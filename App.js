import React from "react";
import { View, Text } from "react-native";

// IMPORT STYLES
import { styles } from "./src/styles/styles";

// IMPORT  PAGES
import Homej from "./src/pages/home";

// Fornece o componente que vai envolver nossa navegação!
import { NavigationContainer } from "@react-navigation/native";
// Importando as funções da Rota Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Definindo quais telas terá */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
