import { TMDB_MOVIE_LISTS, FETCH_OPTIONS } from "../constants.js";

export const fetchMovies = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.nowPlaying, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};
