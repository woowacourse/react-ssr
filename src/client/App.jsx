import React from "react";

import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({ movies }) {
  return (
    <div id="wrap">
      <Header bestMovie={movies[0]} />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
