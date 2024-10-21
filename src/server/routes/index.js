import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { fileURLToPath } from "url";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "../../common/routes";
import createFetchRequest from "../utils/createFetchRequest";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use("*", async (req, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(createFetchRequest(req, res));

  const router = createStaticRouter(dataRoutes, context);

  const renderedApp = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  res.send(
    template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

export default router;
