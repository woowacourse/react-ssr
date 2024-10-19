import { Router } from 'express';
import { renderHome, renderMovieDetail } from './render';
import PATH from '@shared/paths';

const router = Router();

router.get(PATH.home, async (_, res) => {
  const homePage = await renderHome();
  res.send(homePage);
});

router.get(PATH.movieDetail, async (req, res) => {
  const movieDetailPage = await renderMovieDetail(req.params.id);
  res.send(movieDetailPage);
});

export default router;
