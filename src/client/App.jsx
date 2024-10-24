import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../client/pages/MainPage";
import DetailPage from "../client/pages/DetailPage";

function App({ movies, movieDetail }) {
  return (
    <Routes>
      <Route path="/" element={<MainPage movies={movies} />} />
      <Route
        path="/detail/:id"
        element={<DetailPage movies={movies} movieDetail={movieDetail} />}
      />
    </Routes>
  );
}

export default App;
