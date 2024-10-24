import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from "../../common/constants/api";

export const loadMovies = async (movieType) => {
  const fetchEndPoint =
    TMDB_MOVIE_LISTS[movieType] || TMDB_MOVIE_LISTS.nowPlaying;

  const response = await fetch(fetchEndPoint, FETCH_OPTIONS);
  const allMovieData = await response.json();

  return allMovieData.results;
};
