
import Home from '../../client/components/Home';
import React from 'react';
import { Router } from 'express';
import { StaticRouter } from 'react-router-dom/server';
import fs from 'fs';
import getMovieDetail from '../../client/apis/getMovieDetail';
import getMovies from '../../client/apis/getMovies';
import path from 'path';
import { renderToString } from 'react-dom/server';

const router = Router();

const templatePath = path.resolve(__dirname, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');


router.use('/details/:movieId', async (req, res) => {
  const id = req.params.movieId;

  const movies = await getMovies.nowPlaying();
  const movieDetail = await getMovieDetail(id);
  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <Home movies={movies} movieDetail={movieDetail} />
    </StaticRouter>
  );

  const result = template
    .replace(
      '<!--aaaaa-->',
      /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)},
        movieDetail: ${JSON.stringify(movieDetail)}
      }
    </script>
  `
    )
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace(
      'href="./static/styles/index.css"',
      'href="../static/styles/index.css"'
    );

  res.send(result);
});

router.use('*', async (req, res) => {
  const movies = await getMovies.nowPlaying();
  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <Home movies={movies} />
    </StaticRouter>
  );

  const result = template
    .replace(
      '<!--aaaaa-->',
      /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `
    )
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);

  res.send(result);

});

export default router;
