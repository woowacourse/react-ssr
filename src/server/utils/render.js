import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { fetchNowPlayingMovies } from '../apis/movies.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import App from '../../client/App';

export function createHTMLTemplate() {
  const templatePath = path.join(__dirname, '../../../views', 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  return template;
}

function createInitialDataScript(movies) {
  return `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(movies)}
        }
      </script>
      <script type="module" src="/bundle"></script>
    `;
}

export async function renderHTML() {
  const template = createHTMLTemplate();

  const nowPlayingMovies = await fetchNowPlayingMovies();

  const renderedApp = renderToString(<App movies={nowPlayingMovies} />);

  return template
    .replace('<!--${MOVIE_ITEMS_PLACEHOLDER}-->', renderedApp)
    .replace('<!--${INIT_DATA_AREA}-->', createInitialDataScript(nowPlayingMovies));
}
