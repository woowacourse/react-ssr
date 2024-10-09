import App from '../../client/App';
import fs from 'fs';
import path from 'path';
// import { fileURLToPath } from 'url';

import React from 'react';
import { Router } from 'express';
import { renderToString } from 'react-dom/server';

import fetchMovies from '../apis/movies';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const router = Router();

router.use('/', async (_, res) => {
  const data = await fetchMovies.popular();
  const movies = data.results;

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `;

  const renderedApp = renderToString(<App movies={movies} />);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(
    template
      .replace('<!--${INIT_DATA_AREA}-->', initData)
      .replace('<!--${MOVIE_ITEMS_PLACEHOLDER}-->', renderedApp)
  );
});

export default router;
