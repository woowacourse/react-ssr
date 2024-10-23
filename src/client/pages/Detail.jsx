import React from "react";
import MovieList from "../components/MovieList";
import MovieDetailModal from "../components/MovieDetailModal";

const DetailPage = ({ movieList, detailMovie }) => {
  return (
    <>
      <MovieList movieList={movieList} />
      <MovieDetailModal detailMovie={detailMovie} />
    </>
  );
};

export default DetailPage;
