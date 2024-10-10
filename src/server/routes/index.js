import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { getPopularMovies } from "../apis/movieAPI.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

export const round = (value, decimals = 0) => {
  const factor = 10 ** decimals;

  return Math.round(value * factor) / factor;
};

router.get("/", async (_, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");
  const movies = await getPopularMovies();
  const bestMovie = movies.results[0];

  const modifiedTemplate = template
    .replace(
      "${background-container}",
      `https://image.tmdb.org/t/p/w500${bestMovie.backdrop_path}`
    )
    .replace("${bestMovie.title}", bestMovie.title)
    .replace("${bestMovie.rate}", round(bestMovie.vote_average, 1));

  const renderedApp = renderToString(<App movies={movies.results} />);

  // const initData = template.replace(
  //   "<!--${INIT_DATA_AREA}-->",
  //   /*html*/ `
  //   <script>
  //     window.__INITIAL_DATA__ = {
  //       movies: ${JSON.stringify(popularMovies)}
  //     }
  //   </script>
  // `
  // );
  const renderedHTML = modifiedTemplate.replace(
    "<!--${MOVIE_ITEMS_PLACEHOLDER}-->",
    renderedApp
  );

  res.send(renderedHTML);
});

export default router;
