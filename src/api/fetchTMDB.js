export const fetchTMDB = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.TMDB_ACCESS_TOKEN,
  },
};
