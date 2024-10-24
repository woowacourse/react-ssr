import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./components/Detail";

const App = ({ movies, movieDetail }) => {
  return (
    <Routes>
      <Route path="/" element={<Home movies={movies} />} />
      <Route
        path="/detail/:id"
        element={<Detail movies={movies} movieDetail={movieDetail} />}
      />
    </Routes>
  );
};

export default App;
