import { getTMDBData } from "./getTMDBData";

const TMDB_NOW_PLAGING_MOVIE_LIST =
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1";

const getMovieList = async () => {
  return getTMDBData(TMDB_NOW_PLAGING_MOVIE_LIST);
};

export default getMovieList;
