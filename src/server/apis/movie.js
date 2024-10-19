import { FETCH_OPTIONS } from "../../constants/fetch";
import { TMDB_MOVIE_LISTS, TMDB_MOVIE_DETAIL_URL } from "../../constants/tmdb";

export const loadPopularMovies = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.popular, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};

export const loadMovieDetail = async (id) => {
  const url = TMDB_MOVIE_DETAIL_URL + id;
  const params = new URLSearchParams({
    language: "ko-KR",
  });
  const response = await fetch(url + "?" + params, FETCH_OPTIONS);

  const data = await response.json();

  return data;
};
