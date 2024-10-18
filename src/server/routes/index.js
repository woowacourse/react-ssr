import App from "../../client/App";
import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";

import { FETCH_OPTIONS } from "../../constants/fetch";
import { TMDB_MOVIE_LISTS } from "../../constants/tmdb";

const router = Router();

const loadMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};

router.use("/", async (_, res) => {
  const popularMovies = await loadMovies(TMDB_MOVIE_LISTS.popular);

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(popularMovies)}
      }
    </script>
  `;

  const renderedApp = renderToString(<App movieItems={popularMovies} />);

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const templateHtml = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace("<!--${INIT_DATA_AREA}-->", initData);

  res.send(templateHtml);
});

export default router;
