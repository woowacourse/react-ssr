import React from "react";
import Home from "./components/Home";

function App({ popularMovies }) {
  return <Home popularMovies={popularMovies} />;
}

export default App;
