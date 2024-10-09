import React from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

function Home({ movies }) {
  return (
    <div>
      <Header movie={movies[0]} />
      <Container movies={movies} />
      <Footer />
    </div>
  );
}

export default Home;
