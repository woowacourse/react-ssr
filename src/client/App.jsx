import React from "react";
import Home from "./components/Home";
import BestMovieSection from "./components/BestMovieSection";
import Footer from "./components/Footer";

function App({ movies, bestMovie }) {
  return (
    <>
      <BestMovieSection bestMovie={bestMovie} />
      <Home movies={movies} />
      <Footer /> 
    </>
  );
}

export default App;
