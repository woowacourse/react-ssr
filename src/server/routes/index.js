import fs from "fs";
import path from "path";

import App from "../../client/App";
import MovieDetailModal from "../../client/components/MovieDetailModal";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { getMovieDetail, getPopularMovies } from "../api";

const router = Router();

router.get("/", async (_, res) => {
  const popularMoviesResponse = await getPopularMovies();

  const popularMovies = popularMoviesResponse.map(
    ({ id, title, poster_path, backdrop_path, vote_average }) => ({
      id,
      title,
      thumbnail: poster_path,
      rate: vote_average.toFixed(1),
      backdropPath: backdrop_path,
    }),
  );

  const renderedApp = renderToString(<App movies={popularMovies} />);
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const renderedHTML = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(popularMovies)}
        }
      </script>
    `,
    );

  res.send(renderedHTML);
});

router.get("/detail/:id", async (req, res) => {
  const movieId = req.params.id;

  const popularMoviesResponse = await getPopularMovies();
  const movieDetail = await getMovieDetail(movieId);

  const popularMovies = popularMoviesResponse.map(
    ({ id, title, poster_path, backdrop_path, vote_average }) => ({
      id,
      title,
      thumbnail: poster_path,
      rate: vote_average.toFixed(1),
      backdropPath: backdrop_path,
    }),
  );

  const renderedApp = renderToString(<App movies={popularMovies} />);
  const renderedModal = renderToString(<MovieDetailModal movie={movieDetail} />);

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const renderedHTML = template
    .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
    .replace("<!--${MODAL_AREA}-->", renderedModal)
    .replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(popularMovies)}
        }
      </script>
    `,
    );

  res.send(renderedHTML);
});

export default router;
