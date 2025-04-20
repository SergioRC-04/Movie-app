import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to MovieApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Alinea los elementos horizontalmente
    alignItems: "center", // Centra verticalmente
    justifyContent: "", // Centra horizontalmente
    marginBottom: 0,
    paddingTop: 15,
    padding: 20,
  },
  logo: {
    width: 40, // Ancho del logo
    height: 40, // Alto del logo
    marginRight: 10, // Espacio entre el logo y el texto
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
