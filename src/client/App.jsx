import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

function App({ movies }) {
  const bestMovie = movies[0];

  return (
    <div id="wrap">
      <Header bestMovie={bestMovie} />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
