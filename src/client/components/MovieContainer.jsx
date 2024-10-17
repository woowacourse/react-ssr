import MovieThumbnail from './MovieThumbnail';
import React from 'react';

export default function MovieContainer({ movies, movieClickHandler }) {
  return (
    <div className='container'>
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className='thumbnail-list'>
            {movies.map(movie => {
              return (
                <MovieThumbnail
                  key={movie.id}
                  movie={movie}
                  clickHandler={movieClickHandler}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
