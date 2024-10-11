import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { fetchPopularMovies } from "../movies.js";

const router = Router();

router.get("/", async (_, res) => {
  const templatePath = path.resolve(__dirname, "index.html");
  let template = fs.readFileSync(templatePath, "utf-8");

  const fetchedMovies = await fetchPopularMovies();
  const movies = fetchedMovies.results;

  const renderedApp = renderToString(<App movies={movies} />);

  template = template.replace(
    `<div id="root"></div>`,
    `<div id="root">${renderedApp}</div>`
  );

  template = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
  <script>
    window.__INITIAL_DATA__ = {
      movies: ${JSON.stringify(movies)}
    }
  </script>
  `
  );

  res.send(template);
});

export default router;
