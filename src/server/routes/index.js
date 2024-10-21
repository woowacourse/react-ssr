import App from "../../client/App";
import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { fetchMovies, fetchDetailMovie } from "../apis/movies";

const router = Router();

router.get("*", async (req, res) => {
  const movies = await fetchMovies();

  let movieDetail = null;
  const id = req.originalUrl.split("/detail/")[1];
  if (id) {
    movieDetail = await fetchDetailMovie(id);
  }

  const renderedApp = renderToString(
    <StaticRouter location={req.originalUrl}>
      <App movies={movies} movieDetail={movieDetail} />
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  let template = fs.readFileSync(templatePath, "utf8");

  template = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedApp}</div>
     <script>window.__INITIAL_DATA__ = ${JSON.stringify({ movies, movieDetail })}</script>`
  );

  res.send(template);
});

export default router;
