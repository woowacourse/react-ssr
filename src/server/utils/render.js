import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { fetchNowPlayingMovies } from '../apis/movies.js';

import { TMDB_BANNER_URL } from '../apis/url';

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
    `;
}

function createBestMovieDetail(nowPlayingMovies) {
  const { title, vote_average, backdrop_path } = nowPlayingMovies.results[0];
  const backdropPath = `${TMDB_BANNER_URL}/${backdrop_path}`;

  return {
    title,
    rate: vote_average.toFixed(1),
    backdropPath,
  };
}

export async function renderHTML() {
  const template = createHTMLTemplate();

  const nowPlayingMovies = await fetchNowPlayingMovies();

  const renderedApp = renderToString(<App movies={nowPlayingMovies} />);

  const { title, rate, backdropPath } = createBestMovieDetail(nowPlayingMovies);

  return template
    .replace('<!--${INIT_DATA_AREA}-->', createInitialDataScript(nowPlayingMovies))
    .replace('<!--${MOVIE_ITEMS_PLACEHOLDER}-->', renderedApp)
    .replace('${bestMovie.title}', title)
    .replace('${bestMovie.rate}', rate)
    .replace('${background-container}', backdropPath);
}
