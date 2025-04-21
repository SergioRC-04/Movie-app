import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

/**
 * Componente Header
 * Muestra el encabezado de la aplicación con un logo y un título.
 * Cambia dinámicamente el estilo y el logo según el tema (oscuro o claro).
 *
 * @param {boolean} isDarkTheme - Indica si el tema actual es oscuro.
 */
const Header = ({ isDarkTheme }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#2A2A2A" : "#FFD700" },
      ]}
    >
      {/* Logo dinámico según el tema */}
      <Image
        source={
          isDarkTheme
            ? require("../assets/logo-dark.png")
            : require("../assets/logo.png")
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    paddingTop: 40,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#FFD700",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
