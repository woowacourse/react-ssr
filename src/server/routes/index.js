import { Router } from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App.jsx';
import { fetchMovieList } from '../../api/movieRequests.js';
import { StaticRouter } from 'react-router-dom/server';

const router = Router();

router.get('/', async (req, res) => {
  const templatePath = path.join(__dirname, 'index.html');
  const movieListData = await fetchMovieList();

  const template = fs.readFileSync(templatePath, 'utf-8');
  const initData = /*html*/ `
  <script>
    window.__INITIAL_DATA__ = ${JSON.stringify({
      movieList: movieListData,
    })};
  </script>
  `;

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <App movieList={movieListData} />
    </StaticRouter>
  );

  const renderedHTML = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace('<!-- INITIAL DATA AREA -->', initData);

  res.send(renderedHTML);
});

export default router;
