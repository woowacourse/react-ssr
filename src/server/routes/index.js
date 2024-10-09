import fs from 'fs';
import path from 'path';
import { Router } from 'express';
import { getMovies } from '../src/apis';
import { MOVIE_LIST_TYPE, TMDB_MOVIE_LISTS } from '../src/constants';
import { getRenderedInitData, getRenderedMovies } from '../src/renders';

const router = Router();

router.use('/', async (_, res) => {
  const movies = await getMovies(TMDB_MOVIE_LISTS[MOVIE_LIST_TYPE.default]);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(
    template
      .replace('<!--${SSR_HTML_SLOT}-->', getRenderedMovies(movies, MOVIE_LIST_TYPE.default))
      .replace('<!--${INIT_DATA_AREA}-->', getRenderedInitData(movies))
  );
});

export default router;
