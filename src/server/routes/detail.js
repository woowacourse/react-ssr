import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../../client/App.jsx";
import { fetchMovie, fetchMovies } from "../utils/tmdb.js";

const router = Router();

const renderDetail = async (req, res) => {
  const { id } = req.params;

  const templatePath = path.join(__dirname, "index.html");
  const movies = await fetchMovies("popular");
  const movieDetail = await fetchMovie(id);

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <App movies={movies} movieDetail={movieDetail} />
    </StaticRouter>
  );

  let template = fs.readFileSync(templatePath, "utf-8");

  template = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedApp}</div>
    <script>
    window.__INITIAL_DATA__ = {
    movies: ${JSON.stringify(movies)},
    movieDetail: ${JSON.stringify(movieDetail)}
    }
  </script>
    `
  );

  res.send(template);
};

router.use("/detail/:id", (req, res) => renderDetail(req, res));

export default router;
