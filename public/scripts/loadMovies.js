import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL, TMDB_MOVIE_LISTS } from "./constants.js";

const loadMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();
  return data;
};

export const loadNowPlaying = async () => await (await loadMovies(TMDB_MOVIE_LISTS.nowPlaying)).results;
export const loadPopular = async () => await (await loadMovies(TMDB_MOVIE_LISTS.popular)).results;
export const loadTopRated = async () => await (await loadMovies(TMDB_MOVIE_LISTS.topRated)).results;
export const loadUpcoming = async () => await (await loadMovies(TMDB_MOVIE_LISTS.upcoming)).results;

export const loadMovieDetail = async (id) => {
  const url = `${TMDB_MOVIE_DETAIL_URL}${id}`;
  const params = new URLSearchParams({
    language: "ko-KR",
  });
  const newUrl = url + "?" + params;

  return await loadMovies(newUrl);
};
