import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import DetailPage from "./DetailPage";

const App = ({ movies, movieDetail }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage movies={movies} />} />
      <Route
        path={"/detail/:id"}
        element={<DetailPage movieDetail={movieDetail} movies={movies} />}
      />
    </Routes>
  );
};

export default App;
