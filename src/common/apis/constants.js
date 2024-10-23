export const BASE_URL = "https://api.themoviedb.org/3/movie";

export const TMDB_MOVIE_LISTS = {
  nowPlaying: BASE_URL + "/now_playing?language=ko-KR&page=1",
};

export const TMDB_MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie/";

export const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.VITE_TMDB_TOKEN,
  },
};
