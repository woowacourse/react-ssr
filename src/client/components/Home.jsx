import React from "react";
import MovieList from "./MovieList";
import Footer from "./Footer";
import Header from "./Header";

function Home({ popularMovies }) {
  return (
    <>
      <Header bestMovie={popularMovies[0]} />
      <MovieList movieList={popularMovies} />
      <Footer />
    </>
  );
}

export default Home;
