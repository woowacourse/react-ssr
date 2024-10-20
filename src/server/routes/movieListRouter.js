import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";

import { fetchNowPlayingMovieList } from "../apis/movies";
import Home from "../../client/pages/Home";

const movieListRouter = Router();

movieListRouter.use("/", async (_, res) => {
  const nowPlayingMovies = await fetchNowPlayingMovieList();

  const renderedPage = renderToString(<Home movies={nowPlayingMovies} />);

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const responseHTML = template
    .replace('<div id="wrap"></div>', `<div id="wrap">${renderedPage}</div>`)
    .replace(
      "<!--${INITIAL_DATA_AREA}-->",
      /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(nowPlayingMovies)},
          currentMovieDetail: undefined,
        }
      </script>
    `
    );

  res.send(responseHTML);
});

export default movieListRouter;
