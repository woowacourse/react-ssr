import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from '../constants/movies.js';

const fetchMovies = async (url) => {
  try {
    const response = await fetch(url, FETCH_OPTIONS);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Failed to fetch movies!');
  }
};

const fetchNowPlayingMovies = async () => {
  return await fetchMovies(TMDB_MOVIE_LISTS.nowPlaying);
};

export default fetchNowPlayingMovies;
