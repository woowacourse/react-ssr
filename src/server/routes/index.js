import fs from "fs";
import path from "path";
import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import fetchMovies from "../apis/movies.js";
import App from "../../client/App.jsx";
import { StaticRouter } from "react-router-dom/server";
const router = Router();

router.get("/", async (req, res) => {
  const templatePath = path.resolve(__dirname, "index.html");
  try {
    const movies = await fetchMovies.popular();
    const initialData = { movies: movies };
    const renderedApp = renderToString(
      <StaticRouter location={req.url}>
        <App initialData={initialData} />
      </StaticRouter>
    );

    let template = fs.readFileSync(templatePath, "utf-8");
    template = template.replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(initialData.movies)}
      }
    </script>
  `
    );
    res.send(
      template.replace(
        '<div id="root"></div>',
        `<div id="root">${renderedApp}</div>`
      )
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/detail/:id", async (req, res) => {
  const movieId = req.params.id;
  const templatePath = path.resolve(__dirname, "index.html");
  try {
    const movies = await fetchMovies.popular();
    const movieDetail = await fetchMovies.detail(movieId);
    const initialData = { movies: movies, movieDetail: movieDetail };
    const renderedDetail = renderToString(
      <StaticRouter location={req.url}>
        <App initialData={initialData} />
      </StaticRouter>
    );
    let template = fs.readFileSync(templatePath, "utf-8");
    template = template.replace(
      "<!--${INIT_DATA_AREA}-->",
      `<script>
        window.__INITIAL_DATA__ = { movies: ${JSON.stringify(
          initialData.movies
        )}, movieDetail: ${JSON.stringify(initialData.movieDetail)}};
      </script>`
    );

    res.send(
      template.replace(
        '<div id="root"></div>',
        `<div id="root">${renderedDetail}</div>`
      )
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
