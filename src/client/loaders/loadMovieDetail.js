import {
  FETCH_OPTIONS,
  TMDB_MOVIE_DETAIL_URL,
} from "../../common/constants/api";

export const loadMovieDetail = async ({ params }) => {
  const url = `${TMDB_MOVIE_DETAIL_URL}${params.id}`;
  const urlParams = new URLSearchParams({
    language: "ko-KR",
  });
  const response = await fetch(url + "?" + urlParams, FETCH_OPTIONS);

  return await response.json();
};
