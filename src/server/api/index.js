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
  const data = await fetchWithHeader(`${BASE_URL}/popular?language=ko-KR&page=1`);

  return data.results;
};

export const getMovieDetail = async (movieId) => {
  const data = await fetchWithHeader(`${BASE_URL}/${movieId}?language=ko-KR`);

  return {
    title: data.title,
    thumbnail: data.poster_path,
    releaseYear: data.release_date.split("-")[0],
    genres: data.genres.map(({ name }) => name),
    rate: data.vote_average.toFixed(1),
    description: data.overview,
  };
};
