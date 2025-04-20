import React from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search movies by title..."
      placeholderTextColor={"#8E9DB1"}
      value={searchQuery}
      onChangeText={onSearch}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#2A2A2A",
    marginTop: 0,
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 25,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default SearchBar;
