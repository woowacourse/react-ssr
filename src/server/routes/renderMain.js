import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { loadMovies } from '../fetch.js';
import { TMDB_MOVIE_LISTS } from '../../client/constants.js';
import App from '../../client/App.jsx';

const router = Router();

const renderMain = async (res) => {
	const templatePath = path.resolve(__dirname, 'index.html');
	const movies = await loadMovies(TMDB_MOVIE_LISTS.popular);

	const renderedApp = renderToString(
		<StaticRouter location={'/'}>
			<App movies={movies} movieDetail={null} />
		</StaticRouter>
	);

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
	template = template.replace('<div id="wrap"></div>', `<div id="wrap">${renderedApp}</div>`);

	res.send(template);
};

router.use('/', (_, res) => renderMain(res));

export default router;
