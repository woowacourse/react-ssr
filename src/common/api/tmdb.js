const BASE_URL = "https://api.themoviedb.org/3/movie";

const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_TOKEN,
  },
};

const TMDB_BANNER_URL =
  "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";
const TMDB_THUMBNAIL_URL =
  "https://media.themoviedb.org/t/p/w440_and_h660_face/";
const TMDB_ORIGINAL_URL = "https://image.tmdb.org/t/p/original/";

export const TMDB_MOVIE_LISTS = {
  nowPlaying: BASE_URL + "/now_playing?language=ko-KR&page=1",
};
const TMDB_MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie/";

export const getThumbnailUrl = (movie) => {
  return TMDB_THUMBNAIL_URL + movie.poster_path;
};

export const getBackgroundImageUrl = (movie) => {
  return TMDB_BANNER_URL + movie.backdrop_path;
};

export const getBannerUrl = (movie) => {
  return TMDB_ORIGINAL_URL + movie.poster_path;
};

export const getMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();
  return data.results;
};

export const getMovie = async (id) => {
  const url = TMDB_MOVIE_DETAIL_URL + id;
  const params = new URLSearchParams({
    language: "ko-KR",
  });
  const response = await fetch(`${url}?${params}`, FETCH_OPTIONS);

  return await response.json();
};
