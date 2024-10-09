import React from "react";
import Home from "./components/Home";
import BestMovieSection from "./components/BestMovieSection";

function App({ movies }) {
  return (
    <div>
      <div id="wrap">
        <Home movies={movies} />
      </div>
    </div>
  );
}

export default App;
