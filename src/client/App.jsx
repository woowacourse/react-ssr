import React from 'react';
import Home from './components/Home';

function App({ movies }) {
  return (
    <div>
      <Home movies={movies} />
    </div>
  );
}

export default App;
