import React from "react";
import MovieList from "../components/MovieList";

const HomePage = ({ movieList }) => {
  return (
    <>
      <MovieList movieList={movieList} />
    </>
  );
};

export default HomePage;
