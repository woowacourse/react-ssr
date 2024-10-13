import React from 'react';
import MovieItem from './MovieItem';
import Header from './Header';
import Footer from './Footer';

function Home({ movies }) {
  return (
    <>
      <Header movie={movies[0]} />
      <div className='container'>
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className='thumbnail-list'>
              {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
