import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL } from "../../constant/url";
import { useState } from "react";

const useModal = () => {
  const [movieDetail, setMovieDetail] = useState(movieDetailAtom);

  const loadMovieDetail = async (id) => {
    const url = TMDB_MOVIE_DETAIL_URL + id;
    const params = new URLSearchParams({
      language: "ko-KR",
    });
    const response = await fetch(url + "?" + params, FETCH_OPTIONS);

    return await response.json();
  };

  const updateMovieDetail = async (id) => {
    const movieDetail = await loadMovieDetail(id);

    setMovieDetail({
      title: movieDetail.title,
      bannerUrl: TMDB_ORIGINAL_URL + movieDetail.poster_path,
      releaseYear: movieDetail.release_date.split("-")[0],
      description: movieDetail.overview,
      genres: movieDetail.genres.map(({ name }) => name),
      rate: round(movieDetail.vote_average, 1),
    });
  };

  return {
    movieId,
    setMovieId,
    modalActivated,
    setModalActivated,
    toggleModal,
    updateMovieDetail,

    movieDetail,
  };
};

export default useModal;
