import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import { fetchMovies } from "../utils/tmdb";
import App from "../../client/App";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const nowPlayingMovies = await fetchMovies("nowPlaying");

  const template = fs.readFileSync(templatePath, "utf-8");
  const renderedApp = renderToString(<App movies={nowPlayingMovies} />);
  const renderedHTML = template
    .replace("<!--${APP_AREA}-->", renderedApp)
    .replace(
      "<!--${INIT_DATA_AREA}-->",
      /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(nowPlayingMovies)}
        }
      </script>
      <script type="module" src="/bundle"></script>
    `
    );

  res.send(renderedHTML);
});

export default router;
