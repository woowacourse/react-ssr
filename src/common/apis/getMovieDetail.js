import { getTMDBData } from "./getTMDBData";

export const TMDB_MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie/";

const getMovieDetail = async (movieId) => {
  const url = `${TMDB_MOVIE_DETAIL_URL}${movieId}?language=ko-KR`;

  const data = await getTMDBData(url);

  return data;
};

export default getMovieDetail;
