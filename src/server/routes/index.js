import fs from "fs";
import path from "path";
import { Router } from "express";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { fetchMovieDetail, fetchMovieItems } from "../../common/apis/movies";

import MovieDetailPage from "../../client/pages/MovieDetailPage";
import MoviePage from "../../client/pages/MoviePage";
import Footer from "../../client/components/Footer";

const router = Router();

router.get("/", async (req, res) => {
  const { results: movies } = await fetchMovieItems();

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <MoviePage movies={movies} />
      <Footer />
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)},
      }
    </script>
  `;

  const renderedHTML = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace("<!--${INIT_DATA_AREA}-->", initData);

  res.send(renderedHTML);
});

router.get("/detail/:id", async (req, res) => {
  const { results: movies } = await fetchMovieItems();

  const movieId = req.params.id;
  const movie = await fetchMovieDetail(movieId);

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <MovieDetailPage movies={movies} movie={movie} />
      <Footer />
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)},
        movie: ${JSON.stringify(movie)}
      }
    </script>
  `;

  const renderedHTML = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace("<!--${INIT_DATA_AREA}-->", initData);

  res.send(renderedHTML);
});

export default router;
