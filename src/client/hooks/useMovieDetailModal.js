import { useParams } from "react-router-dom";
import { TMDB_MOVIE_DETAIL_URL, TMDB_ORIGINAL_URL } from "../../constants/tmdb";
import { FETCH_OPTIONS } from "../../constants/fetch";
import { useEffect, useState } from "react";
import round from "../../utils/round";

const useMovieDetailModal = () => {
  const { id } = useParams();

  const [modalActivated, setModalActivated] = useState(true);
  const [movieDetail, setMovieDetail] = useState();

  const toggleModal = () => {
    setModalActivated(!modalActivated);
  };

  const loadMovieDetail = async () => {
    const url = TMDB_MOVIE_DETAIL_URL + id;
    const params = new URLSearchParams({
      language: "ko-KR",
    });
    const response = await fetch(url + "?" + params, FETCH_OPTIONS);

    return await response.json();
  };

  const updateMovieDetail = async (id) => {
    const movieDetail = await loadMovieDetail(id);
    console.log(movieDetail);

    setMovieDetail({
      title: movieDetail.title,
      bannerUrl: TMDB_ORIGINAL_URL + movieDetail.poster_path,
      releaseYear: movieDetail.release_date.split("-")[0],
      description: movieDetail.overview,
      genres: movieDetail.genres.map(({ name }) => name),
      rate: round(movieDetail.vote_average, 1),
    });
  };

  useEffect(() => {
    updateMovieDetail(id);
  }, [id]);

  return {
    modalActivated,
    toggleModal,
    movieDetail,
  };
};

export default useMovieDetailModal;
