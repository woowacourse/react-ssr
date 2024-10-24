import {
  TMDB_MOVIE_LISTS,
  FETCH_OPTIONS,
  TMDB_MOVIE_DETAIL_URL,
} from "../constants";

export const getMovies = async () => {
  const movies = (
    await fetch(TMDB_MOVIE_LISTS.popular, FETCH_OPTIONS).then((res) =>
      res.json()
    )
  ).results;

  return movies;
};

export const getMovieDetail = async (id) => {
  const movieDetail = await fetch(
    `${TMDB_MOVIE_DETAIL_URL}${id}?language=ko-KR`,
    FETCH_OPTIONS
  ).then((res) => res.json());
  return movieDetail;
};
