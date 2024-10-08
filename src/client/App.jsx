import React from 'react';
import Home from './components/Home';

function App({ movieList }) {
  return (
    <>
      <Home movieList={movieList} />
    </>
  );
}

export default App;
