import React from "react";

import MovieItems from "../components/MovieItems";
import TopRatedMovie from "../components/TopRatedMovie";
import getTopRateMovie from "../utils/getTopRateMovie";

const Home = ({ movieItems }) => {
  return (
    <>
      <TopRatedMovie movie={getTopRateMovie(movieItems)} />
      <MovieItems movieItems={movieItems} />
    </>
  );
};

export default Home;
