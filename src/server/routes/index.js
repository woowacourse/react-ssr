import { Router } from 'express';
import { renderRootHTML } from '../utils/render.js';

const router = Router();

router.get('/', async (_, res) => {
  const html = await renderRootHTML();

  res.send(html);
});

export default router;
