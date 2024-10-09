import React from 'react';

import Header from './components/Header.jsx';

function App({ movies }) {
  const bestMovieItem = movies[0];

  return (
    <div id='wrap'>
      <Header bestMovieItem={bestMovieItem} />
    </div>
  );
}

export default App;
