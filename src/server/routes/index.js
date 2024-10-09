import App from '../../client/App';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { getMovies } from '../src/apis';
import { MOVIE_LIST_TYPE, TMDB_MOVIE_LISTS } from '../src/constants';

const router = Router();

router.use('/', async (_, res) => {
  const defaultMovieListType = MOVIE_LIST_TYPE.popular;
  const movies = await getMovies(TMDB_MOVIE_LISTS[defaultMovieListType]);
  const renderedApp = renderToString(<App movies={movies} movieListType={defaultMovieListType} />);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(template.replace('<!--${SSR_HTML_SLOT}-->', `${renderedApp}`));
});

export default router;
