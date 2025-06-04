// IMPORT  PAGES
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

// Fornece o componente que vai envolver nossa navegação!
import { NavigationContainer } from "@react-navigation/native";
// Importando as funções da Rota Stack
import { createDrawerNavigator } from "@react-navigation/drawer";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "grey",
          headerTitle: "",
          drawerStyle: { backgroundColor: "#fff" },
          drawerActiveBackgroundColor: "#000",
          drawerActiveTintColor: "#fff",
          drawerInactiveBackgroundColor: "#fff",
          drawerInactiveTintColor: "#000",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => {
              return (
                <Feather name="message-circle" size={size} color={color} />
              );
            },
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
