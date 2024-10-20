import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

export default function App({ movies, movieDetail }) {
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
