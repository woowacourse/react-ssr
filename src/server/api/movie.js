import { FETCH_OPTIONS } from '../constants/constant';

export const fetchMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  return await response.json();
};
