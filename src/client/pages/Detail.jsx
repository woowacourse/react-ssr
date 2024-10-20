import React from "react";
import MovieList from "../components/MovieList";
import MovieDetailModal from "../components/MovieDetailModal";
import { useModal } from "../context/ModalContext";

const DetailPage = ({ movieList, detailMovie }) => {
  const { isModalOpen } = useModal();

  return (
    <>
      <MovieList movieList={movieList} />
      {isModalOpen && <MovieDetailModal detailMovie={detailMovie} />}
    </>
  );
};

export default DetailPage;
