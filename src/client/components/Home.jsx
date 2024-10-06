import React from 'react';
import MovieItem from './MovieItem.jsx';

function Home({ movieList }) {
  return (
    <div className='thumbnail-list'>
      {movieList.map((movie, index) => {
        return <MovieItem movie={movie} key={index} />;
      })}
    </div>
  );
}

export default Home;
