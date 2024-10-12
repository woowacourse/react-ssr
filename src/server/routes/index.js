import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { getTMDBData } from "../apis/getTMDBData.js";
import { TMDB_MOVIE_LISTS } from "../constants.js";
import App from "../../client/App.jsx";
import { fileURLToPath } from "url";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use("/", async (_, res) => {
  const { results: movies } = await getTMDBData(TMDB_MOVIE_LISTS["nowPlaying"]);

  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const renderedApp = renderToString(<App movies={movies} />);

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
