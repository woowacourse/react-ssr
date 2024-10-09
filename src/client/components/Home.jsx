import React from 'react';
import Header from './Header';
import MovieItem from './MovieItem';

function Home({ movies }) {
  return (
    <div>
      <Header bannerMovie={movies[0]} />
      <div className="container">
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
      </div>
    </div>
  );
}

export default Home;
