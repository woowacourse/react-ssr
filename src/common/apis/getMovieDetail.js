import { getTMDBData } from "./getTMDBData";

export const TMDB_MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie/";

const CATEGORY_SEPARATOR = ", ";

const getMovieDetail = async (movieId) => {
  const url = `${TMDB_MOVIE_DETAIL_URL}${movieId}?language=ko-KR`;

  const movie = await getTMDBData(url);

  const { release_date, genres } = movie;

  const releaseYear = release_date.substring(0, 4);
  const genreNames = genres.map(({ name }) => name);
  const category = [releaseYear, ...genreNames].join(CATEGORY_SEPARATOR);

  return { ...movie, category };
};

export default getMovieDetail;
