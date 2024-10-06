import React from 'react';
import Home from './components/Home';

function App({ movies }) {
  return (
    <div>
      <Home movieList={movies} />
    </div>
  );
}

export default App;
