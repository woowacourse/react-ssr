import React from "react";

import MovieItems from "../components/MovieItems";
import TopRatedMovie from "../components/TopRatedMovie";
import getTopRateMovie from "../../utils/getTopRateMovie";
import MovieDetailModal from "../components/MovieDetailModal";

const MovieDetail = ({ movieItems, serverMovieDetail }) => {
  return (
    <>
      <TopRatedMovie movie={getTopRateMovie(movieItems)} />
      <MovieItems movieItems={movieItems} />
      <MovieDetailModal serverMovieDetail={serverMovieDetail} />
    </>
  );
};

export default MovieDetail;
