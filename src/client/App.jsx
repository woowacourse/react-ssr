import React from "react";
import Home from "./components/Home";
import BestMovieSection from "./components/BestMovieSection";
import Footer from "./components/Footer";

function App({ movies, bestMovie }) {
  return (
    <div >
      <BestMovieSection bestMovie={bestMovie} />
      <Home movies={movies} />
      <Footer /> 
    </div>
  );
}

export default App;
