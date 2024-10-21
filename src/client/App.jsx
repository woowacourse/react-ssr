import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";
import Footer from "./components/Footer.jsx";
import Modal from "./components/Modal.jsx";
import { fetchMovieDetails } from "../server/api/movies.js";

const App = ({ nowPlayingMovies, movieDetailItem }) => {
  const navigate = useNavigate();

  const [movieDetails, setMovieDetails] = useState(movieDetailItem);

  const handleCloseModal = () => {
    navigate("/");

    setMovieDetails(null);
  };

  const handleMovieClick = async (movieId) => {
    const details = await fetchMovieDetails(movieId);

    setMovieDetails(details);
    navigate(`/detail/${movieId}`);
  };

  return (
    <>
      <Header movie={nowPlayingMovies[0]} />
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className="thumbnail-list">
              <MovieList movies={nowPlayingMovies} handleMovieClick={handleMovieClick} />
            </ul>
          </section>
        </main>
      </div>
      <Footer />
      <Modal movieDetailItem={movieDetails} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default App;
