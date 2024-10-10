export const BASE_URL = "https://api.themoviedb.org/3/movie";

export const TMDB_RESOURCE = {
  IMAGE: {
    THUMBNAIL_URL: "https://media.themoviedb.org/t/p/w440_and_h660_face/",
    ORIGINAL_URL: "https://image.tmdb.org/t/p/original/",
    BANNER_URL: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/",
  },
};

export const TMDB_API_URL = {
  MOVIE_LISTS: {
    NOW_PLAYING: `${BASE_URL}/now_playing?language=ko-KR&page=1`,
    POPULAR: `${BASE_URL}/popular?language=ko-KR&page=1`,
    TOP_RATED: `${BASE_URL}/top_rated?language=ko-KR&page=1`,
    UPCOMING: `${BASE_URL}/upcoming?language=ko-KR&page=1`,
  },
};

export const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
};
