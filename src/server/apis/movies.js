import { round } from "../../client/utils.js";
import { TMDB_API_URL, TMDB_RESOURCE, FETCH_OPTIONS } from "./endpoints.js";

async function fetchMovieList(listType) {
  const fetchURL =
    TMDB_API_URL.MOVIE_LISTS[listType] ?? TMDB_API_URL.MOVIE_LISTS.NOW_PLAYING;
  const response = await fetch(fetchURL, FETCH_OPTIONS);

  return await response.json();
}

export async function fetchNowPlayingMovieList() {
  const movieListData = await fetchMovieList("NOW_PLAYING");

  return movieListData.results.map(
    ({ id, title, backdrop_path, poster_path, vote_average }) => {
      return {
        id,
        title,
        backdropPath: `${TMDB_RESOURCE.IMAGE.BANNER_URL}${backdrop_path}`,
        posterPath: `${TMDB_RESOURCE.IMAGE.THUMBNAIL_URL}${poster_path}`,
        rate: round(vote_average, 1),
      };
    }
  );
}

async function fetchMovieDetail({ movieId }) {
  const fetchURL = TMDB_API_URL.MOVIE_DETAIL(movieId);
  const response = await fetch(fetchURL, FETCH_OPTIONS);

  return await response.json();
}

export async function fetchMovieDetailData({ movieId }) {
  const movieDetailData = await fetchMovieDetail({ movieId });
  const { title, poster_path, release_date, genres, vote_average, overview } =
    movieDetailData;

  return {
    title,
    bannerUrl: poster_path,
    releaseYear: release_date.substr(0, 4),
    genres: genres.map(({ name }) => name),
    rate: round(vote_average, 1),
    description: overview,
  };
}
