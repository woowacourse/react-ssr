import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from "../constants/index.js";

export const fetchMoviesPopular = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.POPULAR, FETCH_OPTIONS);

  return await response.json();
};
