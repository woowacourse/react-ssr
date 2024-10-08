export const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const TMDB_THUMBNAIL_URL = 'https://media.themoviedb.org/t/p/w440_and_h660_face/';
export const TMDB_ORIGINAL_URL = 'https://image.tmdb.org/t/p/original/';
export const TMDB_BANNER_URL = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
export const TMDB_MOVIE_LISTS = {
  nowPlaying: BASE_URL + '/now_playing?language=ko-KR&page=1',
};

export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.TMDB_TOKEN,
  },
};
