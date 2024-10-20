import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(({ id, title, vote_average, poster_path }) => (
        <li key={id}>
          <MovieItem
            id={id}
            posterUrl={poster_path}
            title={title}
            voteAverage={vote_average}
          />
        </li>
      ))}
    </>
  );
};

export default MovieList;
