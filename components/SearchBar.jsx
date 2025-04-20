import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <View style={{ backgroundColor: "#FFD700" }}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies by title..."
        placeholderTextColor={"#8E9DB1"}
        value={searchQuery}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#2A2A2A",
    marginTop: 0,
    margin: 20,
    marginBottom: 10,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 25,
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default SearchBar;
