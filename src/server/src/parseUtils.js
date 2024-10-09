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

export const parseMovieDetail = async (movie) => {
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
