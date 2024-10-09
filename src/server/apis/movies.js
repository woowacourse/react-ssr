import { TMDB_MOVIE_LISTS, FETCH_OPTIONS } from "./constants.js";

export const fetchMovieItems = async (category = "nowPlaying") => {
  const url = TMDB_MOVIE_LISTS[category];
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data;
};
