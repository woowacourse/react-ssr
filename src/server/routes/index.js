import React from 'react';
import { Router } from 'express';
import fs from 'fs';
import path from 'path';

import { renderToString } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';

import { routes } from './routes';

const router = Router();

router.get('/', async (_, res) => {
  let handler = createStaticHandler(routes);
  let context = await handler.query(new Request('https://localhost:3000'));
  let router = createStaticRouter(handler.dataRoutes, context);
  let html = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(
    template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  );
});

router.get('/detail/:id', async (req, res) => {
  const { id } = req.params;
  let handler = createStaticHandler(routes);
  let context = await handler.query(
    new Request(`https://localhost:3000/detail/${id}`)
  );
  let router = createStaticRouter(handler.dataRoutes, context);
  let html = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(
    template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  );
});

export default router;
