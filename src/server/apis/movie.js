import { FETCH_OPTIONS } from '../constants/index.js';

export const getMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};

export const getMovieDetail = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data;
};
