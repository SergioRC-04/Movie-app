import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

const Footer = ({ reloadMovies, goToTop, toggleTheme, isDarkTheme }) => {
  return (
    <View
      style={[
        styles.footer,
        { backgroundColor: isDarkTheme ? "#2A2A2A" : "#FFD700" },
      ]}
    >
      {/* Botón para recargar */}
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
      {/* Botón para ir al inicio */}
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
