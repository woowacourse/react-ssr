import { TMDB_MOVIE_DETAIL_URL, TMDB_MOVIE_LISTS } from "./constants.js";

const FETCH_OPTIONS = {
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_TOKEN,
  },
};

const fetcher = async (url, method) => {
  try {
    const response = await fetch(url, {
      ...FETCH_OPTIONS,
      method,
    });

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
    const data = await fetcher(TMDB_MOVIE_LISTS.popular, "GET");
    return data.results;
  },

  nowPlaying: async () => {
    const data = await fetcher(TMDB_MOVIE_LISTS.nowPlaying, "GET");
    return data.results;
  },

  upcoming: async () => {
    const data = await fetcher(TMDB_MOVIE_LISTS.upcoming, "GET");
    return data.results;
  },

  topRated: async () => {
    const data = await fetcher(TMDB_MOVIE_LISTS.topRated, "GET");
    return data.results;
  },

  detail: async (id) => {
    const data = await fetcher(
      `${TMDB_MOVIE_DETAIL_URL}${id}?language=ko-KR`,
      "GET"
    );
    return data;
  },
};

export default fetchMovies;
