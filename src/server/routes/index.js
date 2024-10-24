import { Router } from 'express';
import { renderMovieDetailHTML, renderRootHTML } from '../utils/render.js';

const router = Router();

router.get('/', async (_, res) => {
  const html = await renderRootHTML();

  res.send(html);
});

router.get('/detail/:id', async (req, res) => {
  const movieId = req.params.id;

  const html = await renderMovieDetailHTML(movieId);

  res.send(html);
});

export default router;
