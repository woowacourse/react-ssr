import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";

import { loadMovies } from "../fetch";

import Movies from "../../client/components/movies";
import { TMDB_MOVIE_LISTS } from "../../constants";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const renderedMovies = renderToString(<Movies />);

  const popularMovies = await loadMovies(TMDB_MOVIE_LISTS.popular);

  const template = fs.readFileSync(templatePath, "utf-8");
  const renderedHTML = template.replace("<!--${MOVIE_ITEMS_PLACEHOLDER}-->", renderedMovies).replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(popularMovies)}
      }
    </script>
    <script type='module' src="/scripts"></script>
  `
  );

  res.send(renderedHTML);
});

export default router;
