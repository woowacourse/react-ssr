import fs from "fs";
import path from "path";
import { Router } from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import App from "../../client/App";
import { getMovies, TMDB_MOVIE_LISTS } from "../api/tmdb";

const router = Router();

router.use("/", async (_, res) => {
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const movies = await getMovies(TMDB_MOVIE_LISTS.nowPlaying);

  const renderedApp = renderToString(<App movies={movies} />);

  const renderedHTML = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(movies)}
        }
      </script>
    `
    );
  res.send(renderedHTML);
});
export default router;
