import React, { useEffect, useState } from "react";
import Home from "./Home";
import Modal from "../components/base/Modal";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../apis/fetchMovies";

function MovieDetail({ movies, movieDetail }) {
  const { id } = useParams();
  const [movieDetailState, setMovieDetailState] = useState(movieDetail);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchMovieDetails(id);
        setMovieDetailState(fetchedData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Home movies={movies} />
      {movieDetailState && <Modal movieDetail={movieDetailState} />}
    </div>
  );
}

export default MovieDetail;
