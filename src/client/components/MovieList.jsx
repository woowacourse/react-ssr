import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  const handleItemClick = (id) => {
    console.log("Movie clicked:", id);
  };

  return (
    <>
      {movies.map(({ id, title, vote_average, poster_path }) => (
        <li key={id}>
          <MovieItem
            posterUrl={poster_path}
            title={title}
            voteAverage={vote_average}
            handleClick={() => handleItemClick(id)}
          />
        </li>
      ))}
    </>
  );
};

export default MovieList;
