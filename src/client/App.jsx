import React from 'react';
import MovieListItem from './components/MovieListItem.jsx';
import Header from './components/Header.jsx';

import woowacourseLogo from '@images/woowacourse_logo.png';

function App({ movies }) {
  return (
    <>
      <Header movie={movies[0]} />
      <div className="container">
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
      </div>
      <footer class="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p>
          <img src={woowacourseLogo} width="180" />
        </p>
      </footer>
    </>
  );
}

export default App;
