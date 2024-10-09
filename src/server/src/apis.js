import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL } from "./constants.js";

export const getMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};

export const getMovieDetails = async (id) => {
  const url = TMDB_MOVIE_DETAIL_URL + id;
  const params = new URLSearchParams({
    language: "ko-KR",
  });
  const response = await fetch(url + "?" + params, FETCH_OPTIONS);

  return await response.json();
};