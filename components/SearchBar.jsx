import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

/**
 * Componente SearchBar
 * Muestra una barra de búsqueda que permite al usuario buscar películas por título.
 * Cambia dinámicamente el estilo según el tema (oscuro o claro).
 *
 * @param {string} searchQuery - El texto actual ingresado en la barra de búsqueda.
 * @param {function} onSearch - Función que se ejecuta cuando el texto cambia.
 * @param {boolean} isDarkTheme - Indica si el tema actual es oscuro.
 */
const SearchBar = ({ searchQuery, onSearch, isDarkTheme }) => {
  return (
    <View style={[{ backgroundColor: "7AE2CF" }]}>
      <TextInput
        style={[
          styles.searchBar,
          { borderColor: isDarkTheme ? "#FFD700" : "#2A2A2A" },
        ]}
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
    marginTop: 15,
    margin: 20,
    marginBottom: 10,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 25,
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    borderWidth: 1,
  },
});

export default SearchBar;
