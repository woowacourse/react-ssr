import React from 'react';
import Header from './components/Header';
import HomePage from './components/Page';

function App({movies}) {
  return (
    <div>
      <Header movies={movies} />
      <HomePage movies={movies} />
    </div>
  );
}

export default App;
