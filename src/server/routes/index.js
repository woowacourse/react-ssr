import fs from "fs";
import path from "path";

import Home from "../../client/pages/Home";
import MovieDetailModal from "../../client/components/MovieDetailModal";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { getMovieDetail, getPopularMovies } from "../api";

const router = Router();

router.get("/", async (_, res) => {
  try {
    const popularMoviesResponse = await getPopularMovies();

    const popularMovies = popularMoviesResponse.map(
      ({ id, title, poster_path, backdrop_path, vote_average }) => ({
        id,
        title,
        thumbnail: poster_path,
        rate: vote_average.toFixed(1),
        backdropPath: backdrop_path,
      })
    );

    const renderedApp = renderToString(
      <StaticRouter>
        <Home movies={popularMovies} />
      </StaticRouter>
    );

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
      `
      );

    res.send(renderedHTML);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.get("/detail/:id", async (req, res) => {
  try {
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
      })
    );

    const renderedReactApp = renderToString(
      <StaticRouter>
        <Home movies={popularMovies} />
        <MovieDetailModal movie={movieDetail} />
      </StaticRouter>
    );

    const templatePath = path.resolve(__dirname, "index.html");
    const template = fs.readFileSync(templatePath, "utf8");
    const renderedHTML = template
      .replace('<div id="root"></div>', `<div id="root">${renderedReactApp}</div>`)
      .replace(
        "<!--${INIT_DATA_AREA}-->",
        /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(popularMovies)},
          movieDetail: ${JSON.stringify(movieDetail)}
        }
      </script>
    `
      );

    res.send(renderedHTML);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

export default router;
