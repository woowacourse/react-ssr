import fs from "fs";
import path from "path";
import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { fetchMovies } from "../fetch.js";
import { TMDB_MOVIE_LISTS } from "../constants";
import App from "../../client/App.jsx";

const router = Router();

router.use("/", async (_, res) => {
  const templatePath = path.resolve(__dirname, "index.html");
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

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
