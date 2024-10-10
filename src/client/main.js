import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { MOVIE_LIST_TYPE } from '../server/src/constants';

hydrateRoot(
  document.getElementById('root'),
  <App movies={window.__INITIAL_DATA__.movies} movieListType={MOVIE_LIST_TYPE.default} />
);
