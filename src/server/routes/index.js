import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../../client/App";
import { getMovies, getMovieDetail } from "../api/movie";

const router = Router();

router.get("/", async (req, res) => {
  const movies = await getMovies();

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <App movies={movies} />
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const initHTML = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `
  );

  res.send(
    initHTML.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

router.get("/detail/:id", async (req, res) => {
  console.log("detail");
  const movies = await getMovies();
  const movieDetail = await getMovieDetail(req.params.id);

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <App movies={movies} movieDetail={movieDetail} />
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const initHTML = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
        movieDetail: ${JSON.stringify(movieDetail)}
      }
    </script>
  `
  );

  res.send(
    initHTML.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

export default router;
