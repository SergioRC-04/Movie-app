import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { movie, isDarkTheme } = route.params;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#424242" : "#fff" },
      ]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: isDarkTheme ? "#2A2A2A" : "#FFD700" },
        ]}
      >
        {/* Botón para ir a la página anterior */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={
              isDarkTheme
                ? require("../assets/volver-dark.png")
                : require("../assets/flecha-izquierda.png")
            }
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.titleHeader,
            { color: isDarkTheme ? "#FFD700" : "#000" },
          ]}
        >
          Movie Details
        </Text>
      </View>

      {/* Imagen de la película */}
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      {/* Título */}
      <Text style={[styles.title, { color: isDarkTheme ? "#fff" : "#000" }]}>
        {movie.original_title}
      </Text>
      {/* Calificación */}
      <Text style={styles.rating}>⭐ {movie.vote_average.toFixed(1)}</Text>
      {/* Fecha de lanzamiento */}
      <Text style={[styles.date, { color: isDarkTheme ? "#E5E5E5" : "#888" }]}>
        Release Date: {movie.release_date}
      </Text>
      {/* Descripción */}
      <Text
        style={[styles.overview, { color: isDarkTheme ? "#F2F2F2" : "#333" }]}
      >
        {movie.overview}
      </Text>
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
    marginBottom: 20,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    paddingTop: 40,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#FFD700",
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 15,
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
