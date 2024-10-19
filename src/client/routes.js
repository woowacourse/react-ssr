import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Detail from './components/Detail';

const initialData = window.__INITIAL_DATA__;
const { movieList } = initialData.movieList ?? [];

const routes = [
  {
    path: '/',
    element: <App movieList={movieList} />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
];

const router = createBrowserRouter(routes);

export default router;
