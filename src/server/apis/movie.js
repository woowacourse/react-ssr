import {
  FETCH_OPTIONS,
  TMDB_MOVIE_DETAIL_URL,
  TMDB_MOVIE_LISTS,
} from "../constants/index.js";

export const fetchMoviesPopular = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.POPULAR, FETCH_OPTIONS);

  return await response.json();
};

export const fetchMovieDetail = async (movieId) => {
  const url = TMDB_MOVIE_DETAIL_URL + movieId;
  const params = new URLSearchParams({
    language: "ko-KR",
  });

  const response = await fetch(url + "?" + params, FETCH_OPTIONS);

  return await response.json();
};
