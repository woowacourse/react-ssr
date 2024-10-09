import React from 'react';

import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import Footer from './components/Footer.jsx';

function App({ movies }) {
  const bestMovieItem = movies[0];

  return (
    <div id='wrap'>
      <Header bestMovieItem={bestMovieItem} />
      <Container movieItems={movies} />
      <Footer />
    </div>
  );
}

export default App;
