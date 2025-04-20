import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { useState, useEffect, useRef } from "react";
import { getPopularMovies, searchMovies } from "../services/api.js";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer.jsx";

export default function App({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const flatListRef = useRef(null); // Referencia para el FlatList

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

  const loadNextPage = () => {
    if (searchQuery.trim() === "") {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchMovies(nextPage);
    }
  };

  const reloadMovies = () => {
    setMovies([]);
    setPage(1);
    fetchMovies(1);
  };

  const goToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  useEffect(() => {
    fetchMovies(page);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <MovieList
        movies={movies}
        loading={loading}
        onLoadMore={loadNextPage}
        onPressMovie={(movie) => navigation.navigate("Details", { movie })}
      />
      {/* Footer */}
      <Footer
        reloadMovies={reloadMovies}
        goToTop={goToTop}
        goBack={() => navigation?.goBack?.()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
