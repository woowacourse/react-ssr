import { FETCH_OPTIONS } from "../constants";

export const getTMDBData = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data;
};
