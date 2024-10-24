import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL } from "./endpoints.js";

export const fetchMovieList = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${TMDB_MOVIE_DETAIL_URL}${movieId}?language=ko-KR`, FETCH_OPTIONS);
  const data = await response.json();

  return data;
};
