export const parseMovieItems = (data) => {
  return data.results.map((result) => ({
    ...result,
    rate: result.vote_average,
    thumbnail: result.poster_path,
    background: result.backdrop_path,
  }));
};
