import React from "react";
import {
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

const MovieList = ({ movies, loading, onLoadMore }) => {
  const renderFooter = () => {
    if (loading) {
      return (
        <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
      );
    }
    return (
      <TouchableOpacity style={styles.loadMoreButton} onPress={onLoadMore}>
        <Text style={styles.loadMoreText}>Load More</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.title}>Popular Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <Text style={styles.movieItem}>{item.title}</Text>
        )}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
    margin: 20,
  },
  movieItem: {
    fontSize: 18,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  loader: {
    marginVertical: 20,
  },
  loadMoreButton: {
    padding: 15,
    backgroundColor: "#6200ee",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  loadMoreText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MovieList;
