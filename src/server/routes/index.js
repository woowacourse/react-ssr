import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
<<<<<<< HEAD
import { fileURLToPath } from "url";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "../../common/routes";
import createFetchRequest from "../utils/createFetchRequest";

const router = Router();
=======
import { getTMDBData } from "../apis/getTMDBData.js";
import { TMDB_BANNER_URL, TMDB_MOVIE_LISTS } from "../constants.js";
import App from "../../client/App.jsx";
>>>>>>> a6f5ac2d7ceab8b83ab8c8872de496f3e48fb52e

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
router.use("*", async (req, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(createFetchRequest(req, res));

  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);

  const renderedApp = renderToString(<StaticRouterProvider router={router} context={context} />);

  res.send(
    template
      .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
      .replace(
        "<!--${INITIAL_DATA_PLACEHOLDER}-->",
        `<script>window.__INITIAL_DATA__ = ${JSON.stringify(context.loaderData)}</script>`
      )
  );
=======
const router = Router();

router.get("/", async (_, res) => {
  const { results: movies } = await getTMDBData(TMDB_MOVIE_LISTS["nowPlaying"]);

  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const bannerMovie = movies[0];
  const { backdrop_path, vote_average, title, id } = bannerMovie;

  const renderedApp = renderToString(<App movies={movies} />);

  const renderedHTML = template
    .replace("${background-container}", TMDB_BANNER_URL + backdrop_path)
    .replace("${bestMovie.rate}", vote_average.toFixed(1))
    .replace("${bestMovie.title}", title)
    .replace("${bestMovie.id}", id)
    .replace("<!--${MOVIE_LIST_PLACEHOLDER}-->", renderedApp);

  res.send(renderedHTML);
>>>>>>> a6f5ac2d7ceab8b83ab8c8872de496f3e48fb52e
});

export default router;
