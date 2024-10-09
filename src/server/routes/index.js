import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { fetchMoviesPopular } from "../apis/movie";
import { parseMovieItems } from "../models/parseMovieItems";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const popularMovies = await fetchMoviesPopular();
  const movieItems = parseMovieItems(popularMovies);
  const bestMovieItem = movieItems[0];

  const templatePath = path.resolve(__dirname, "../../../dist", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movieItems)}
      }
    </script>
  `;

  const renderedApp = renderToString(
    <App popularMovies={movieItems} bestMovieItem={bestMovieItem} />
  );

  res.send(
    template
      .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
      .replace("<!--${INIT_DATA_AREA}-->", initData)
  );
});

export default router;
