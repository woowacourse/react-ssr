import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import { fetchMovies } from '../../api/movies.ts';

const router = Router();

router.use('/', async (_, res) => {
  const popularMovies = await fetchMovies();

  const renderedApp = renderToString(<App movies={popularMovies} />);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(
    template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>
      <script>window.__INITIAL_DATA__ = ${JSON.stringify({
        popularMovies,
      })}</script>`
    )
  );
});

export default router;
