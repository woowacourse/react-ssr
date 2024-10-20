import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import MovieDetailModal from "./components/MovieDetailModal";

function App({ popularMovies, detailMovie }) {
  console.log("detailMovie", detailMovie);
  return (
    <>
      <Header bestMovie={popularMovies[0]} />
      <MovieList movieList={popularMovies} />
      <MovieDetailModal detailMovie={detailMovie} />
      <Footer />
    </>
  );
}

export default App;
