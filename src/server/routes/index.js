import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import { fetchMovieList } from '../src/fetchMovies';
import { TMDB_MOVIE_LISTS } from '../src/constants';

const router = Router();

router.get('/', async (_, res) => {
  const movieList = await fetchMovieList(TMDB_MOVIE_LISTS.NOW_PLAYING);

  const renderedApp = renderToString(<App movieList={movieList} />);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

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

  res.send(
    initData.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

export default router;
