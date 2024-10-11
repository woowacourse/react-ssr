import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from "../constants/api.js";

export const fetchMovies = async (movieType) => {
  const fetchEndPoint = TMDB_MOVIE_LISTS[movieType];

  const response = await fetch(fetchEndPoint, FETCH_OPTIONS);
  const allMovieData = await response.json();

  return allMovieData.results;
};
