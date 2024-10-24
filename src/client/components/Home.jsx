import React from 'react';
import MovieItem from './MovieItem';

function Home({ movieList }) {
  return (
    <div className='container'>
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className='thumbnail-list'>
            {movieList.map(({ id, title, poster_path, vote_average }) => (
              <li key={id}>
                <MovieItem
                  id={id}
                  title={title}
                  thumbnailUrl={poster_path}
                  rate={vote_average}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;
