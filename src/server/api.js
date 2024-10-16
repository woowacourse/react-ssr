import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL } from "../constant";

export const fetchMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);

  return await response.json();
};

export const fetchMovieDetail = async (movieId) => {
  const response = await fetch(TMDB_MOVIE_DETAIL_URL + movieId, FETCH_OPTIONS);

  return await response.json();
};
