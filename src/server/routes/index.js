import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import fetchNowPlayingMovies from '../apis/movies.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', async (_, res) => {
  const nowPlayingMovies = await fetchNowPlayingMovies();

  const templatePath = path.join(__dirname, '../../../views', 'index.html');
  const renderedApp = renderToString(<App movies={nowPlayingMovies} />);

  const template = fs.readFileSync(templatePath, 'utf-8');

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(nowPlayingMovies)}
      }
    </script>
  `;

  const renderedHTML = template
    .replace('<!--${INIT_DATA_AREA}-->', initData)
    .replace('<!--${MAIN_CONTENT}-->', renderedApp);

  res.send(renderedHTML);
});

export default router;
