import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { renderToString } from "react-dom/server";
import React from "react";
import { fetchNowPlayingMovies } from "../api";
import App from "../../client/App.jsx";
import { TMDB_BANNER_URL } from "../constant.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const movies = await fetchNowPlayingMovies();
  const bestMovieItem = movies.results[0];

  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const renderedApp = renderToString(<App movies={movies.results} />);

  const template = fs.readFileSync(templatePath, "utf-8");
  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `
  );

  const renderedHTML = initData
    .replace("${background-container}", TMDB_BANNER_URL + bestMovieItem.backdrop_path)
    .replace("${bestMovie.rate}", bestMovieItem.vote_average)
    .replace("${bestMovie.title}", bestMovieItem.title)
    .replace("<!--${MOVIE_ITEMS_PLACEHOLDER}-->", renderedApp);

  res.send(renderedHTML);
});

export default router;
