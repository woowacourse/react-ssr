import React from "react";

import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import MovieDetailModal from "../components/MovieDetailModal";

export default function MovieDetail({ movies, movieDetail }) {
  return (
    <>
      <Header movie={movies[0]} />
      <MovieList movies={movies} />
      <Footer />
      <MovieDetailModal movieDetail={movieDetail} />
    </>
  );
}
