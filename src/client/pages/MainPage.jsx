import React from 'react';
import MovieListItem from '../components/MovieListItem.jsx';

function MainPage({ movies }) {
  return (
    <main>
      <section>
        <h2>지금 인기 있는 영화</h2>
        <ul className="thumbnail-list">
          {movies.map((movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default MainPage;
