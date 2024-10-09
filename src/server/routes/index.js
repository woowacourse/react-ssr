import App from "../../client/App";
import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { MOVIE_PAGE_PATH, MOVIE_TYPE_KEY } from "../constants/path";
import { fetchMovies } from "../apis/movie";

const router = Router();

router.use(MOVIE_PAGE_PATH.home, async (req, res) => {
  const movies = await fetchMovies(MOVIE_TYPE_KEY[req.path]);

  const renderedApp = renderToString(<App movies={movies} />);
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  res.send(
    template
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
      )
  );
});

export default router;
