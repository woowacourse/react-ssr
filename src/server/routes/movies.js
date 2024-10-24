import App from '../../client/App';
import fs from 'fs';
import path from 'path';

import React from 'react';
import {Router} from 'express';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import {getMovies} from '../services/movieService';

const router = Router();

router.use('/', async (req, res) => {
  const movies = await getMovies('now_playing');

  const renderedApp = renderToString(
    <StaticRouter location={'/'}>
      <App movies={movies} movieDetail={null} />
    </StaticRouter>,
  );

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

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

  res.send(initData.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
