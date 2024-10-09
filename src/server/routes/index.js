import App from "../../client/App";
import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { fetchMovieItems } from "../apis/movies";

const router = Router();

router.use("/", async (_, res) => {
  const { results: movies } = await fetchMovieItems();

  const renderedApp = renderToString(<App movies={movies} />);
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");


  const renderedHTML = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedApp}</div>`
  );

  res.send(renderedHTML);
});

export default router;
