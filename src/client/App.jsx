import React from 'react';
import Home from './components/Home';

function App({ movies }) {
  return (
    <ul className="thumbnail-list">
      {movies.results.map((movie) => (
        <Home key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default App;
