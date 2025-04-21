import axios from "axios";

const API_KEY = "d8b56bd138849400d61a5bdbe98e56c8";
const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Obtiene una lista de películas populares desde TMDb.
 * @param {number} page - Número de página para la paginación (por defecto, 1).
 * @returns {Promise<Array>} - Una lista de películas populares.
 */
export const getPopularMovies = async (page = 1) => {
  const res = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });
  return res.data.results;
};

/**
 * Busca películas en TMDb que coincidan con un término de búsqueda.
 * @param {string} query - Término de búsqueda.
 * @returns {Promise<Array>} - Una lista de películas que coinciden con el término de búsqueda.
 */
export const searchMovies = async (query) => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data.results;
};

/**
 * Obtiene los detalles de una película específica desde TMDb.
 * @param {number} id - ID de la película.
 * @returns {Promise<Object>} - Un objeto con los detalles de la película.
 */
export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};
