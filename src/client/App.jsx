import React from "react";
import Home from "./components/Home";

function App({ popularMovies }) {
  return (
    <div>
      <Home popularMovie={popularMovies[0]} />
    </div>
  );
}

export default App;
