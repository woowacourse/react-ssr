import React from 'react';

function Home({ movies }) {
  return <div>{movies[0].title}</div>;
}

export default Home;
