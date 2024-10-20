import {
  TMDB_MOVIE_LISTS,
  FETCH_OPTIONS,
  TMDB_MOVIE_DETAIL_URL,
} from "../constants";

export const fetchMovies = async (movieListType) => {
  const response = await fetch(TMDB_MOVIE_LISTS[movieListType], FETCH_OPTIONS);
  const data = await response.json();
  return data.results;
};

export const fetchMovie = async (id) => {
  const response = await fetch(
    `${TMDB_MOVIE_DETAIL_URL}${id}?language=ko-KR`,
    FETCH_OPTIONS
  );
  return await response.json();
};
