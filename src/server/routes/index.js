import fs from "fs";
import path from "path";

import { Router } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router-dom/server";
import routes from "../../client/app/routes";

const router = Router();

router.use(async (req, res) => {
  const { query, dataRoutes } = createStaticHandler(routes);
  const fetchRequest = new Request("http://localhost:3000" + req.url, {
    method: req.method,
  });

  const context = await query(fetchRequest);
  const router = createStaticRouter(dataRoutes, context);

  const renderedApp = renderToString(
    <StaticRouterProvider
      router={router}
      context={context}
    />
  );
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
