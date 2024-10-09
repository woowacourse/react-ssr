import { TMDB_MOVIE_LISTS } from './constants.js';
import { fetchTMDB } from './fetchTMDB.js';

export const fetchMovieList = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.NOW_PLAYING, fetchTMDB);
  const data = await response.json();

  return await data.results;
};
