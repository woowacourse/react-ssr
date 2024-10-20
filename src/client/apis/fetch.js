import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL } from "./constant";

const fetchMovieDetail = async (id) => {
  const response = await fetch(TMDB_MOVIE_DETAIL_URL(id), FETCH_OPTIONS);
  return await response.json();
};

export const getMovieDetail = async (movieId) => {
  const movieDetailData = await fetchMovieDetail(movieId);
  return parseMovieDetail(movieDetailData);
};

const parseMovieDetail = async (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    thumbnail: movie.poster_path,
    releaseYear: movie.release_date,
    genres: movie.genres.map((genre) => genre.name),
    description: movie.overview,
    rate: movie.vote_average,
  };
};
