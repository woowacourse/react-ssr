import React from "react";
import MovieList from "./MovieList";

function Home({ movies }) {
  return <MovieList movies={movies} />;
}

export default Home;
