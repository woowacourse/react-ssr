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
