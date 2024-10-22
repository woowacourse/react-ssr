import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from '../../client/App';
import fetchMovies from '@shared/apis/movies';

const loadTemplate = () => {
  const templatePath = path.resolve(__dirname, 'index.html');
  return fs.readFileSync(templatePath, 'utf8');
};

export const renderHome = async (location) => {
  const { results: movies } = await fetchMovies.popular();

  const renderedApp = renderToString(
    <StaticRouter location={location}>
      <App movies={movies} movieDetail={null} />
    </StaticRouter>
  );

  const template = loadTemplate();

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `;

  return template
    .replace('<!--${INIT_DATA_AREA}-->', initData)
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);
};

export const renderMovieDetail = async (location, id) => {
  const { results: movies } = await fetchMovies.popular();
  const movieDetail = await fetchMovies.detail(id);

  const renderedApp = renderToString(
    <StaticRouter location={location}>
      <App movies={movies} movieDetail={movieDetail} />
    </StaticRouter>
  );

  const template = loadTemplate();

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)},
        movieDetail: ${JSON.stringify(movieDetail)}
      }
    </script>
  `;

  return template
    .replace('<!--${INIT_DATA_AREA}-->', initData)
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);
};
