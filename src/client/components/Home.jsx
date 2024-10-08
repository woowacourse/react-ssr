import React from "react";
import MovieItem from "./base/MovieItem";

function Home({ movies }) {
  return (
    <div>
      {movies.length > 0 ? (
        <ul className="thumbnail-list">
          {movies.map(({ id, title, vote_average, poster_path }) => (
            <li key={id}>
              <MovieItem
                rate={vote_average}
                title={title}
                thumbnailUrl={poster_path}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>영화가 없어요</p>
      )}
    </div>
  );
}

export default Home;
