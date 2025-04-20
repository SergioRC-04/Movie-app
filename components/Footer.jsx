import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const Footer = ({ reloadMovies, goToTop, goBack }) => {
  return (
    <View style={styles.footer}>
      {/* Botón para recargar */}
      <TouchableOpacity style={styles.button} onPress={reloadMovies}>
        <Image
          source={require("../assets/girar.png")} // Asegúrate de tener la imagen en la ruta correcta
          style={styles.icon}
        />
      </TouchableOpacity>
      {/* Botón para ir al inicio */}
      <TouchableOpacity style={styles.button} onPress={goToTop}>
        <Image
          source={require("../assets/hogar.png")} // Asegúrate de tener la imagen en la ruta correcta
          style={styles.icon}
        />
      </TouchableOpacity>
      {/* Botón para retroceder */}
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Image
          source={require("../assets/flecha-izquierda.png")} // Asegúrate de tener la imagen en la ruta correcta
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
});

export default Footer;
