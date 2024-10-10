import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App({ movieList }) {
  return (
    <div id='wrap'>
      <Header bestMovie={movieList[0]} />
      <Home movieList={movieList} />
      <Footer />
    </div>
  );
}

export default App;
