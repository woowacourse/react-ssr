import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ModalPage from "./pages/ModalPage";

function App({ movies, movieDetailItem }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage movies={movies} />}
      />
      <Route
        path="/detail/:id"
        element={
          <ModalPage
            movies={movies}
            movieDetailItem={movieDetailItem}
          />
        }
      />
    </Routes>
  );
}

export default App;
