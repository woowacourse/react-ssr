import App from '../../client/App';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { fetchMovieDetail, fetchMovies } from '../api/movie.js';
import { TMDB_MOVIE_LISTS } from '../../constants/constant.js';
import { StaticRouter } from 'react-router-dom/server';

const router = Router();

router.get('/', async (req, res) => {
  const location = req.url;

  const nowPlayingData = await fetchMovies(TMDB_MOVIE_LISTS.nowPlaying);
  const movies = nowPlayingData.results;

  const app = (
    <StaticRouter location={location} context={context}>
      <App movies={movies} />
    </StaticRouter>
  );

  const renderedApp = renderToString(app);

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const initData = template.replace(
    '<!--${INIT_DATA_AREA}-->',
    `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)},
        movieDetail: null
      }
    </script>
    `,
  );

  res.send(
    initData.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`,
    ),
  );
});

router.get('/detail/:id', async (req, res) => {
  const location = req.url;

  const movieId = req.params.id;

  const nowPlayingData = await fetchMovies(TMDB_MOVIE_LISTS.nowPlaying);
  const movies = nowPlayingData.results;

  let movieDetail = null;
  if (movieId) {
    movieDetail = await fetchMovieDetail(movieId);
  }

  const app = (
    <StaticRouter location={location}>
      <App movies={movies} movieDetail={movieDetail} />
    </StaticRouter>
  );

  const renderedApp = renderToString(app);

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const initData = template.replace(
    '<!--${INIT_DATA_AREA}-->',
    `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)},
        movieDetail: ${JSON.stringify(movieDetail)}
      }
    </script>
    `,
  );

  res.send(
    initData.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`,
    ),
  );
});

router.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

export default router;
