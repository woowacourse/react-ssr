import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import {
  FETCH_OPTIONS,
  TMDB_MOVIE_LISTS,
  TMDB_THUMBNAIL_URL,
} from "../../apis/constants";
import { fetchPopularMovieItems } from "../../apis/movies";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  try {
    const popularMovies = await fetchPopularMovieItems();
    const bestMovie = popularMovies[0];

    const templatePath = path.join(__dirname, "../../../views", "index.html");
    const renderedApp = renderToString(<App initialData={popularMovies} />);

    const template = fs.readFileSync(templatePath, "utf-8");

    const renderedHTML = template
      .replace("<!--${MOVIE_ITEMS_PLACEHOLDER}-->", renderedApp)
      .replace("${bestMovie.rate}", bestMovie.vote_average.toFixed(1))
      .replace("${bestMovie.title}", bestMovie.title)
      .replace(
        "${background-container}",
        TMDB_THUMBNAIL_URL + bestMovie.backdrop_path
      )
      .replace(
        "<!--${INIT_DATA_AREA}-->",
        `<script>window.__INITIAL_DATA__ = ${JSON.stringify(
          popularMovies
        )}</script>`
      );

    res.send(renderedHTML);
  } catch (error) {
    console.log(error);
  }
});

export default router;
