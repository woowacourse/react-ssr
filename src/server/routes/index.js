import App from '../../client/App';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { Router } from 'express';
import { renderToString } from 'react-dom/server';

import fetchMovies from '../apis/movies';

const router = Router();

router.use('/', async (_, res) => {
  const data = await fetchMovies.popular();
  const movies = data.results;

  const renderedApp = renderToString(<App movies={movies} />);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `;

  res.send(
    template
      .replace('<!--${INIT_DATA_AREA}-->', initData)
      .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
  );
});

export default router;
