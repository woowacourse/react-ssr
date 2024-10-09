import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';

function App({ movies }) {
  return (
    <>
      <Home movies={movies} />
      <Footer />
    </>
  );
}

export default App;
