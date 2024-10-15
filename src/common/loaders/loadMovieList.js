import getMovieList from "../apis/getMovieList";

const loadMovieList = async () => {
  const { results: movies } = await getMovieList();

  return movies;
};

export default loadMovieList;
