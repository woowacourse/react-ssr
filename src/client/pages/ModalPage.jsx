import React from "react";

import MainPage from "./MainPage";
import MovieModal from "../components/MovieModal";

const ModalPage = ({ movies, movieDetailItem }) => {
  console.log("modalPage: ", movieDetailItem);

  return (
    <>
      <MainPage movies={movies} />
      <MovieModal movieDetailItem={movieDetailItem} />
    </>
  );
};

export default ModalPage;
