import React from "react";
import Home from "./components/Home";

function App({ popularMovies }) {
  return (
    <div>
      <Home popularMovies={popularMovies} />
    </div>
  );
}

export default App;
