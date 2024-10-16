import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            {movies.map((movie) => (
              <MovieItem movie={movie} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MovieList;
