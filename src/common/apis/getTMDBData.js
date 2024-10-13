const TMDB_FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_ACCESS_TOKEN,
  },
};

export const getTMDBData = async (url) => {
  const response = await fetch(url, TMDB_FETCH_OPTIONS);
  const data = await response.json();

  return data;
};
