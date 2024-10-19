export const BASE_URL = 'https://api.themoviedb.org/3/movie';
export const TMDB_MOVIE_LISTS = {
  NOW_PLAYING: BASE_URL + '/now_playing?language=ko-KR&page=1',
};
export const TMDB_BANNER_URL =
  'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';

export const TMDB_THUMBNAIL_URL =
  'https://media.themoviedb.org/t/p/w440_and_h660_face/';

export const MOVIE_DETAIL = (id) => BASE_URL + `/${id}?language=ko-kr`;
