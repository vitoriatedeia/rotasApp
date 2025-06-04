import React from "react";
import { View, TouchableOpacity } from "react-native";

// IMPORT STYLES
import { styles } from "../styles/styles";

import { useNavigation } from "@react-navigation/native";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: 48,
          height: 48,
          borderRadius: 48,
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 20,
          left: 20,
        }}
      >
        <AntDesign name="menuunfold" size={24} color="blue" />
      </TouchableOpacity>
    </View>
  );
}
