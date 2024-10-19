import { Router } from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App.jsx';
import { fetchMovieList } from '../../api/movieRequests.js';
import { StaticRouter } from 'react-router-dom/server';
import Detail from '../../client/components/Detail.jsx';

const router = Router();

router.use('/', async (req, res) => {
  const templatePath = path.join(__dirname, '../client', 'index.html');
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

router.use('/detail/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const templatePath = path.join(__dirname, '../client', 'index.html');
  const movieListData = await fetchMovieList();
  const movieDetailData = await fetchMovieDetail(id);
  console.log(movieDetailData);

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <App movieList={movieListData} />
      <Detail />
    </StaticRouter>
  );

  const template = fs.readFileSync(templatePath, 'utf-8');
  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = ${JSON.stringify({
        movieList: movieListData,
        movieDetail: movieDetailData,
      })};
    </script>
  `;
  const renderedHTML = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace('<!-- INITIAL DATA AREA -->', initData);

  res.send(renderedHTML);
});

export default router;
