import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { loadMovies, loadMovieDetail } from '../fetch.js';
import { TMDB_MOVIE_LISTS } from '../../client/constants.js';
import App from '../../client/App.jsx';

const router = Router();

const renderDetail = async (req, res) => {
	const { id } = req.params;

	const templatePath = path.join(__dirname, 'index.html');
	const movies = await loadMovies(TMDB_MOVIE_LISTS.popular);
	const movieDetail = await loadMovieDetail(id);

	const renderedApp = renderToString(
		<StaticRouter location={`/detail/${id}`}>
			<App movies={movies} movieDetail={movieDetail} />
		</StaticRouter>
	);

	let template = fs.readFileSync(templatePath, 'utf-8');
	template = template.replace(
		'<!--${INIT_DATA_AREA}-->',
		/*html*/ `
	  <script>
	    window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)},
        movieDetail: ${JSON.stringify(movieDetail)}
	    }
	  </script>
	`
	);
	template = template.replace('<div id="wrap"></div>', `<div id="wrap">${renderedApp}</div>`);

	res.send(template);
};

router.use('/detail/:id', (req, res) => renderDetail(req, res));

export default router;
