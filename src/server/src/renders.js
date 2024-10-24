import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import Main from '../../client/components/Main';
import Footer from '../../client/components/Footer';

export const getRenderedMain = (movies) => {
  return renderToString(
    <StaticRouter location={'/'}>
      <div>
        <Main movies={movies} />
        <Footer />
      </div>
    </StaticRouter>
  );
};

export const getRenderedMovieDetail = (movies, movieDetail) => {
  return renderToString(
    <StaticRouter location={`/detail/${movieDetail.id}`}>
      <div>
        <Main movies={movies} />
        <Footer />
      </div>
    </StaticRouter>
  );
};

export const getRenderedInitData = (movies, movieDetail) => {
  return `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
        ${movieDetail ? `movieDetail: ${JSON.stringify(movieDetail)}` : ''}
      }
    </script>
  `;
};
