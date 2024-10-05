import { TMDB_MOVIE_LISTS } from './url.js';

const fetchMovieList = async (type) => {
  const response = await fetch(TMDB_MOVIE_LISTS[type || 'nowPlaying'], {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  return await response.json();
};

export async function fetchNowPlayingMovies() {
  return await fetchMovieList('nowPlaying');
}
