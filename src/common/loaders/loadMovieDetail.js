import getMovieDetail from "../apis/getMovieDetail";

const loadMovieDetail = async ({ params }) => {
  const movie = await getMovieDetail(params.id);

  const { poster_path, title, release_date, genres, vote_average, overview } = movie;

  const releaseYear = release_date.substring(0, 4);
  const genreNames = genres.map(({ name }) => name);
  const category = [releaseYear, ...genreNames].join(", ");

  return {
    posterPath: poster_path,
    title,
    category,
    rate: vote_average.toFixed(1),
    overview,
  };
};
export default loadMovieDetail;
