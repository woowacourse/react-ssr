import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailModal = () => {
  const { movieId } = useParams();

  return <div>MovieDetailModal : {movieId}</div>;
};

export default MovieDetailModal;
