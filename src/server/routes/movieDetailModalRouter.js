import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";

import { fetchMovieDetailData, fetchNowPlayingMovieList } from "../apis/movies";
import MovieDetail from "../../client/pages/MovieDetail";

const movieDetailModalRouter = Router();

movieDetailModalRouter.use("/detail/:id", async (req, res) => {
  const { id: movieId } = req.params;

  const nowPlayingMovies = await fetchNowPlayingMovieList();
  const movieDetail = await fetchMovieDetailData({ movieId });

  const renderedPage = renderToString(
    <MovieDetail movies={nowPlayingMovies} movieDetail={movieDetail} />
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  const responseHTML = template
    .replace('<div id="wrap"></div>', `<div id="wrap">${renderedPage}</div>`)
    .replace(
      "<!--${INITIAL_DATA_AREA}-->",
      /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(nowPlayingMovies)}
        currentMovieDetail: ${JSON.stringify(movieDetail)}
      }
    </script>
  `
    );

  res.send(responseHTML);
});

export default movieDetailModalRouter;
