import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

function App({ popularMovies }) {
  return (
    <>
      <Header bestMovie={popularMovies[0]} />
      <MovieList movieList={popularMovies} />
      <Footer />
    </>
  );
}

export default App;
