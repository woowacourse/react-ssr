import { Router } from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import fetchNowPlayingMovies from '../apis/movies.js';

const router = Router();

router.use('/', async (_, res) => {
  const nowPlayingMovies = await fetchNowPlayingMovies();

  const templatePath = path.resolve(__dirname, 'index.html');
  const renderedApp = renderToString(<App movies={nowPlayingMovies} />);

  const template = fs.readFileSync(templatePath, 'utf-8');

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(nowPlayingMovies)}
      }
    </script>
  `;

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>${initData}`));
});

export default router;
