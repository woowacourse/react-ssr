import React, { useEffect } from "react";
import useMovieModal from "./hooks/useMovieModal";
import MovieModal from "./components/MovieModal";
import { useParams } from "react-router-dom";
import MainPage from "./MainPage";

function MainPageWithModal({ movies }) {
  const { id } = useParams();
  const { isOpen, updateMovieDetail, closeModal, openModal } = useMovieModal();

  useEffect(() => {
    if (id === undefined) {
      closeModal();
      return;
    }

    (async () => {
      updateMovieDetail(id);
    })();
    openModal();
  }, [id]);

  return (
    <>
      <MainPage movies={movies} />
      {isOpen && id && <MovieModal />}
    </>
  );
}

export default MainPageWithModal;
