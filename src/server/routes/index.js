import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";

import { TMDB_MOVIE_LISTS } from "../api/endpoints.js";
import { fetchMovieList } from "../api/movies.js";

import App from "../../client/App.jsx";

const router = Router();

router.get("/", async (_, res) => {
  const nowPlayingMovies = await fetchMovieList(TMDB_MOVIE_LISTS.NOW_PLAYING);
  const renderedApp = renderToString(<App nowPlayingMovies={nowPlayingMovies} />);

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(nowPlayingMovies)}
      }
    </script>
  `
  );

  res.send(initData.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
