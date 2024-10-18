import fs from 'fs';
import path from 'path';

import React from 'react';
import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import Header from '../../client/components/Header';
import Home from '../../client/pages/Home';
import MovieDetail from '../../client/pages/MovieDetail';

import { getMovies, getMovieDetail } from '../apis/movie.js';
import { TMDB_MOVIE_LISTS, TMDB_MOVIE_DETAIL_URL } from '../constants/index.js';

const router = Router();

router.get('/', async (_, res) => {
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const movies = await getMovies(TMDB_MOVIE_LISTS.nowPlaying);

  const renderedApp = renderToString(
    <StaticRouter location="/">
      <Header bestMovie={movies[0]} />
      <Home movies={movies} />
    </StaticRouter>
  );

  const initData = template.replace(
    '<!--${INIT_DATA_AREA}-->',
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = { movies: ${JSON.stringify(movies)} }
    </script>
    `
  );

  res.send(initData.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

router.get('/detail/:id', async (req, res) => {
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const movies = await getMovies(TMDB_MOVIE_LISTS.nowPlaying);
  const movieDetail = await getMovieDetail(
    TMDB_MOVIE_DETAIL_URL + req.params.id + '?language=ko-KR'
  );

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <Header bestMovie={movies[0]} />
      <MovieDetail movies={movies} movieDetail={movieDetail} />
    </StaticRouter>
  );

  const initData = template.replace(
    '<!--${INIT_DATA_AREA}-->',
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = { 
        movies: ${JSON.stringify(movies)},
        movieDetail: ${JSON.stringify(movieDetail)}
      };
    </script>
    `
  );

  res.send(initData.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
