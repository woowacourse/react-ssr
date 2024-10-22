import { TMDB_MOVIE_DETAIL_URL, TMDB_MOVIE_LISTS } from './constants.js';

const TMDB_TOKEN = process.env.TMDB_TOKEN;

const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + TMDB_TOKEN,
  },
};

const loadMovies = async (url, params = {}) => {
  try {
    const response = await fetch(
      `${url}?${new URLSearchParams({
        language: 'ko-KR',
        ...params,
      }).toString()}`,
      FETCH_OPTIONS
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchMovies = {
  popular: async () => {
    const data = await loadMovies(TMDB_MOVIE_LISTS.popular, {
      page: 1,
    });
    return data;
  },

  nowPlaying: async () => {
    const data = await loadMovies(TMDB_MOVIE_LISTS.nowPlaying, {
      page: 1,
    });
    return data;
  },

  upcoming: async () => {
    const data = await loadMovies(TMDB_MOVIE_LISTS.upcoming, {
      page: 1,
    });
    return data;
  },

  topRated: async () => {
    const data = await loadMovies(TMDB_MOVIE_LISTS.topRated, {
      page: 1,
    });
    return data;
  },

  detail: async (id) => {
    const data = await loadMovies(`${TMDB_MOVIE_DETAIL_URL}${id}`);
    return data;
  },
};

export default fetchMovies;
