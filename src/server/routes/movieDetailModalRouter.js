import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";

import Header from "../../client/components/Header";
import MovieList from "../../client/components/MovieList";
import { fetchMovieDetailData, fetchNowPlayingMovieList } from "../apis/movies";
import MovieDetailModal from "../../client/components/MovieDetailModal";

const movieDetailModalRouter = Router();

movieDetailModalRouter.use("/detail/:id", async (req, res) => {
  const { id: movieId } = req.params;

  const nowPlayingMovies = await fetchNowPlayingMovieList();
  const movieDetail = await fetchMovieDetailData({ movieId });

  const renderedModal = renderToString(
    <MovieDetailModal movieDetail={movieDetail} />
  );
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
    .replace("<!--${MODAL_AREA}-->", renderedModal)
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
