import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

const App = () => {
  const data = window.__INITIAL_DATA__;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            popularMovies={data.movies}
            bestMovieItem={data.movies[0]}
          />
        }
      />
      <Route path="/detail/:movieId" element={<MovieDetailPage />} />
    </Routes>
  );
};

export default App;
