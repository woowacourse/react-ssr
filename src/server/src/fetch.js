import {
  FETCH_OPTIONS,
  TMDB_MOVIE_DETAIL_URL,
  TMDB_MOVIE_LISTS,
} from "./constants";

export const fetchPopularMovies = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS["POPULAR"], FETCH_OPTIONS);
  return await response.json();
};

export const fetchMovieDetail = async (id) => {
  const response = await fetch(TMDB_MOVIE_DETAIL_URL(id), FETCH_OPTIONS);
  return await response.json();
};
