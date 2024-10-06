import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { getTMDBData } from "../apis/getTMDBData.js";
import { TMDB_BANNER_URL, TMDB_MOVIE_LISTS } from "../constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const { results: movies } = await getTMDBData(TMDB_MOVIE_LISTS["nowPlaying"]);

  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

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

  const bannerMovie = movies[0];
  const { backdrop_path, vote_average, title, id } = bannerMovie;

  const renderedApp = renderToString(<App movies={movies} />);

  const renderedHTML = template
    .replace("${background-container}", TMDB_BANNER_URL + backdrop_path)
    .replace("${bestMovie.rate}", vote_average.toFixed(1))
    .replace("${bestMovie.title}", title)
    .replace("${bestMovie.id}", id)
    .replace("<!--${MOVIE_ITEMS_PLACEHOLDER}-->", renderedApp);

  res.send(renderedHTML);
});

export default router;
