const getTopRateMovie = (movies) => {
  const topRateMovie = movies.reduce((highest, movie) => {
    return movie.vote_average > highest.vote_average ? movie : highest;
  }, movies[0]);

  return topRateMovie;
};

export default getTopRateMovie;
