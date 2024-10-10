import React from 'react';

import Header from './components/Header';
import Home from './components/Home';

function App({ movies }) {
  return (
    <div>
      <Header bestMovie={movies[0]} />
      <div className="container">
        <Home movies={movies} />
      </div>
    </div>
  );
}

export default App;
