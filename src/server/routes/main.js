import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../../client/App.jsx";
import { fetchMovies } from "../utils/tmdb.js";

const router = Router();

const renderMain = async (res) => {
  const templatePath = path.resolve(__dirname, "index.html");
  const movies = await fetchMovies("popular");
  const movieDetail = null;

  const renderedApp = renderToString(
    <StaticRouter location={"/"}>
      <App movies={movies} movieDetail={null} />
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

router.use("/", (_, res) => renderMain(res));

export default router;
