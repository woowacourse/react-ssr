import React from "react";
import useMovieModal from "../hooks/useMovieModal";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import MovieModal from "./base/MovieModal";

function Main({ movies }) {
  const { isOpen } = useMovieModal();
  return (
    <>
      <Header movie={movies[0]} />
      <Container movies={movies} />
      <Footer />
      {isOpen && <MovieModal />}
    </>
  );
}

export default Main;
