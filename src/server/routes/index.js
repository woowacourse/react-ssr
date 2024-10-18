import Header from '../../client/components/Header';
import Home from '../../client/pages/Home';

import fs from 'fs';
import path from 'path';

import React from 'react';
import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { getMovies } from '../apis/movie.js';
import { TMDB_MOVIE_LISTS } from '../constants/index.js';

const router = Router();

router.get('*', async (req, res) => {
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const movies = await getMovies(TMDB_MOVIE_LISTS.nowPlaying);

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <Header bestMovie={movies[0]} />
      <Home movies={movies} />
    </StaticRouter>
  );

  const initData = template.replace(
    '<!--${INIT_DATA_AREA}-->',
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = { movies: ${JSON.stringify(movies)}}
    </script>
    `
  );

  res.send(initData.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
