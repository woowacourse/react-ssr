import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import {
  FETCH_OPTIONS,
  TMDB_MOVIE_LISTS,
  TMDB_BACKGROUND_THUMBNAIL,
} from "../../constants";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", async (_, res) => {
  try {
    const popularMovies = await fetch(
      TMDB_MOVIE_LISTS.popular,
      FETCH_OPTIONS
    ).then((res) => res.json());

    const renderedApp = renderToString(<App popularMovies={popularMovies} />);
    const templatePath = path.resolve(__dirname, "index.html");
    const template = fs.readFileSync(templatePath, "utf8");
    res.send(
      template.replace(
        '<div id="root"></div>',
        `<div id="root">${renderedApp}</div>`
      )
    );
  } catch (error) {
    console.log(error);
  }
});

export default router;
