import { TMDB_ORIGINAL_URL } from '../../server/apis/url.js';
import { round } from './round.js';

export const parseMovieDetail = (movieDetail) => {
  return {
    title: movieDetail.title,
    bannerUrl: TMDB_ORIGINAL_URL + movieDetail.poster_path,
    releaseYear: movieDetail.release_date.split('-')[0],
    description: movieDetail.overview,
    genres: movieDetail.genres.map(({ name }) => name),
    rate: round(movieDetail.vote_average, 1),
  };
};
