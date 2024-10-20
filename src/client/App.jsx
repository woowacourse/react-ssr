import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import ModalPage from "./pages/ModalPage";

function App({ movies, movieDetailItem }) {
  return (
    <Routes>
      <Route element={<Layout movies={movies} />}>
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
      </Route>
    </Routes>
  );
}

export default App;
