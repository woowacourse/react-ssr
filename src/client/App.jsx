import React from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetails";

function App({ movies, movieDetail }) {
  return (
    <Routes>
      <Route path="/" element={<Home movies={movies} />} />
      <Route
        path="/detail/:id"
        element={<MovieDetail movies={movies} movieDetail={movieDetail} />}
      />
    </Routes>
  );
}

export default App;
