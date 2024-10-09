import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { getPopularMovies } from "../api";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const popularMoviesResponse = await getPopularMovies();

  const popularMovies = popularMoviesResponse.map(
    ({ id, title, poster_path, backdrop_path, vote_average }) => ({
      id,
      title,
      thumbnail: poster_path,
      rate: vote_average.toFixed(1),
      backdropPath: backdrop_path,
    }),
  );

  const renderedApp = renderToString(<App movies={popularMovies} />);

  const template = fs.readFileSync(templatePath, "utf-8");

  const renderedHTML = template.replace("<!--${WRAP_PLACEHOLDER}-->", renderedApp).replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(popularMovies)}
        }
      </script>
    `,
  );

  res.send(renderedHTML);
});

export default router;
