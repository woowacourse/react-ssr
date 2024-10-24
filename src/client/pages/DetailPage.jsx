import React, { useState, useEffect } from "react";
import MainPage from "./MainPage.jsx";
import { useParams } from "react-router-dom";
import MovieItemModal from "../components/MovieItemModal.jsx";
import { fetchDetailMovie } from "../../server/apis/movies.js";

function DetailPage({ movies, movieDetail }) {
  const [movieItem, setMovieItem] = useState(movieDetail);
  const movieId = useParams().id;

  useEffect(() => {
    fetchDetailMovie(movieId).then((data) => setMovieItem(data));
  }, [movieId, movieDetail]);

  return (
    <>
      <MainPage movies={movies} />
      {movieItem && <MovieItemModal movieDetail={movieItem} />}
    </>
  );
}

export default DetailPage;
