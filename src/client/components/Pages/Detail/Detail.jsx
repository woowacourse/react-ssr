import React from "react";
import Home from "../Home/Home";
import Modal from "./Modal";

const Detail = ({ movies, movie }) => {
  return (
    <>
      <Home movies={movies} />
      <Modal movie={movie} />
    </>
  );
};

export default Detail;
