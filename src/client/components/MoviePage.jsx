import MovieItem from "./base/MovieItem";
import React from "react";
import MovieHeader from "./MovieHeader";

function Home({ movies }) {
  return (
    <>
      <MovieHeader firstMovie={movies[0]} />
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
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
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
