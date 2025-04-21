import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Header = ({ isDarkTheme }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#2A2A2A" : "#FFD700" },
      ]}
    >
      <Image
        source={
          isDarkTheme
            ? require("../assets/logo-dark.png") // Logo para modo oscuro
            : require("../assets/logo.png") // Logo para modo claro
        }
        style={styles.logo}
      />
      <Text style={[styles.title, { color: isDarkTheme ? "#FFD700" : "#000" }]}>
        MovieMania
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Alinea los elementos horizontalmente
    alignItems: "center", // Centra verticalmente
    marginBottom: 0,
    paddingTop: 40,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#FFD700", // Color de fondo
  },
  logo: {
    width: 40, // Ancho del logo
    height: 40, // Alto del logo
    marginRight: 10,
    borderRadius: 15, // Hace que el logo sea circular
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
