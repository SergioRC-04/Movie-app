import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Botón para ir a la página anterior */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/flecha-izquierda.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Movie Details</Text>
      </View>

      {/* Imagen de la película */}
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      {/* Título */}
      <Text style={styles.title}>{movie.original_title}</Text>
      {/* Calificación */}
      <Text style={styles.rating}>⭐ {movie.vote_average.toFixed(1)}</Text>
      {/* Fecha de lanzamiento */}
      <Text style={styles.date}>Release Date: {movie.release_date}</Text>
      {/* Descripción */}
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  poster: {
    width: "100%",
    height: 350,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  rating: {
    fontSize: 18,
    color: "#FFD700",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  date: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row", // Alinea los elementos horizontalmente
    alignItems: "center", // Centra verticalmente
    marginBottom: 0,
    paddingTop: 40,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#FFD700", // Color de fondo
  },
  logo: {
    width: 20, // Ancho del logo
    height: 20, // Alto del logo
    marginRight: 10,
    borderRadius: 15, // Hace que el logo sea circular
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
