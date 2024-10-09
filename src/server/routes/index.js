import React from 'react';
import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import { fetchMovies } from '../api/movie.js';
import { TMDB_MOVIE_LISTS } from '../constants/constant.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', async (_, res) => {
  try {
    const moviesData = await fetchMovies(TMDB_MOVIE_LISTS.popular);
    const movies = moviesData.results;
    const templatePath = path.join(__dirname, '../../../views', 'index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const renderedApp = renderToString(<App movies={movies} />);

    const initData = template.replace(
      '<!--${INIT_DATA_AREA}-->',
      /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(movies)}
        }
      </script>
      `,
    );

    const renderedHTML = initData.replace('<div id="root"></div>', renderedApp);

    res.send(renderedHTML);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Error rendering the page');
  }
});

export default router;
