import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { fetchNowPlayingMovies } from '../apis/movies.js';

import App from '../../client/App';

export function createHTMLTemplate() {
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  return template;
}

export async function renderHTML() {
  const template = createHTMLTemplate();

  const nowPlayingMovies = await fetchNowPlayingMovies();

  const renderedApp = renderToString(<App movies={nowPlayingMovies} />);

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
