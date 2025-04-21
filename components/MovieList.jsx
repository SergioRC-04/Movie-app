import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

/**
 * Componente MovieList
 * Muestra una lista de películas populares con un diseño de tarjetas.
 * Cambia dinámicamente el estilo según el tema (oscuro o claro).
 *
 * @param {Array} movies - Lista de películas a mostrar.
 * @param {boolean} loading - Indica si se están cargando más películas.
 * @param {function} onLoadMore - Función para cargar más películas.
 * @param {function} onPressMovie - Función que se ejecuta al presionar una película.
 * @param {boolean} isDarkTheme - Indica si el tema actual es oscuro.
 */
const MovieList = ({
  movies,
  loading,
  onLoadMore,
  onPressMovie,
  isDarkTheme,
}) => {
  /**
   * Renderiza el pie de lista (footer) con un botón para cargar más películas.
   * Muestra un indicador de carga si `loading` es verdadero.
   */
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

  /**
   * Renderiza cada elemento de la lista de películas.
   * @param {Object} item - Objeto que representa una película.
   */
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPressMovie(item)}>
      <View style={styles.movieCard}>
        {/* Imagen de la película */}
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.poster}
        />
        <View style={styles.movieInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
          <Text style={styles.date}>{item.release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#424242" : "#fff" },
      ]}
    >
      <Text
        style={[
          styles.title_popular,
          { color: isDarkTheme ? "#FFD700" : "#000" },
        ]}
      >
        Popular Movies
      </Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "#FFD700",
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
    padding: 5,
    margin: 100,
    borderRadius: 20,
    fontSize: 16,
  },
});

export default MovieList;
