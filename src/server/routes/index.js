import { Router } from 'express';
import { renderHome, renderMovieDetail } from './render';
import PATH from '@shared/paths';

const router = Router();

router.get(PATH.home, async (req, res) => {
  const homePage = await renderHome(req.url);
  res.send(homePage);
});

router.get(PATH.movieDetail, async (req, res) => {
  const movieDetailPage = await renderMovieDetail(req.url, req.params.id);
  res.send(movieDetailPage);
});

export default router;
