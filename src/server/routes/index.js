import { Router } from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { fetchMovie, fetchMovies } from "../utils/tmdb";
import App from "../../client/App";

const router = Router();

router.get("*", async (req, res) => {
  const movies = await fetchMovies("nowPlaying");
  let movieDetail = null;

  const id = req.path.split("/detail/")[1];

  if (id) {
    movieDetail = await fetchMovie(id);
  }

  const html = renderToString(
    <StaticRouter location={req.url}>
      <App movies={movies} movieDetail={movieDetail} />
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  res.send(
    template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>
      <script>window.__INITIAL_DATA__ = ${JSON.stringify({
        movies,
        movieDetail,
      })}</script>`
    )
  );
});

export default router;
