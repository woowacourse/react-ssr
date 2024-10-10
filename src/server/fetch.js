import { FETCH_OPTIONS } from "./constants";
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
