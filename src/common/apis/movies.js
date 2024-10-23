import {
  TMDB_MOVIE_LISTS,
  FETCH_OPTIONS,
  TMDB_MOVIE_DETAIL_URL,
} from "./constants.js";

export const fetchMovieItems = async (category = "nowPlaying") => {
  const url = TMDB_MOVIE_LISTS[category];
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data;
};

export const fetchMovieDetail = async (id) => {
  const url = `${TMDB_MOVIE_DETAIL_URL}${id}?language=ko-KR`;
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data;
};
