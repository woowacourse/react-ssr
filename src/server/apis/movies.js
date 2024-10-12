import { TMDB_MOVIE_DETAIL_URL, TMDB_MOVIE_LISTS } from './constants.js';

const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.TMDB_TOKEN,
  },
};

const loadMovies = async (url) => {
  try {
    const response = await fetch(url, FETCH_OPTIONS);

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
    const data = await loadMovies(TMDB_MOVIE_LISTS.popular);
    return data;
  },

  nowPlaying: async () => {
    const data = await loadMovies(TMDB_MOVIE_LISTS.nowPlaying);
    return data;
  },

  upcoming: async () => {
    const data = await loadMovies(TMDB_MOVIE_LISTS.upcoming);
    return data;
  },

  topRated: async () => {
    const data = await loadMovies(TMDB_MOVIE_LISTS.topRated);
    return data;
  },

  detail: async (id) => {
    const data = await loadMovies(`${TMDB_MOVIE_DETAIL_URL}${id}`);
    return data;
  },
};

export default fetchMovies;
