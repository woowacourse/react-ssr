import { FETCH_OPTIONS } from './constants';

export const fetchMovieList = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};

export const fetchMovieDetail = async (url) => {
  const URL = url + '?language=ko-KR';
  const data = await fetch(URL, FETCH_OPTIONS);
  return data.json();
};
