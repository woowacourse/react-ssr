import { hydrateRoot } from 'react-dom/client';
import App from './App';

const moviesData = window.__INITIAL_DATA__;

hydrateRoot(
  document.getElementById('wrap'),
  <App movies={moviesData.movies} />,
);
