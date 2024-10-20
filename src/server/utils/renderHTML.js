import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { fetchMovieDetailData, fetchNowPlayingMovieList } from "../apis/movies";
import Home from "../../client/pages/Home";
import MovieDetail from "../../client/pages/MovieDetail";

function getTemplate() {
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  return template;
}

export async function renderHomePage() {
  const template = getTemplate();
  const nowPlayingMovies = await fetchNowPlayingMovieList();

  const renderedPage = renderToString(
    <StaticRouter location={"/"}>
      <Home movies={nowPlayingMovies} />
    </StaticRouter>
  );

  const renderedPageHTML = template
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

  return renderedPageHTML;
}

export async function renderMovieDetailPage({ movieId }) {
  const template = getTemplate();
  const nowPlayingMovies = await fetchNowPlayingMovieList();
  const currentMovieDetail = await fetchMovieDetailData({ movieId });

  const renderedPage = renderToString(
    <StaticRouter location={`/detail/${movieId}`}>
      <MovieDetail movies={nowPlayingMovies} movieDetail={currentMovieDetail} />
    </StaticRouter>
  );

  const renderedPageHTML = template
    .replace('<div id="wrap"></div>', `<div id="wrap">${renderedPage}</div>`)
    .replace(
      "<!--${INITIAL_DATA_AREA}-->",
      /*html*/ `
        <script>
          window.__INITIAL_DATA__ = {
            movies: ${JSON.stringify(nowPlayingMovies)},
            currentMovieDetail: ${JSON.stringify(currentMovieDetail)},
          }
        </script>
      `
    );

  return renderedPageHTML;
}
