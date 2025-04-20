import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>MovieMania</Text>
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
