import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

export default function App({ movies }) {
  return (
    <Routes>
      <Route path="/" element={<Home movies={movies} />} />
      {/* <Route path="/detail/:id" element={<MovieDetail movies={movies} />} /> */}
    </Routes>
  );
}
