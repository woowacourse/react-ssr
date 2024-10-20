export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_TOKEN = process.env.TMDB_TOKEN;

export const TMDB_ORIGINAL_URL = 'https://image.tmdb.org/t/p/original/';
export const TMDB_THUMBNAIL_URL = 'https://media.themoviedb.org/t/p/w440_and_h660_face/';
export const TMDB_BANNER_URL = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';

export const API_MOVIE_ENDPOINTS = {
  now_playing: `${API_BASE_URL}/movie/now_playing`,
  popular: `${API_BASE_URL}/movie/popular`,
  top_rated: `${API_BASE_URL}/movie/top_rated`,
  upcoming: `${API_BASE_URL}/movie/upcoming`,
};

export const API_MOVIE_DETAIL_ENDPOINT = `${API_BASE_URL}/movie/`;

export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
};
