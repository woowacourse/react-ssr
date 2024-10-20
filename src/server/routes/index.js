import App from "../../client/App";
import fs from "fs";
import path from "path";
import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { fetchMovieDetail, fetchMovies } from "../api";
import { TMDB_MOVIE_LISTS } from "../../constant";
import App from "../../client/App";

const router = Router();

router.get("/", async (req, res) => {
  const movies = await fetchMovies(TMDB_MOVIE_LISTS.NOW_PLAYING);

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <App
        movies={movies.results}
        movieDetailItem={null}
      />
    </StaticRouter>
  );

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies.results)}
      }
    </script>
  `;

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>${initData}`));
});

router.get("/detail/:id", async (req, res) => {
  const movies = await fetchMovies(TMDB_MOVIE_LISTS.NOW_PLAYING);
  const movieId = req.params.id;
  const movieDetailItem = await fetchMovieDetail(movieId);

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <App
        movies={movies.results}
        movieDetailItem={movieDetailItem}
      />
    </StaticRouter>
  );

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies.results)}
        movieDetailItem: ${JSON.stringify(movieDetailItem)}
      }
    </script>
  `;

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>${initData}`));
});

export default router;
