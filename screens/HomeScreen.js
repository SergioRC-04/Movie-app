import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { useState, useEffect, useRef } from "react";
import { getPopularMovies, searchMovies } from "../services/api.js";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer.jsx";

export default function HomeScreen({ navigation }) {
  // Estado para almacenar las películas
  const [movies, setMovies] = useState([]);
  // Estado para manejar la paginación
  const [page, setPage] = useState(1);
  // Estado para manejar el indicador de carga
  const [loading, setLoading] = useState(false);
  // Estado para almacenar la consulta de búsqueda
  const [searchQuery, setSearchQuery] = useState("");
  // Estado para manejar el tema (oscuro o claro)
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // Referencia para el FlatList (para desplazarse al inicio)
  const flatListRef = useRef(null);

  /**
   * Obtiene las películas populares desde la API.
   * @param {number} pageNumber - Número de página para la paginación.
   */
  const fetchMovies = async (pageNumber) => {
    try {
      setLoading(true);
      const popularMovies = await getPopularMovies(pageNumber);
      setMovies((prevMovies) => {
        const allMovies = [...prevMovies, ...popularMovies];
        return allMovies.filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.id === movie.id)
        );
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  /**
   * Maneja la búsqueda de películas.
   * @param {string} query - Término de búsqueda.
   */
  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setMovies([]);
      fetchMovies(1);
      setPage(1);
    } else {
      try {
        setLoading(true);
        const searchResults = await searchMovies(query);
        setMovies(searchResults);
        setLoading(false);
      } catch (error) {
        console.error("Error searching movies:", error);
        setLoading(false);
      }
    }
  };

  /**
   * Carga la siguiente página de películas populares.
   */
  const loadNextPage = () => {
    if (searchQuery.trim() === "") {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchMovies(nextPage);
    }
  };

  /**
   * Recarga las películas populares desde la primera página.
   */
  const reloadMovies = () => {
    setMovies([]);
    setPage(1);
    fetchMovies(1);
  };

  /**
   * Desplaza la lista de películas al inicio.
   */
  const goToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  /**
   * Alterna entre el modo oscuro y el modo claro.
   */
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme); // Alterna entre oscuro y claro
  };

  useEffect(() => {
    fetchMovies(page);
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#424242" : "#fff" }, // Cambia el fondo dinámicamente
      ]}
    >
      <StatusBar style="auto" />
      {/* Encabezado */}
      <Header isDarkTheme={isDarkTheme} />
      {/* Barra de búsqueda */}
      <SearchBar
        searchQuery={searchQuery}
        onSearch={handleSearch}
        isDarkTheme={isDarkTheme}
      />
      {/* Lista de películas */}
      <MovieList
        movies={movies}
        loading={loading}
        onLoadMore={loadNextPage}
        onPressMovie={(movie) =>
          navigation.navigate("Details", { movie, isDarkTheme })
        }
        isDarkTheme={isDarkTheme}
      />
      {/* Footer */}
      <Footer
        reloadMovies={reloadMovies}
        goToTop={goToTop}
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
