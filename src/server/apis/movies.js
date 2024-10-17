import {
  TMDB_BANNER_URL,
  TMDB_MOVIE_DETAIL_URL,
  TMDB_MOVIE_LISTS,
  TMDB_THUMBNAIL_URL,
} from './url.js';

import { addQueryParams } from '../utils/query.js';

const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
};

const movieFetcher = async (url) => {
  const urlWithQuery = addQueryParams(url, { language: 'ko-KR' });
  const response = await fetch(urlWithQuery, FETCH_OPTIONS);

  return await response.json();
};

export async function fetchNowPlayingMovies() {
  const data = await movieFetcher(TMDB_MOVIE_LISTS['nowPlaying']);

  return data.results.map(({ id, title, vote_average, backdrop_path, poster_path }) => ({
    id,
    title,
    rate: vote_average.toFixed(1),
    backdropUrl: `${TMDB_BANNER_URL}/${backdrop_path}`,
    thumbnailUrl: `${TMDB_THUMBNAIL_URL}${poster_path}`,
  }));
}

export async function fetchMovieDetail(movieId) {
  const movieDetailUrl = `${TMDB_MOVIE_DETAIL_URL}${movieId}`;

  const { title, vote_average, backdrop_path, poster_path, genres, release_date, overview } =
    await movieFetcher(movieDetailUrl);

  const releaseYear = release_date.slice(0, 4);

  return {
    title,
    releaseYear,
    rate: vote_average.toFixed(1),
    thumbnailUrl: `${TMDB_THUMBNAIL_URL}${poster_path}`,
    genres: genres.map((genre) => genre.name).join(', '),
    description: overview,
  };
}
