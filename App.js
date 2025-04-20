import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "./services/api.js";
import Constants from "expo-constants";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    fetchMovies(page);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <MovieList movies={movies} loading={loading} onLoadMore={loadNextPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
