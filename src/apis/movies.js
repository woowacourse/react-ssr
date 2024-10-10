import {
  TMDB_MOVIE_LISTS,
  TMDB_MOVIE_DETAIL_URL,
  FETCH_OPTIONS,
} from "./constants";

export const fetchPopularMovieItems = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.POPULAR, FETCH_OPTIONS);

  const data = await response.json();

  return data.results;
};

export const fetchNowPlayingMovieItems = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.NOW_PLAYING, FETCH_OPTIONS);

  const data = await response.json();

  return data.results;
};

export const fetchTopRatedMovieItems = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.TOP_RATED, FETCH_OPTIONS);

  const data = await response.json();

  return data.results;
};

export const fetchUpcomingMovieItems = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.UPCOMING, FETCH_OPTIONS);

  const data = await response.json();

  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const url = `${TMDB_MOVIE_DETAIL_URL}${id}?language=ko-KR`;

  const response = await fetch(url, FETCH_OPTIONS);

  const data = await response.json();

  return data;
};
