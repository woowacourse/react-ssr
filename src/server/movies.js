import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from "./constant.js";

export const fetchNowPlayingMovies = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.NOW_PLAYING, FETCH_OPTIONS);

  return await response.json();
};
