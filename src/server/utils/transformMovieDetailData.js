import { round } from "@client/utils";
import { TMDB_ORIGINAL_URL } from "../apis/endpoints";

const transformMovieDetailData = data => ({
  title: data.title,
  bannerUrl: TMDB_ORIGINAL_URL + data.poster_path,
  releaseYear: data.release_date.split("-")[0],
  description: data.overview,
  genres: data.genres.map(({ name }) => name),
  rate: round(data.vote_average, 1),
});

export default transformMovieDetailData;
