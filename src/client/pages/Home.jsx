import React from 'react';
import MovieItem from '../components/MovieItem';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const { movies } = useOutletContext();

  return (
    <main>
      <section>
        <h2>지금 인기 있는 영화</h2>
        <ul className="thumbnail-list">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieItem movie={movie} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
