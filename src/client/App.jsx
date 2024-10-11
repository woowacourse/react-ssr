import React from "react";
import MoviePage from "./components/MoviePage";
import Footer from "./components/Footer";

function App() {
  const movies = window.__INITIAL_DATA__;

  return (
    <div>
      <MoviePage movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
