import App from '../../client/App';
import fs from 'fs';
import path from 'path';

import React from 'react';
import {Router} from 'express';
import {renderToString} from 'react-dom/server';
import {getMovies} from '../services/movieService';

const router = Router();

router.use('/', async (_, res) => {
  const movies = await getMovies('now_playing');

  const renderedApp = renderToString(<App movies={movies} />);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
