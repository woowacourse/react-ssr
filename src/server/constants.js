export const BASE_URL = "https://api.themoviedb.org/3/movie";

export const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_TOKEN,
  },
};

export const TMDB_MOVIE_LISTS = {
  popular: BASE_URL + "/popular?language=ko-KR&page=1",
  nowPlaying: BASE_URL + "/now_playing?language=ko-KR&page=1",
  topRated: BASE_URL + "/top_rated?language=ko-KR&page=1",
  upcoming: BASE_URL + "/upcoming?language=ko-KR&page=1",
};

export const TMDB_MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie/";

