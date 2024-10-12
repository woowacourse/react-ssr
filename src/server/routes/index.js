import App from "../../client/App";
import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { fetchMovies } from "../apis/movies";

const router = Router();

router.use("/", async (_, res) => {
  const movies = await fetchMovies();

  const renderedApp = renderToString(<App movies={movies} />);
  const templatePath = path.resolve(__dirname, "index.html");
  let template = fs.readFileSync(templatePath, "utf8");

  template = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedApp}</div>
     <script>window.__INITIAL_DATA__ = ${JSON.stringify({ movies })}</script>`
  );

  res.send(template);
});

export default router;
