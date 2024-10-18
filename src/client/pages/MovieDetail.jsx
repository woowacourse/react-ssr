import React from "react";

import MovieItems from "../components/MovieItems";
import TopRatedMovie from "../components/TopRatedMovie";
import getTopRateMovie from "../../utils/getTopRateMovie";
import MovieDetailModal from "../components/MovieDetailModal";

const MovieDetail = ({ movieItems }) => {
  return (
    <>
      <TopRatedMovie movie={getTopRateMovie(movieItems)} />
      <MovieItems movieItems={movieItems} />
      <MovieDetailModal />
    </>
  );
};

export default MovieDetail;
