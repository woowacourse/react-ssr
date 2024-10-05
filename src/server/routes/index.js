import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from "../../constants";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const popularMovies = await fetch(
    TMDB_MOVIE_LISTS.popular,
    FETCH_OPTIONS
  ).then((res) => res.json());

  const bestMovie = popularMovies.results[0];

  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const renderedApp = renderToString(<App initialData={popularMovies} />);

  const template = fs.readFileSync(templatePath, "utf-8");
  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = ${JSON.stringify(popularMovies)};
    </script>
  `
  );

  const renderedHTML = initData
    .replace("<!--${MOVIE_ITEMS_PLACEHOLDER}-->", renderedApp)
    .replace("${bestMovie.rate}", bestMovie.vote_average)
    .replace("${bestMovie.title}", bestMovie.title)
    .replace(
      "${background-container}",
      "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" +
        bestMovie.backdrop_path
    );

  res.send(renderedHTML);
});

export default router;
