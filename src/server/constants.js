export const PATH_LIST = {
  POPULAR: '/popular',
  UPCOMING: '/upcoming',
  TOP_RATED: '/top_rated',
  NOW_PLAYING: '/now_playing',
};

export const BASE_URL = 'https://api.themoviedb.org/3/movie';
export const TMDB_THUMBNAIL_URL = 'https://media.themoviedb.org/t/p/w440_and_h660_face/';
export const TMDB_ORIGINAL_URL = 'https://image.tmdb.org/t/p/original/';
export const TMDB_BANNER_URL = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
export const TMDB_MOVIE_LISTS = {
  POPULAR: BASE_URL + PATH_LIST.POPULAR + '?language=ko-KR&page=1',
  NOW_PLAYING: BASE_URL + PATH_LIST.NOW_PLAYING + '?language=ko-KR&page=1',
  TOP_RATED: BASE_URL + PATH_LIST.TOP_RATED + '?language=ko-KR&page=1',
  UPCOMING: BASE_URL + PATH_LIST.UPCOMING + '?language=ko-KR&page=1',
};
export const TMDB_MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie/';

export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.TMDB_TOKEN,
  },
};
