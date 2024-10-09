export const MOVIE_LIST_TYPE = {
  default: 'popular',
  popular: 'popular',
  nowPlaying: 'nowPlaying',
  topRated: 'topRated',
  upcoming: 'upcoming',
};

export const MOVIE_LIST_TITLE = {
  [MOVIE_LIST_TYPE.popular]: '지금 인기 있는 영화',
  [MOVIE_LIST_TYPE.nowPlaying]: '현재 상영 중인 영화',
  [MOVIE_LIST_TYPE.topRated]: '높은 평점을 받은 영화',
  [MOVIE_LIST_TYPE.upcoming]: '개봉 예정 영화',
};

export const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const TMDB_THUMBNAIL_URL = 'https://media.themoviedb.org/t/p/w440_and_h660_face/';
export const TMDB_ORIGINAL_URL = 'https://image.tmdb.org/t/p/original/';
export const TMDB_BANNER_URL = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
export const TMDB_MOVIE_LISTS = {
  [MOVIE_LIST_TYPE.popular]: BASE_URL + '/popular?language=ko-KR&page=1',
  [MOVIE_LIST_TYPE.nowPlaying]: BASE_URL + '/now_playing?language=ko-KR&page=1',
  [MOVIE_LIST_TYPE.topRated]: BASE_URL + '/top_rated?language=ko-KR&page=1',
  [MOVIE_LIST_TYPE.upcoming]: BASE_URL + '/upcoming?language=ko-KR&page=1',
};
export const TMDB_MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie/';

export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.TMDB_TOKEN,
  },
};
