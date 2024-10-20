import App from '../../client/App';
import fs from 'fs';
import path from 'path';

import React from 'react';
import {Router} from 'express';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import {getMovieDetail, getMovies} from '../services/movieService';

const router = Router();

router.use('/detail/:id', async (req, res) => {
  const {id} = req.params;
  const movies = await getMovies('now_playing');
  const movieDetail = await getMovieDetail(id);

  const renderedApp = renderToString(
    <StaticRouter location={`/detail/${id}`}>
      <App movies={movies} movieDetail={movieDetail} />
    </StaticRouter>,
  );

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  const initData = template.replace(
    '<!--${INIT_DATA_AREA}-->',
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)},
        movieDetail: ${JSON.stringify(movieDetail)}
      }
    </script>
  `,
  );

  res.send(initData.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
