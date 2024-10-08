import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import { fetchMovieList } from '../src/fetchMovies';
import { TMDB_BANNER_URL, TMDB_MOVIE_LISTS } from '../src/constants';
import { round } from '../../utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', async (_, res) => {
  const templatePath = path.join(__dirname, '../../../views', 'index.html');

  const movieList = await fetchMovieList(TMDB_MOVIE_LISTS.NOW_PLAYING);
  const renderedApp = renderToString(<App movieList={movieList} />);

  const template = fs.readFileSync(templatePath, 'utf-8');
  const initData = template.replace(
    '<!--${INIT_DATA_AREA}-->',
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movieList: ${JSON.stringify(movieList)}
      }
    </script>
  `
  );
  const renderedHTML = initData
    .replace('<!--${MOVIE_ITEMS_PLACEHOLDER}-->', renderedApp)
    .replace(
      '${background-container}',
      `${TMDB_BANNER_URL}${movieList[0].backdrop_path}`
    )
    .replace('${bestMovie.rate}', round(movieList[0].vote_average))
    .replace('${bestMovie.title}', movieList[0].title)
    .replace('${TAB_NOW_PLAYING}', 'selected');

  res.send(renderedHTML);
});

export default router;
