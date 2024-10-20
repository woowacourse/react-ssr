import fs from 'fs';
import path from 'path';
import { Router } from 'express';
import { getMovieDetails, getMovies } from '../src/apis';
import { MOVIE_LIST_TYPE, TMDB_MOVIE_LISTS } from '../src/constants';
import { getRenderedInitData, getRenderedMain, getRenderedMovieDetail } from '../src/renders';

const router = Router();

router.get('/detail/:id', async (req, res) => {
  const movies = await getMovies(TMDB_MOVIE_LISTS[MOVIE_LIST_TYPE.default]);
  const movieDetail = await getMovieDetails(req.params.id);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(
    template
      .replace('<!--${SSR_HTML_SLOT}-->', getRenderedMovieDetail(movies, movieDetail))
      .replace('<!--${INIT_DATA_AREA}-->', getRenderedInitData(movies, movieDetail))
  );
});

router.get('/', async (req, res) => {
  const movies = await getMovies(TMDB_MOVIE_LISTS[MOVIE_LIST_TYPE.default]);
  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(
    template
      .replace('<!--${SSR_HTML_SLOT}-->', getRenderedMain(movies))
      .replace('<!--${INIT_DATA_AREA}-->', getRenderedInitData(movies))
  );
});

export default router;
