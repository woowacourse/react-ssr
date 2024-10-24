import {
  TMDB_MOVIE_DETAIL_URL,
  TMDB_MOVIE_LISTS,
  FETCH_OPTIONS,
} from "../server/constants/constants";

const getMovieDetailUrl = (movieId, options = {}) => {
  const defaultOptions = {
    language: "ko-KR",
    baseUrl: TMDB_MOVIE_DETAIL_URL,
  };

  const finalOptions = { ...defaultOptions, ...options };

  const encodedMovieId = encodeURIComponent(movieId); // movieId 인코딩
  const url = `${finalOptions.baseUrl}${encodedMovieId}?language=${finalOptions.language}`;

  return url;
};

export const getPopularMovies = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS["NOW_PLAYING"], FETCH_OPTIONS);

  if (!response.ok) {
    console.error("Fetch failed:", response.status, response.statusText);
    throw new Error(`Fetch failed with status ${response.status}`);
  }

  const moviesData = await response.json();
  return moviesData.results;
};

export const getMovieDetail = async (movieId) => {
  const response = await fetch(getMovieDetailUrl(movieId), FETCH_OPTIONS);

  if (!response.ok) {
    console.error("Fetch failed:", response.status, response.statusText);
    throw new Error(`Fetch failed with status ${response.status}`);
  }

  return await response.json();
};
