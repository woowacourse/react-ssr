import { FETCH_OPTIONS } from "./endpoints.js";

export const fetchMovieList = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};
