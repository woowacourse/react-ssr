import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({movies}) =>{
  return(
    <ul className="thumbnail-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          rate={movie.vote_average}
          title={movie.title}
          thumbnailUrl={movie.poster_path}
        />
      ))}
  </ul>
  )
};

export default MovieList;