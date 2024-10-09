import React from 'react';

import Header from './components/Header.jsx';
import Container from './components/Container.jsx';

function App({ movies }) {
  const bestMovieItem = movies[0];

  return (
    <div id='wrap'>
      <Header bestMovieItem={bestMovieItem} />
      <Container movieItems={movies} />
    </div>
  );
}

export default App;
