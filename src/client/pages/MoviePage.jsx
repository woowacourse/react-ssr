import MovieItem from "../components/base/MovieItem";
import React, { useEffect, useState } from "react";
import MovieHeader from "../components/MovieHeader";
import { fetchPopularMovies } from "../api";

function MoviePage({ initialData }) {
  const [movies, setMovies] = useState(initialData.movies || []);

  const loadMovies = async () => {
    const data = await fetchPopularMovies();

    setMovies(data);
  };

  useEffect(() => {
    if (initialData.movies) {
      setMovies(initialData.movies);
    } else {
      loadMovies();
    }

    delete initialData.movies;
  }, []);

  return (
    <>
      {movies && <MovieHeader firstMovie={movies[0]} />}
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className="thumbnail-list">
              {movies &&
                movies.map(({ id, title, vote_average, poster_path }) => (
                  <li key={id}>
                    <MovieItem
                      id={id}
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

export default MoviePage;
