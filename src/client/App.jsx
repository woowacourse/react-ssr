import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import BestMovieSection from "./components/BestMovieSection";
import { Route, Routes } from "react-router-dom";

function App({ movies, bestMovie, movieDetail }) {
  return (
    <>
      <BestMovieSection bestMovie={bestMovie} />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route
          path="/detail/:id"
          element={<Modal movieDetail={movieDetail} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
