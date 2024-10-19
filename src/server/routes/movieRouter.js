import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";

import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { routes } from "./routes.jsx";

const router = Router();

router.get("/", async (req, res) => {
  let handler = createStaticHandler(routes);
  // let context = await handler.query(
  //   new Request(
  //     "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
  //     FETCH_OPTIONS
  //   )
  // );
  let context = await handler.query(new Request("https://localhost:3000"));
  let router = createStaticRouter(handler.dataRoutes, context);

  let html = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  res.send(
    template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  );
});

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  let handler = createStaticHandler(routes);
  let context = await handler.query(
    new Request(`https://localhost:3000/detail/${id}`)
  );

  let router = createStaticRouter(handler.dataRoutes, context);
  let html = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  res.send(
    template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  );
});

export default router;
