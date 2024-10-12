import { TMDB_MOVIE_LISTS, FETCH_OPTIONS } from "../constants";

export const fetchMovies = async (movieListType) => {
  const response = await fetch(TMDB_MOVIE_LISTS[movieListType], FETCH_OPTIONS);
  const data = await response.json();
  return data.results;
};
