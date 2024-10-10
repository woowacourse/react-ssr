import {
  TMDB_MOVIE_LISTS,
  FETCH_OPTIONS,
  TMDB_MOVIE_DETAIL_URL,
} from "../../constants.js";

export const fetchMovies = async (movieListType) => {
  const response = await fetch(TMDB_MOVIE_LISTS[movieListType], FETCH_OPTIONS);
  const dd = await response.json();
  return dd.results;
};

export const fetchMovie = async (id) => {
  const response = await fetch(
    `${TMDB_MOVIE_DETAIL_URL}${id}?language=ko-KR`,
    FETCH_OPTIONS
  );
  return await response.json();
};
