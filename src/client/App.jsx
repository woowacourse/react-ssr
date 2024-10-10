import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = ({ movies, movieListType }) => {
  return (
    <div>
      <Header movie={movies[0]} />
      <Main movies={movies} movieListType={movieListType} />
      <Footer />
    </div>
  );
};

export default App;
