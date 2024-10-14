import React from "react";
import MovieList from "./components/MovieList";

function App({ movies }) {
  return <MovieList movies={movies} />;
}

export default App;
