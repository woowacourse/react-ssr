import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import { fetchMovies } from "../fetch.js";
import { TMDB_MOVIE_LISTS } from "../constants";
import App from "../../client/App.jsx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const movies = await fetchMovies(TMDB_MOVIE_LISTS.nowPlaying);
  const renderedApp = renderToString(<App bestMovie={movies[0]} movies={movies} />);

  let template = fs.readFileSync(templatePath, "utf-8");
  template = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `
  );
  const renderedHTML = template.replace("<!--${MainContent}-->", renderedApp);

  res.send(renderedHTML);
});

export default router;
