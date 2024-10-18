import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { fetchMovieItemDetail, fetchPopularMovies } from "../movies";
import { StaticRouter } from "react-router-dom/server";
import App from "../../client/App";

const router = Router();

router.get("*", async (req, res) => {
  const templatePath = path.resolve(__dirname, "index.html");
  let template = fs.readFileSync(templatePath, "utf-8");

  const fetchedMovies = await fetchPopularMovies();
  const movies = fetchedMovies.results;

  const id = req.params[0].split("/")[2];
  const movie = id ? await fetchMovieItemDetail(id) : null;

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <App initialMovies={movies} initialMovie={movie} />
    </StaticRouter>
  );

  template = template
    .replace(`<div id="root"></div>`, `<div id="root">${renderedApp}</div>`)
    .replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
<script>
  window.__INITIAL_DATA__ = {
    movies: ${JSON.stringify(movies)},
    movie: ${JSON.stringify(movie)}
  };
</script>
`
    );

  res.send(template);
});

export default router;
