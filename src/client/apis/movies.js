import { BASE_URL, FETCH_OPTIONS, TMDB_MOVIE_LISTS } from '../../server/constants/movies.js';

// 영화 리스트
export const fetchMovies = async (url) => {
  try {
    const response = await fetch(url, FETCH_OPTIONS);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Failed to fetch movies!');
  }
};

export const fetchNowPlayingMovies = async () => {
  return await fetchMovies(TMDB_MOVIE_LISTS.nowPlaying);
};

// 영화 상세 정보
export const fetchMovieDetail = async (movieId) => {
  try {
    const response = await fetch(BASE_URL + movieId, FETCH_OPTIONS);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Failed to fetch movie detail');
  }
};
