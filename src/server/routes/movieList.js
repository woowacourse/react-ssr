import { fetchPopularMovies } from "../src/fetch";

export const parseMovies = async (movieData) => {
  const formattedMovieData = movieData.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    thumbnail: movie.poster_path,
    rate: movie.vote_average,
    background: movie.backdrop_path,
  }));

  return formattedMovieData;
};

export const getMovieList = async () => {
  const movieData = await fetchPopularMovies();
  return parseMovies(movieData);
};
