import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { fetchMovies } from "../utils/tmdb";
import App from "../../client/App";

const router = Router();

router.use("/", async (_, res) => {
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const movies = await fetchMovies("nowPlaying");

  const renderedApp = renderToString(<App movies={movies} />);

  res.send(
    template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>
      <script>window.__INITIAL_DATA__ = ${JSON.stringify({
        movies,
      })}</script>`
    )
  );
});

export default router;
