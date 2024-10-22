import React from "react";
import Home from "./components/Pages/Home/Home";
import Detail from "./components/Pages/Detail/Detail";
import { Route, Routes } from "react-router-dom";

function App({ initialMovies, initialMovie }) {
  return (
    <Routes>
      <Route path="/" element={<Home movies={initialMovies} />} />
      <Route
        path="/detail/:id"
        element={<Detail movies={initialMovies} movie={initialMovie} />}
      />
    </Routes>
  );
}

export default App;
