import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { fetchNowPlayingMovies } from '../apis/movies.js';

import App from '../../client/App.jsx';

export function createHTMLTemplate() {
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  return template;
}

export async function renderRootHTML() {
  const template = createHTMLTemplate();

  const nowPlayingMovies = await fetchNowPlayingMovies();

  const renderedApp = renderToString(
    <StaticRouter location={'/'}>
      <App movies={nowPlayingMovies} />
    </StaticRouter>
  );

  return template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`).replace(
    '<!--${INIT_DATA_AREA}-->',
    `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(nowPlayingMovies)}
        }
      </script>
    `
  );
}
