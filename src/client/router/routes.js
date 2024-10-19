import { generatePath } from 'react-router-dom';
import PATH from '@shared/paths';

const routes = {
  home: () => generatePath(PATH.home),
  movieDetail: (id) => generatePath(PATH.movieDetail, { id }),
};

export default routes;
