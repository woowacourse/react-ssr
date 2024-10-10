import { TMDB_BANNER_URL, TMDB_MOVIE_LISTS, TMDB_THUMBNAIL_URL } from './url.js';

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
  const data = await fetchMovieList('nowPlaying');

  return data.results.map(({ title, vote_average, backdrop_path, poster_path }) => ({
    title,
    rate: vote_average.toFixed(1),
    backdropUrl: `${TMDB_BANNER_URL}/${backdrop_path}`,
    thumbnailUrl: `${TMDB_THUMBNAIL_URL}${poster_path}`,
  }));
}
