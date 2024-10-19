import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { fetchMovieDetail, fetchMovies } from "../../api/movies.ts";

const router = Router();

router.get("/", async (_, res) => {
  const popularMovies = await fetchMovies();

  const renderedApp = renderToString(<App movies={popularMovies} />);
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  res.send(
    template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>
      <script>window.__INITIAL_DATA__ = ${JSON.stringify({
        popularMovies,
      })}</script>`
    )
  );
});

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;

  const popularMovies = await fetchMovies();
  // const movieDetail = await fetchMovieDetail(id);

  const renderedApp = renderToString(<App movies={popularMovies} />);
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  res.send(
    template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>
      <script>window.__INITIAL_DATA__ = ${JSON.stringify({
        popularMovies,
      })}</script>`
    )
  );
});

export default router;
