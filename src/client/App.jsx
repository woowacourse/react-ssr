import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetailModal from "./components/MovieDetailModal";
import MainLayout from "./MainLayout";

const App = ({ movies, movieDetail }) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout movies={movies} />}>
        <Route
          path="detail/:id"
          element={<MovieDetailModal movieDetail={movieDetail} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
