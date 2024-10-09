import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { movies } from './constants/movies';

hydrateRoot(document.getElementById('root'), <App movies={movies} />);
