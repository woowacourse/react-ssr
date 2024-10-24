import React, { useEffect } from "react";
import MovieModal from "./components/MovieModal";
import { useParams } from "react-router-dom";
import MainPage from "./MainPage";

function MainPageWithModal({ movies, movieDetail }) {
  const { id } = useParams();

  return (
    <>
      <MainPage movies={movies} />
      {id && <MovieModal movieDetail={movieDetail} />}
    </>
  );
}

export default MainPageWithModal;
