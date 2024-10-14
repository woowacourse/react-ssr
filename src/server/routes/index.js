import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from '../constants.js';
import MovieList from '../../client/components/MovieList';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const parseMovieItem = (movieItemData) => {
  return {
    id: movieItemData.id,
    title: movieItemData.title,
    rate: movieItemData.vote_average,
    background: movieItemData.backdrop_path,
  };
};

const parseMovieList = (movieList) => {
  return movieList.results.map((item) => parseMovieItem(item));
};

const fetchNowPlayingMovies = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.NOW_PLAYING, FETCH_OPTIONS);
  const data = await response.json();

  return parseMovieList(data);
};

router.get('/', async (_, res) => {
  const templatePath = path.join(__dirname, '../../../views', 'index.html');
  const movieList = await fetchNowPlayingMovies();
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
  `,
  );

  const renderedHTML = initData.replace('<!--${APP_AREA}-->', renderedApp);

  res.send(renderedHTML);
});

export default router;
