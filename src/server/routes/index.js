import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { loadMovies } from '../fetch';
import { TMDB_MOVIE_LISTS } from '../../client/constants';
import App from '../../client/App';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const render = async (res) => {
	const templatePath = path.join(__dirname, '../../../views', 'index.html');
	const movies = await loadMovies(TMDB_MOVIE_LISTS.popular);
	const renderedApp = renderToString(<App movies={movies} />);

	let template = fs.readFileSync(templatePath, 'utf-8');
	template = template.replace(
		'<!--${INIT_DATA_AREA}-->',
		/*html*/ `
	  <script>
	    window.__INITIAL_DATA__ = {
	      movies: ${JSON.stringify(movies)}
	    }
	  </script>
	`
	);
	template = template.replace('<!--${MOVIE_MAIN}-->', renderedApp);

	res.send(template);
};

router.use('/', (_, res) => render(res));

export default router;
