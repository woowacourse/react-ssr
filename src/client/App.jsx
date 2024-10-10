import React from 'react';
import MovieList from './components/MovieList.jsx';

function App({ movieList = [] }) {
  return <MovieList movieList={movieList} />;
}

export default App;
