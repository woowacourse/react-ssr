import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Detail from './components/Detail';

const initialData = window.__INITIAL_DATA__;
const { movieList, movieDetail } = initialData ?? [];

const routes = [
  {
    path: '/',
    element: <App movieList={movieList} />,
  },
  {
    path: '/detail/:id',
    element: (
      <>
        <App movieList={movieList} />
        <Detail movieDetail={movieDetail} />,
      </>
    ),
  },
];

const router = createBrowserRouter(routes);

export default router;
