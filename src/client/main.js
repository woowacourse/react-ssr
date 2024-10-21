import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const { movies, movieDetail } = window.__INITIAL_DATA__;

hydrateRoot(
	document.getElementById('wrap'),
	<BrowserRouter>
		<App movies={movies} movieDetail={movieDetail} />
	</BrowserRouter>
);
