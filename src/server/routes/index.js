import { Router } from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { fetchMovieDetail, fetchNowPlayingMovies } from './../../client/apis/movies';
import MovieDetail from '../../client/pages/MovieDetail.jsx';
import MoviePage from '../../client/pages/MoviePage.jsx';

const router = Router();

router.get('/', async (req, res) => {
  const nowPlayingMovies = await fetchNowPlayingMovies();

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const initialData = { movies: nowPlayingMovies };

  const renderedApp = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <MoviePage movies={initialData.movies} />
    </StaticRouter>
  );

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(nowPlayingMovies)}
      }
    </script>
  `;

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>${initData}`));
});

router.get('/detail/:id', async (req, res) => {
  const movieId = req.params.id;
  const nowPlayingMovies = await fetchNowPlayingMovies();
  const movieDetail = await fetchMovieDetail(movieId);

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const initialData = { movies: nowPlayingMovies, movieDetail: movieDetail };

  const renderedApp = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <MoviePage movies={initialData.movies} />
      <MovieDetail detail={initialData.movieDetail} />
    </StaticRouter>
  );

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(nowPlayingMovies)},
        movieDetail: ${JSON.stringify(movieDetail)}
      }
    </script>
  `;

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>${initData}`));
});

export default router;
