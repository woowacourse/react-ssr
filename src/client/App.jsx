import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Page/Home";
import MovieDetailModal from "./components/Modal/MovieDetailModal";

function App({ movies, movieDetail }) {
  const location = useLocation();
  const state = location.state?.backgroundLocation || { pathname: "/" };

  const isDetailPage = location.pathname.startsWith("/detail/");

  return (
    <>
      <Routes location={isDetailPage ? state : location}>
        <Route path="/" element={<Home bestMovie={movies[0]} movies={movies} />} />
        <Route path="*" element={<p>404 - Page Not Found</p>} />
      </Routes>

      {isDetailPage && (
        <MovieDetailModal movie={movieDetail} />
      )}
    </>
  );
}

export default App;