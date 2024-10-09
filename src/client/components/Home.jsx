import React from "react";
import MovieItem from "./MovieItem";

function Home({ movies }) {
  return (
    <div>
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
    </div>
  );
}

export default Home;
