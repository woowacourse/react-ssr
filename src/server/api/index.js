import { BASE_URL } from "./endpoint";

const fetchWithHeader = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  return await response.json();
};

export const getPopularMovies = async () => {
  const data = await fetchWithHeader(`${BASE_URL}/popular`);

  return data.results;
};
