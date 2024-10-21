import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import ErrorPage from "./pages/ErrorPage";

export default function App({ movies, initialMovieDetail }) {
  return (
    <Routes>
      <Route path="/" element={<Home movies={movies} />} />
      <Route
        path="/detail/:id"
        element={
          <MovieDetail
            movies={movies}
            initialMovieDetail={initialMovieDetail}
          />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
