import React from "react";

import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";

import { Router } from "express";

import fs from "fs";
import path from "path";

import createFetchRequest from "../utils/createFetchRequest";

import { routes } from "../../common/router";
import { MOVIE_PAGE_PATH } from "../../common/constants/path";

const router = Router();

router.use(MOVIE_PAGE_PATH.all, async (req, res) => {
  const handler = createStaticHandler(routes);
  const { query, dataRoutes } = handler;

  const fetchRequest = createFetchRequest(req, res);
  const context = await query(fetchRequest);

  const router = createStaticRouter(dataRoutes, context);

  const renderedApp = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  res.send(
    template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

export default router;
