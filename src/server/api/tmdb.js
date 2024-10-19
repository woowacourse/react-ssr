const BASE_URL = "https://api.themoviedb.org/3/movie";

const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_TOKEN,
  },
};

export const TMDB_MOVIE_LISTS = {
  nowPlaying: BASE_URL + "/now_playing?language=ko-KR&page=1",
};

export const getMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();
  return data.results;
};
