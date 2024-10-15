import { Router } from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App.jsx';
import { fetchMovieList } from '../../api/fetchMovieList.js';

const router = Router();

router.use('/', async (_, res) => {
  const templatePath = path.join(__dirname, '../client', 'index.html');
  const movieListData = await fetchMovieList();

  const renderedApp = renderToString(<App movieList={movieListData ?? []} />);

  const template = fs.readFileSync(templatePath, 'utf-8');
  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = ${JSON.stringify(movieListData)};
    </script>
  `;
  const renderedHTML = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedApp}</div>${initData}`
  );

  res.send(renderedHTML);
});

export default router;
