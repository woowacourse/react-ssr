import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import MovieItemModal from "./components/MovieItemModal";

function App({ movies, movieDetail }) {
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleCloseModal = () => {
    navigate("/");
  };

  return (
    <div id="wrap">
      <Header movie={movies[0]} onMovieClick={handleMovieClick} />
      <Routes>
        <Route path="/" element={<Container movies={movies} onMovieClick={handleMovieClick} />} />
        <Route
          path="/detail/:id"
          element={<MovieItemModal movieDetail={movieDetail} onClose={handleCloseModal} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
