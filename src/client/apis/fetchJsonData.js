import { FETCH_OPTIONS } from '../constants.js';

const fetchJsonData = async url => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();
  return data;
};

export default fetchJsonData;
