import React from "react";

import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Home({ movies }) {
  return (
    <>
      <Header movie={movies[0]} />
      <MovieList movies={movies} />
      <Footer />
    </>
  );
}
