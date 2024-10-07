import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';

import { getMovies } from '../apis/movie.js';
import { TMDB_MOVIE_LISTS } from '../constants/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', async (_, res) => {
  const templatePath = path.join(__dirname, '../../../views', 'index.html');

  const movies = await getMovies(TMDB_MOVIE_LISTS.nowPlaying);

  const renderedApp = renderToString(<App movies={movies} />);

  const template = fs.readFileSync(templatePath, 'utf-8');
  // const initData = template.replace(
  //   '<!--${INIT_DATA_AREA}-->',
  //   /*html*/ `
  //   <script>
  //     window.__INITIAL_DATA__ = {
  //       movies: ${JSON.stringify(popularMovies)}
  //     }
  //   </script>
  // `
  // );
  const renderedHTML = template.replace('<!--${APP_AREA}-->', renderedApp);

  res.send(renderedHTML);
});

export default router;
