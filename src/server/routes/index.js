import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App.jsx';
import { fetchMovieList } from '../../api/fetchMovieList.js';
import { TMDB_BANNER_URL } from '../../api/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', async (_, res) => {
  const templatePath = path.join(__dirname, '../../../views', 'index.html');
  const movieListData = await fetchMovieList(); // API 호출
  const renderedApp = renderToString(<App movieList={movieListData ?? []} />);
  const bestMovieItem =
    movieListData && movieListData.length > 0 ? movieListData[0] : {};

  const template = fs.readFileSync(templatePath, 'utf-8');
  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = ${JSON.stringify(movieListData)};
    </script>
  `;
  const renderedHTML = template
    .replace('<!--${INIT_DATA_AREA}-->', initData)
    .replace('<!--${MOVIE_ITEMS_PLACEHOLDER}-->', renderedApp)
    .replace(
      '${background-container}',
      TMDB_BANNER_URL + bestMovieItem.backdrop_path
    )
    .replace('${bestMovie.rate}', bestMovieItem.vote_average)
    .replace('${bestMovie.rate}', bestMovieItem.vote_average)
    .replace('${bestMovie.title}', bestMovieItem.title);

  res.send(renderedHTML);
});

export default router;
