
import { fetchMovieDetail, fetchPopularMovies } from "../src/fetch";
import { parseMovieDetail, parseMovies } from "../src/parseUtils";


export const getMovieList = async () => {
  const movieData = await fetchPopularMovies();
  return parseMovies(movieData);
};


export const getMovieDetail = async (movieId) => {
  const movieDetailData = await fetchMovieDetail(movieId);
  return parseMovieDetail(movieDetailData);
};

