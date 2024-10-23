import React from "react";
import MovieItem from "../MovieItem";

const MovieItems = ({ movieItems }) => {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            {movieItems.map((movieItem) => (
              <MovieItem key={movieItem.id} movie={movieItem} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MovieItems;
