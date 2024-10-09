export const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_TOKEN,
  },
};
