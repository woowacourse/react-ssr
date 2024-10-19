import fs from "fs";
import path from "path";
import { Router } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "../../common/routes";

// --------------------------------------
function createFetchRequest(req, res) {
  let origin = `${req.protocol}://${req.get("host")}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  let url = new URL(req.originalUrl || req.url, origin);

  let controller = new AbortController();
  res.on("close", () => controller.abort());

  let headers = new Headers();

  for (let [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  let init = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }

  return new Request(url.href, init);
}
// --------------------------------------

const router = Router();

router.use("/", async (req, res) => {
  const { query, dataRoutes } = createStaticHandler(routes);
  const fetchRequest = createFetchRequest(req, res);
  const context = await query(fetchRequest);
  if (context instanceof Response) {
    throw context;
  }
  const router = createStaticRouter(dataRoutes, context);
  const renderedApp = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const renderedHTML = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedApp}</div>`
  );

  res.send(renderedHTML);
});

export default router;
