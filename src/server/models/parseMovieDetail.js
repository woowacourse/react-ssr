import { TMDB_ORIGINAL_URL } from "../constants";

export const parseMovieDetail = (movieDetail) => {
  return {
    movieId: movieDetail.id,
    title: movieDetail.title,
    bannerUrl: TMDB_ORIGINAL_URL + movieDetail.poster_path,
    releaseYear: movieDetail.release_date?.split("-")[0],
    description: movieDetail.overview,
    genres: movieDetail?.genres?.map(({ name }) => name)?.join(", "),
    rate: Math.round(movieDetail.vote_average, 1),
  };
};
