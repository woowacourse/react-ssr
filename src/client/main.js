import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <App
      initialMovieDetail={window.__INITIAL_DATA__.movie}
      movies={window.__INITIAL_DATA__.movies}
    />
  </BrowserRouter>
);
