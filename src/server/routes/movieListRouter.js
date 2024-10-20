import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";

import Header from "../../client/components/Header";
import MovieList from "../../client/components/MovieList";
import { fetchNowPlayingMovieList } from "../apis/movies";

const movieListRouter = Router();

movieListRouter.use("/", async (_, res) => {
  const nowPlayingMovies = await fetchNowPlayingMovieList();

  const renderedHeader = renderToString(<Header movie={nowPlayingMovies[0]} />);
  const renderedMovieList = renderToString(
    <MovieList movies={nowPlayingMovies} />
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const responseHTML = template
    .replace(
      '<header id="header"></header>',
      `<header id="header">${renderedHeader}</header>`
    )
    .replace(
      '<section id="movie-list" class="container"></section>',
      `<section id="movie-list" class="container">${renderedMovieList}</section>`
    )
    .replace(
      "<!--${INITIAL_DATA_AREA}-->",
      /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(nowPlayingMovies)}
        }
      </script>
    `
    );

  res.send(responseHTML);
});

export default router;
