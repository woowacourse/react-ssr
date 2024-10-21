<<<<<<< HEAD
import {
  FETCH_OPTIONS,
  TMDB_MOVIE_DETAIL_URL,
  TMDB_MOVIE_LISTS,
} from "../constant/url";
=======
import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from "../constant/url";
>>>>>>> 48d3dafaa7fb79f14c3db81fb622953458eba609

export const fetchNowPlayingMovieItems = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.NOW_PLAYING, FETCH_OPTIONS);

  const data = await response.json();

  return data.results || [];
};

export const fetchMovieDetails = async (id) => {
  const url = `${TMDB_MOVIE_DETAIL_URL}${id}?language=ko-KR`;
  const response = await fetch(url, FETCH_OPTIONS);

  const data = await response.json();

  return data;
};
