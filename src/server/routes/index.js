import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { FETCH_OPTIONS } from "../../constants/fetch";
import { TMDB_MOVIE_LISTS } from "../../constants/tmdb";
import Home from "../../client/pages/Home";
import Footer from "../../client/components/Footer";

const router = Router();

const loadMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};

router.use("/", async (req, res) => {
  const popularMovies = await loadMovies(TMDB_MOVIE_LISTS.popular);

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(popularMovies)}
      }
    </script>
  `;

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <div id="wrap">
        <Home movieItems={popularMovies} />
        <Footer />
      </div>
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const templateHtml = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace("<!--${INIT_DATA_AREA}-->", initData);

  res.send(templateHtml);
});

export default router;
