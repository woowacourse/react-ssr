const BASE_URL = "https://api.themoviedb.org/3/movie";
const POPULAR = BASE_URL + "/popular?language=ko-KR&page=1";
const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_TOKEN,
  },
};

export const fetchMovies = async () => {
  const response = await fetch(POPULAR, FETCH_OPTIONS);
  const results = await response.json().then((data) => data.results);

  return results;
};

export const fetchMovieDetail = async (id) => {
  const params = new URLSearchParams({
    language: "ko-KR",
  });
  const url = `${BASE_URL}/${id}?${params}`;

  const response = await fetch(url, FETCH_OPTIONS);
  const results = await response.json().then((data) => data);

  return results;
};
