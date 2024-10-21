import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  StaticRouterProvider,
  createStaticRouter,
  createStaticHandler,
} from 'react-router-dom/server';
import { routes } from './routes';

const router = Router();

router.get('/', async (req, res) => {
  const { query, dataRoutes } = createStaticHandler(routes);
  // const fetchRequest = createFetchRequest(req, res);
  const context = await query(new Request('http://localhost:3000'));
  const router = createStaticRouter(dataRoutes, context);

  const renderedApp = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(
    template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

router.get('/detail/:id', async (req, res) => {
  const { id } = req.params;

  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(
    new Request(`http://localhost:3000/detail/${id}`)
  );
  const router = createStaticRouter(dataRoutes, context);

  const renderedApp = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  const templatePath = path.resolve(__dirname, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  res.send(
    template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

export default router;
