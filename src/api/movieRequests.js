import { MOVIE_DETAIL, TMDB_MOVIE_LISTS } from './constants.js';
import { fetchTMDB } from './fetchTMDB.js';

export const fetchMovieList = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.NOW_PLAYING, fetchTMDB);
  const data = await response.json();

  return data.results;
};

export const fetchMovieDetail = async (id) => {
  const response = await fetch(MOVIE_DETAIL(id), fetchTMDB);
  return await response.json();
};
