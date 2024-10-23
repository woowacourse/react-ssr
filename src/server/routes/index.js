import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL, TMDB_MOVIE_LISTS } from '../constants.js';

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

const parseMovieDetail = (movieDetail) => {
  return {
    id: movieDetail.id,
    rate: movieDetail.vote_average,
    genres: movieDetail.genres,
    background: movieDetail.backdrop_path,
    releaseDate: movieDetail.release_date,
    ...movieDetail,
  };
};

const fetchMovieDetail = async (id) => {
  const fetchUrl = `${TMDB_MOVIE_DETAIL_URL}${id}`;
  const response = await fetch(fetchUrl, FETCH_OPTIONS);
  const data = await response.json();

  return parseMovieDetail(data);
};

const renderRootHTML = (componentTree) => {
  const templateBareBone = getTemplateBareBone();

  return templateBareBone.replace('<div id="root"></div>', `<div id="root">${componentTree}</div>`);
};

const getTemplateBareBone = () => {
  const templatePath = path.resolve(__dirname, 'index.html');

  return fs.readFileSync(templatePath, 'utf8');
};

router.get('/', async (req, res) => {
  const movieList = await fetchNowPlayingMovies();

  const app = renderToString(
    <StaticRouter location={req.url}>
      <App movieList={movieList} />
    </StaticRouter>,
  );

  const html = renderRootHTML(app);

  const htmlWithData = html.replace(
    '<!--${INIT_DATA_AREA}-->',
    /*html*/ `
  <script>
    window.__INITIAL_DATA__ = {
      movieList: ${JSON.stringify(movieList)},
    }
  </script>
  `,
  );

  res.send(htmlWithData);
});

router.get('/detail/:id', async (req, res) => {
  const { id } = req.params;

  const movieDetail = await fetchMovieDetail(id);
  const movieList = await fetchNowPlayingMovies();

  const app = renderToString(
    <StaticRouter location={req.url}>
      <App movieList={movieList} movieDetail={movieDetail} />
    </StaticRouter>,
  );

  const html = renderRootHTML(app);

  const htmlWithData = html.replace(
    '<!--${INIT_DATA_AREA}-->',
    /*html*/ `
  <script>
    window.__INITIAL_DATA__ = {
      movieList: ${JSON.stringify(movieList)},
      movieDetail: ${JSON.stringify(movieDetail)}
    }
  </script>
  `,
  );

  res.send(htmlWithData);
});

export default router;
