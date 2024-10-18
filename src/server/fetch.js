import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL } from "./constants";
export const fetchMovies = async (url) => {
  try {
    const response = await fetch(url, FETCH_OPTIONS);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('TMDB API 요청 실패:', error);
    return [];
  }
};

export const fetchMovieDetail = async (movieId) => {
  try {
    const response = await fetch(`${TMDB_MOVIE_DETAIL_URL}${movieId}?language=ko-KR`, FETCH_OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('TMDB API 상세 정보 요청 실패:', error);
    return null;
  }
};