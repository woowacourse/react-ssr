import React from "react";
import MovieItems from "./components/MovieItems";
import TopRatedMovie from "./components/TopRatedMovie";

const getTopRateMovie = (movies) => {
  const topRateMovie = movies.reduce((highest, movie) => {
    return movie.vote_average > highest.vote_average ? movie : highest;
  }, movies[0]);

  return topRateMovie;
};

function App({ movieItems }) {
  return (
    <div id="wrap">
      <TopRatedMovie movie={getTopRateMovie(movieItems)} />
      <MovieItems movieItems={movieItems} />
    </div>
  );
}

export default App;
