import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import {
  getMovies,
  getBackgroundImageUrl,
  TMDB_MOVIE_LISTS,
} from "../../api/tmdb";
import round from "../../utils/round";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const movies = await getMovies(TMDB_MOVIE_LISTS.nowPlaying);
  const movie = movies[0] ?? {
    id: -1,
    title: "",
    bannerUrl: "",
    vote_average: 0,
  };

  const renderedApp = renderToString(<App />);

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

  const renderedHTML = template
    .replace("<!--${MOVIE_ITEMS_PLACEHOLDER}-->", renderedApp)
    .replace("${background-container}", getBackgroundImageUrl(movie))
    .replace("${bestMovie.rate}", round(movie.vote_average, 1))
    .replace("${bestMovie.title}", movie.title);

  res.send(renderedHTML);
});

export default router;
