import { Router } from 'express';
import { renderHTML } from '../utils/render.js';

const router = Router();

router.get('/', async (_, res) => {
  const html = await renderHTML();

  res.send(html);
});

export default router;
