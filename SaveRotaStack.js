// IMPORT  PAGES
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

// Fornece o componente que vai envolver nossa navegação!
import { NavigationContainer } from "@react-navigation/native";
// Importando as funções da Rota Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Define a página inicial */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {/* Quantas telas e quais telas vão ter */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
