import App from '../../client/App';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { fetchMovies } from '../apis/fetch';
import { TMDB_MOVIE_LISTS } from '../apis/url';

const router = Router();

router.use('/', async (_, res) => {
  const popularMovies = await fetchMovies(TMDB_MOVIE_LISTS.POPULAR);

  const renderedApp = renderToString(<App movies={popularMovies} />);

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const filledTemplate = template
    .replace(
      '<!--${INIT_DATA_AREA}-->',
      /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(popularMovies)}
        };
      </script>
    `
    )
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);

  res.send(filledTemplate);
});

export default router;
