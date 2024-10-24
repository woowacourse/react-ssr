export const BASE_URL = "https://api.themoviedb.org/3/movie";

export const TMDB_MOVIE_LISTS = {
  POPULAR: BASE_URL + "/popular?language=ko-KR&page=1",
};

export const TMDB_MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie/";
export const TMDB_ORIGINAL_URL = "https://image.tmdb.org/t/p/original/";

export const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_TOKEN,
  },
};
