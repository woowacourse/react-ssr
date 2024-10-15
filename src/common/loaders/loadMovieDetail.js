import getMovieDetail from "../apis/getMovieDetail";

const loadMovieDetail = async ({ params }) => {
  const movie = await getMovieDetail(params.id);

  const { release_date, genres } = movie;

  const releaseYear = release_date.substring(0, 4);
  const genreNames = genres.map(({ name }) => name);
  const category = [releaseYear, ...genreNames].join(", ");

  return { ...movie, category };
};
export default loadMovieDetail;
