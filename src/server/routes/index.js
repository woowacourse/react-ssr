import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { renderToString } from "react-dom/server";
import React from "react";
import { fetchMovies } from "../api";
import App from "../../client/App";
import { TMDB_MOVIE_LISTS } from "../../constant";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.use("/", async (_, res) => {
  const movies = await fetchMovies(TMDB_MOVIE_LISTS.NOW_PLAYING);

  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const renderedApp = renderToString(<App movies={movies.results} />);
  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `;

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>${initData}`));
});

export default router;
