import App from '../../client/App';
import React from 'react';
import { Router } from 'express';
import fs from 'fs';
import getMovies from '../../client/apis/getMovies';
import path from 'path';
import { renderToString } from 'react-dom/server';

const router = Router();

router.use('*', async (_, res) => {
  const movies = await getMovies.nowPlaying();
  const renderedApp = renderToString(<App movies={movies} />);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const result = template
    .replace(
      '<!--aaaaa-->',
      /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `
    )
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);

  res.send(result);
});

export default router;
