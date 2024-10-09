import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import React from 'react';

export const getRenderedMovies = (movies, movieListType) => {
  return renderToString(<App movies={movies} movieListType={movieListType} />);
};

export const getRenderedInitData = (movies) => {
  return `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `;
};
