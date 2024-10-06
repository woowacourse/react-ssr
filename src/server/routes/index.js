import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import fetchNowPlayingMovies from '../apis/movies.js';
import { TMDB_BANNER_URL } from '../constants/movies.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', async (_, res) => {
  const nowPlayingMovies = await fetchNowPlayingMovies();

  const templatePath = path.join(__dirname, '../../../views', 'index.html');
  const renderedApp = renderToString(<App movies={nowPlayingMovies} />);

  const template = fs.readFileSync(templatePath, 'utf-8');

  const initData = template.replace(
    '<!--${INIT_DATA_AREA}-->',
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(nowPlayingMovies)}
      }
    </script>
  `
  );

  const bestMovie = nowPlayingMovies[0];
  const bestMovieRate = bestMovie.vote_average.toFixed(1);
  const bestMovieTitle = bestMovie.title;
  const bestMovieBackground = TMDB_BANNER_URL + '/' + bestMovie.backdrop_path;

  const renderedHTML = initData
    .replace('<!--${MOVIE_ITEMS_PLACEHOLDER}-->', renderedApp)
    .replace('${bestMovie.rate}', bestMovieRate)
    .replace('${bestMovie.title}', bestMovieTitle)
    .replace('${background-container}', bestMovieBackground);

  res.send(renderedHTML);
});

export default router;
