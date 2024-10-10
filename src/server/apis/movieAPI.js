import { TMDB_MOVIE_LISTS, FETCH_OPTIONS } from "../constants/api";

export const getPopularMovies = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.popular, FETCH_OPTIONS);
  const data = response.json();

  return data;
};
