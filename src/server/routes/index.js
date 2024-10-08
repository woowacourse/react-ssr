import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { fetchNowPlayingMovies } from "../movies.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  let template = fs.readFileSync(templatePath, "utf-8");

  const fetchedMovies = await fetchNowPlayingMovies();
  const movies = fetchedMovies.results;
  const renderedApp = renderToString(<App movies={movies} />);

  template = template.replace(
    `<div id="wrap"></div>`,
    `<div id="wrap">${renderedApp}</div>`
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
