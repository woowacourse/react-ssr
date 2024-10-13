import { getTMDBData } from "./getTMDBData";

export const TMDB_MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie/";

const getMovieDetail = async (movieId) => {
  const url = `${TMDB_MOVIE_DETAIL_URL}${movieId}?language=ko-KR`;

  return getTMDBData(url);
};

export default getMovieDetail;
