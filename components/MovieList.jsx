import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const MovieList = ({ movies, loading, onLoadMore }) => {
  const renderFooter = () => {
    if (loading) {
      return <Text style={styles.loader}>Loading...</Text>;
    }
    return (
      <Text style={styles.loadMoreButton} onPress={onLoadMore}>
        Load More
      </Text>
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.movieCard}>
      {/* Imagen de la película */}
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.movieInfo}>
        {/* Título */}
        <Text style={styles.title}>{item.title}</Text>
        {/* Calificación promedio */}
        <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
        {/* Fecha de lanzamiento */}
        <Text style={styles.date}>{item.release_date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title_popular}>Popular Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ paddingBottom: 20 }} // Espacio adicional para el botón
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que el contenedor ocupe todo el espacio disponible
    backgroundColor: "#fff",
    marginBottom: 30,
  },
  movieCard: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#2A2A2A",
    borderRadius: 10,
    overflow: "hidden",
  },
  title_popular: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  movieInfo: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: "#FFD700", // Color dorado para las estrellas
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#ccc",
  },
  loader: {
    textAlign: "center",
    marginVertical: 20,
    color: "#fff",
  },
  loadMoreButton: {
    textAlign: "center",
    marginVertical: 20,
    color: "#000",
    fontWeight: "bold",
    backgroundColor: "#FFD700",
    padding: 10,
    margin: 50,
    borderRadius: 20,
    fontSize: 16,
  },
});

export default MovieList;
