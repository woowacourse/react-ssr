import { TMDB_MOVIE_NOW_PLAYING_LISTS } from "../constant.js";
import { FETCH_OPTIONS } from "../constant.js";

export const fetchNowPlayingMovies = async () => {
  const response = await fetch(TMDB_MOVIE_NOW_PLAYING_LISTS, FETCH_OPTIONS);

  return await response.json();
};
