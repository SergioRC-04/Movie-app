import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

/**
 * Componente Footer
 * Muestra un pie de página con botones para recargar películas, ir al inicio de la lista y alternar entre modo oscuro y claro.
 *
 * @param {function} reloadMovies - Función para recargar las películas populares.
 * @param {function} goToTop - Función para desplazarse al inicio de la lista de películas.
 * @param {function} toggleTheme - Función para alternar entre modo oscuro y claro.
 * @param {boolean} isDarkTheme - Indica si el tema actual es oscuro.
 */
const Footer = ({ reloadMovies, goToTop, toggleTheme, isDarkTheme }) => {
  return (
    <View
      style={[
        styles.footer,
        { backgroundColor: isDarkTheme ? "#2A2A2A" : "#FFD700" },
      ]}
    >
      {/* Botón para recargar las peliculas*/}
      <TouchableOpacity style={styles.button} onPress={reloadMovies}>
        <Image
          source={
            isDarkTheme
              ? require("../assets/reload_dark.png")
              : require("../assets/girar.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      {/* Botón para ir al inicio de la lista*/}
      <TouchableOpacity style={styles.button} onPress={goToTop}>
        <Image
          source={
            isDarkTheme
              ? require("../assets/home-dark.png")
              : require("../assets/hogar.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      {/* Botón para alternar el tema */}
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Image
          source={
            isDarkTheme
              ? require("../assets/sun.png")
              : require("../assets/luna.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#FFD700",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: {
    padding: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  themeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Footer;
